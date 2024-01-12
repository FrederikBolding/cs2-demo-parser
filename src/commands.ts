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

function parseFileHeader(bytes: Uint8Array) {}

export function parseMessage(type: DemoCommand, bytes: Uint8Array) {
  switch (type) {
    case DemoCommand.DEM_FileHeader: {
      return parseFileHeader(bytes);
    }
    default:
      throw new Error(`Cannot parse message of type "${type}"`);
  }
}