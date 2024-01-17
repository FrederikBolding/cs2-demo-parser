import { ReadableStream } from "stream/web";

const ALLOCATION_SIZE = 10000000; // 10 mb at a time

export class StreamReader {
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
    //console.log(this.#writePointer, this.#readPointer)
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
