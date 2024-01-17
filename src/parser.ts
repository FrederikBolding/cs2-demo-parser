import { ReadableStream } from "stream/web";
import { DemoCommand, PARSEABLE_DEMO_COMMANDS, parseMessage } from "./commands";
import { StreamReader } from "./stream-reader";
import { CDemoClassInfo } from "./generated/demo";
import { CMsgPlayerInfo } from "./generated/netmessages";
import { decompress } from "./compression";
export class DemoParser {
  #reader: StreamReader;

  // Classes
  classes: CDemoClassInfo["classes"] | null = null;

  // Entities
  entities: any = {};

  // Baselines
  baselines: any = {};

  // Players
  players: CMsgPlayerInfo[] | null = null;

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

      const response = parseMessage(this, messageType, bytes);

      switch (messageType) {
        case DemoCommand.DEM_ClassInfo: {
          this.classes = response as CDemoClassInfo["classes"];
          break;
        }
        case DemoCommand.DEM_FullPacket: {
          this.players = (response as { players: CMsgPlayerInfo[] }).players;
          break;
        }
      }
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
