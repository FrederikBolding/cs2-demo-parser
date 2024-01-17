import {
  CDemoFullPacket,
  CDemoPacket,
  CDemoStringTables,
} from "./generated/demo";
import { ByteReader } from "./bytes";
import {
  CMsgPlayerInfo,
  CNETMsg_Disconnect,
  CNETMsg_NOP,
  CNETMsg_StringCmd,
  CNETMsg_Tick,
  NET_Messages,
} from "./generated/cs_gameevents";
import {
  CSVCMsg_CreateStringTable,
  CSVCMsg_ServerInfo,
  SVC_Messages,
} from "./generated/netmessages";
import { EBaseGameEvents } from "./generated/gameevents";
import {
  CUserMessageSayText2,
  EBaseUserMessages,
} from "./generated/usermessages";
import { parsePacketEntities } from "./entities";
import { DemoParser } from "./parser";
import { decompress } from "./compression";

// This whole function needs a rewrite
function parseCreateStringTable(parser: DemoParser, rawBytes: Uint8Array) {
  const decoded = CSVCMsg_CreateStringTable.decode(rawBytes);

  if (decoded.name !== "instancebaseline" && decoded.name !== "userinfo") {
    return null;
  }

  const bytes = decoded.dataCompressed
    ? decompress(decoded.stringData)
    : decoded.stringData;

  const reader = new ByteReader(bytes);

  const keys = new Array<string>(32).fill("");
  let index = -1;
  for (var i = 0; i < decoded.numEntries; i++) {
    const offset = !reader.readBoolean() ? reader.readUBitVar() : 0;
    index = index + 1 + offset;

    const hasKey = reader.readBoolean();
    let key = "";

    if (hasKey) {
      const useHistory = reader.readBoolean();

      if (useHistory) {
        const position = reader.readBits(5);
        const length = reader.readBits(5);
        const str = reader.readString();
        if (position >= keys.length) {
          key += str;
        } else {
          const k = keys[position]!;
          if (length > k.length) {
            key += k + str;
          } else {
            key += k.slice(0, length) + str;
          }
        }
      } else {
        key = reader.readString();
      }
    }

    const hasValue = reader.readBoolean();

    if (hasValue) {
      let bits = 0;
      let isCompressed = false;

      if (decoded.userDataFixedSize) {
        bits = decoded.userDataSize; // OR userDataSizeBits??
      } else {
        if ((decoded.flags & 0x1) !== 0) {
          isCompressed = reader.readBoolean();
        }

        if (decoded.usingVarintBitcounts) {
          bits = reader.readUBitVar() * 8;
        } else {
          bits = reader.readBits(17) * 8;
        }
      }
      const rawValue = reader.read(bits / 8);
      const value = isCompressed ? decompress(rawValue) : rawValue;

      if (decoded.name === "instancebaseline" && key.length > 0) {
        const parsedKey = parseInt(key, 10);
        parser.baselines[parsedKey] = value;
      }
    }
  }

  // TODO
  return null;
}

function parsePacketMessage(
  parser: DemoParser,
  type: number,
  bytes: Uint8Array
) {
  switch (type) {
    case NET_Messages.net_NOP:
      return CNETMsg_NOP.decode(bytes);
    case NET_Messages.net_Disconnect:
      return CNETMsg_Disconnect.decode(bytes);
    case NET_Messages.net_Tick:
      return CNETMsg_Tick.decode(bytes);
    case NET_Messages.net_StringCmd:
      return CNETMsg_StringCmd.decode(bytes);
    case SVC_Messages.svc_ServerInfo:
      return CSVCMsg_ServerInfo.decode(bytes);
    case SVC_Messages.svc_CreateStringTable: {
      return parseCreateStringTable(parser, bytes);
    }
    case SVC_Messages.svc_UpdateStringTable:
    case SVC_Messages.svc_ClearAllStringTables:
      return null; // TODO: Deal with string tables
    case EBaseGameEvents.GE_Source1LegacyGameEventList:
      return null; // TODO: Deal with game events?
    case SVC_Messages.svc_PacketEntities:
      return parsePacketEntities(parser, bytes);
    case EBaseUserMessages.UM_SayText2: {
      // console.log(CUserMessageSayText2.decode(bytes));
      return null;
    }

    default:
      return null;
    //throw new Error(`Unknown packet type: ${type}`);
  }
}

export function parsePacket(parser: DemoParser, bytes: Uint8Array) {
  const packet = CDemoPacket.decode(bytes);
  return parsePacketBytes(parser, packet.data);
}

function parsePacketBytes(parser: DemoParser, bytes: Uint8Array) {
  const byteReader = new ByteReader(bytes);
  const messages = [];
  while (byteReader.getBytesLeft() > 0) {
    const messageType = byteReader.readUBitVar();
    const messageLength = byteReader.readVarint();
    const messageBytes = byteReader.read(messageLength);

    const parsedMessage = parsePacketMessage(parser, messageType, messageBytes);

    if (parsedMessage) {
      messages.push(parsedMessage);
      //console.log(messages[messages.length - 1]);
    }
  }
  return messages;
}

export function parseFullPacket(parser: DemoParser, bytes: Uint8Array) {
  const packet = CDemoFullPacket.decode(bytes);
  const tables = (packet.stringTable as CDemoStringTables).tables;
  let players = null;
  for (const table of tables) {
    if (table.tableName === "userinfo" && table.items) {
      players = table.items
        .filter((player) => player.data)
        .map((player) => CMsgPlayerInfo.decode(player.data!))
        .filter((player) => player.userid);
    }

    if (table.tableName === "instancebaseline" && table.items) {
      console.log("BASELINES", table.items);
    }
  }
  const innerPacket = packet.packet;
  const innerPacketParsed = parsePacketBytes(parser, innerPacket.data);
  // TODO
  return { players };
}
