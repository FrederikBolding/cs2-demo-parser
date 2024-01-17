import { ReadableStream } from "stream/web";
import { DemoCommand, PARSEABLE_DEMO_COMMANDS, parseMessage } from "./commands";
import { uncompress as decompress } from "snappyjs";

const ALLOCATION_SIZE = 10000000; // 10 mb at a time

class StreamReader {
  #reader: ReadableStreamDefaultReader<Uint8Array>;
  #buffer: Uint8Array;
  #readPointer: number;
  #writePointer: number;
  #done: boolean;

  constructor(stream: ReadableStream) {
    this.#reader =
      stream.getReader() as ReadableStreamDefaultReader<Uint8Array>;
    this.#buffer = new Uint8Array(ALLOCATION_SIZE);
    this.#writePointer = 0;
    this.#readPointer = 0;
    this.#done = false;
  }

  #allocate(allocation: number) {
    var newBuffer = new Uint8Array(this.#buffer.length + allocation);
    newBuffer.set(this.#buffer);
    this.#buffer = newBuffer;
  }

  #push(chunk: Uint8Array) {
    const start = this.#writePointer;
    const end = this.#writePointer + chunk.length;
    if (end >= this.#buffer.length) {
      this.#allocate(Math.max(ALLOCATION_SIZE, chunk.length));
    }
    this.#buffer.set(chunk, start);
    this.#writePointer += chunk.length;
    // TODO: Throw away read bytes?
  }

  skip(n: number) {
    this.#readPointer = this.#readPointer + n;
  }

  async read(n: number): Promise<Uint8Array> {
    const start = this.#readPointer;
    const end = this.#readPointer + n;
    if (this.#writePointer >= end) {
      this.#readPointer = end;
      return this.#buffer.subarray(start, end);
    }

    if (this.#done) {
      throw new Error("Read out of bounds");
    }

    const { value, done } = await this.#reader.read();

    if (value) {
      this.#push(value);
    }

    if (done) {
      this.#done = done;
    }

    return this.read(n);
  }

  async readUtf8(n: number): Promise<string> {
    const bytes = await this.read(n);
    return new TextDecoder().decode(bytes);
  }

  async readByte() {
    const bytes = await this.read(1);
    return bytes[0]!;
  }
}

class DemoParser {
  #reader: StreamReader;

  constructor(reader: StreamReader) {
    this.#reader = reader;
  }

  async readVarint() {
    let result = 0;
    for (var i = 0; i < 5; i++) {
      const byte = await this.#reader.readByte();

      result |= (byte & 127) << (7 * i);

      if ((byte & 0x80) === 0) {
        break;
      }
    }
    return result;
  }

  async parse() {
    const magic = await this.#reader.readUtf8(8);

    if (magic !== "PBDEMS2\0") {
      throw new Error("Invalid demo file, only Source 2 format is allowed.");
    }

    // Skip next 8 bytes
    this.#reader.skip(8);

    while (true) {
      const command = await this.readVarint();
      const tick = await this.readVarint();
      const size = await this.readVarint();

      const isCompressed = (command & 64) == 64;
      const messageType = (command & -65) as DemoCommand;

      if (!PARSEABLE_DEMO_COMMANDS.includes(messageType)) {
        this.#reader.skip(size);
        continue;
      }

      if (messageType === DemoCommand.DEM_Stop) {
        break;
      }

      const rawBytes = await this.#reader.read(size);

      const bytes = isCompressed ? decompress(rawBytes) : rawBytes;

      parseMessage(messageType, bytes);
    }
  }
}

export async function parse(stream: ReadableStream) {
  const reader = new StreamReader(stream);
  const parser = new DemoParser(reader);

  console.log("Starting to parse stream...");

  await parser.parse();

  console.log("Parsing finished!");
}
