import { ByteReader } from "./bytes";
import { readFieldPaths } from "./field-paths";
import { CSVCMsg_PacketEntities } from "./generated/netmessages";
import { DemoParser } from "./parser";

function updateEntity(parser: DemoParser, reader: ByteReader, index: number) {
  const fieldPaths = readFieldPaths(reader);
  console.log(fieldPaths);
  throw new Error("Entity update failed");
  // TODO: Huffman Trees
}

function createEntity(parser: DemoParser, reader: ByteReader, index: number) {
  const classId = reader.readByte();

  // Skipped for now
  reader.readBits(17);
  reader.readVarint();

  const classObject = parser.classes![classId];
  const entity = { entityClass: classObject, entityId: index };

  parser.entities[index] = entity;

  const baseline = parser.baselines[classId];

  console.log(classId, classObject, baseline);

  return entity;
}

export function parsePacketEntities(parser: DemoParser, bytes: Uint8Array) {
  const decoded = CSVCMsg_PacketEntities.decode(bytes);
  const reader = new ByteReader(decoded.entityData);
  let index = -1;
  for (var i = 0; i < decoded.updatedEntries; i++) {
    index = index + 1 + reader.readUBitVar();
    const command = reader.readBits(2);
    switch (command) {
      // Update
      case 0: {
        updateEntity(parser, reader, index);
        break;
      }
      // Create & Update
      case 2: {
        const entity = createEntity(parser, reader, index);
        updateEntity(parser, reader, index);
        console.log(entity);
        break;
      }
      // Delete
      case 1:
      case 3:
        break;
    }
  }
  //console.log(decoded);

  return null;
}
