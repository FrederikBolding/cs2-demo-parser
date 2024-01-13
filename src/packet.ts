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
import { CSVCMsg_ServerInfo, SVC_Messages } from "./generated/netmessages";
import { EBaseGameEvents } from "./generated/gameevents";
import { CUserMessageSayText2, EBaseUserMessages } from "./generated/usermessages";

function parsePacketMessage(type: number, bytes: Uint8Array) {
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
    case SVC_Messages.svc_CreateStringTable:
    case SVC_Messages.svc_UpdateStringTable:
    case SVC_Messages.svc_ClearAllStringTables:
      return null; // TODO: Deal with string tables
    case EBaseGameEvents.GE_Source1LegacyGameEventList:
      return null; // TODO: Deal with game events?
    case SVC_Messages.svc_PacketEntities:
      return null; // TODO: deal with entities
    case EBaseUserMessages.UM_SayText2: {
      console.log(CUserMessageSayText2.decode(bytes))
      return null;
    }

    default:
      return null;
    //throw new Error(`Unknown packet type: ${type}`);
  }
}

export function parsePacket(bytes: Uint8Array) {
  const packet = CDemoPacket.decode(bytes);
  return parsePacketBytes(packet.data);
}

function parsePacketBytes(bytes: Uint8Array) {
  const byteReader = new ByteReader(bytes);
  const messages = [];
  while (byteReader.getBytesLeft() > 0) {
    const messageType = byteReader.readUBitVar();
    const messageLength = byteReader.readVarint();
    const messageBytes = byteReader.read(messageLength);

    const parsedMessage = parsePacketMessage(messageType, messageBytes);

    if (parsedMessage) {
      messages.push(parsedMessage);
      console.log(messages[messages.length - 1]);
    }
  }
  return messages;
}

export function parseFullPacket(bytes: Uint8Array) {
  const packet = CDemoFullPacket.decode(bytes);
  const tables = (packet.stringTable as CDemoStringTables).tables;
  for (const table of tables) {
    if (table.tableName === "userinfo" && table.items) {
      const players = table.items
        .filter((player) => player.data)
        .map((player) => CMsgPlayerInfo.decode(player.data!))
        .filter((player) => player.userid);
      // TODO: Save players somewhere
    }
  }
  const innerPacket = packet.packet;
  const innerPacketParsed = parsePacketBytes(innerPacket.data);
  console.log(innerPacketParsed);
  return packet;
}
