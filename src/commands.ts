import { ByteReader } from "./bytes";
import {
  CDemoClassInfo,
  CDemoFileHeader,
  CDemoSendTables,
} from "./generated/demo";
import { CSVCMsg_FlattenedSerializer } from "./generated/netmessages";
import { parseFullPacket, parsePacket } from "./packet";

export enum DemoCommand {
  DEM_Error = -1,
  DEM_Stop = 0,
  DEM_FileHeader = 1,
  DEM_FileInfo = 2,
  DEM_SyncTick = 3,
  DEM_SendTables = 4,
  DEM_ClassInfo = 5,
  DEM_StringTables = 6,
  DEM_Packet = 7,
  DEM_SignonPacket = 8,
  DEM_ConsoleCmd = 9,
  DEM_CustomData = 10,
  DEM_CustomDataCallbacks = 11,
  DEM_UserCmd = 12,
  DEM_FullPacket = 13,
  DEM_SaveGame = 14,
  DEM_SpawnGroups = 15,
  DEM_AnimationData = 16,
  DEM_Max = 17,
  DEM_IsCompressed = 64,
}

function parseFileHeader(bytes: Uint8Array) {
  const header = CDemoFileHeader.decode(bytes);
  console.log(header);
  return header;
}

function parseSendTables(bytes: Uint8Array) {
  const tables = CDemoSendTables.decode(bytes);
  const byteReader = new ByteReader(tables.data);
  const length = byteReader.readVarint();
  const tableBytes = byteReader.read(length);
  const serializer = CSVCMsg_FlattenedSerializer.decode(tableBytes);
  // TODO: Decode further
  return serializer;
}

function parseClassInfo(bytes: Uint8Array) {
  const classInfo = CDemoClassInfo.decode(bytes);
  // TODO: Decode further
  return classInfo;
}

export const PARSEABLE_DEMO_COMMANDS = [
  DemoCommand.DEM_Stop,
  DemoCommand.DEM_FileHeader,
  DemoCommand.DEM_SignonPacket,
  DemoCommand.DEM_Packet,
  DemoCommand.DEM_FullPacket,
  DemoCommand.DEM_SendTables,
  DemoCommand.DEM_ClassInfo,
];

export function parseMessage(type: DemoCommand, bytes: Uint8Array) {
  switch (type) {
    case DemoCommand.DEM_FileHeader:
      return parseFileHeader(bytes);
    case DemoCommand.DEM_SignonPacket:
    case DemoCommand.DEM_Packet:
      return parsePacket(bytes);
    case DemoCommand.DEM_SendTables:
      return parseSendTables(bytes);
    case DemoCommand.DEM_ClassInfo:
      return parseClassInfo(bytes);
    case DemoCommand.DEM_FullPacket:
      return parseFullPacket(bytes);

    default:
      return null;
  }
}
