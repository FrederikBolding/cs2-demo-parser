import { ByteReader } from "./bytes";
import { Heap } from "heap-js";

export interface FieldPath {
  last: number;
  path: number[];
  done: boolean;
}

function pop(path: FieldPath, n: number) {
  for (let i = 0; i < n; i++) {
    path.path[path.last] = 0;
    path.last--;
  }
}

export const FIELD_PATHS = {
  Plus1: {
    weight: 36271,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last]++;
    },
  },
  Plus2: {
    weight: 10334,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += 2;
    },
  },
  Plus3: {
    weight: 1375,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += 3;
    },
  },
  Plus4: {
    weight: 646,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += 4;
    },
  },
  PlusN: {
    weight: 4128,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath() + 5;
    },
  },
  PushOneLeftDeltaZeroRightZero: {
    weight: 35,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = 0;
    },
  },
  PushOneLeftDeltaZeroRightNonZero: {
    weight: 3,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readUBitVarFieldPath();
    },
  },
  PushOneLeftDeltaOneRightZero: {
    weight: 521,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last]++;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = 0;
    },
  },
  PushOneLeftDeltaOneRightNonZero: {
    weight: 2942,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last]++;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readUBitVarFieldPath();
    },
  },
  PushOneLeftDeltaNRightZero: {
    weight: 560,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = 0;
    },
  },
  PushOneLeftDeltaNRightNonZero: {
    weight: 471,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath() + 2;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readUBitVarFieldPath() + 1;
    },
  },
  PushOneLeftDeltaNRightNonZeroPack6Bits: {
    weight: 10530,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readBits(3) + 2;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readBits(3) + 1;
    },
  },
  PushOneLeftDeltaNRightNonZeroPack8Bits: {
    weight: 251,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readBits(4) + 2;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readBits(4) + 1;
    },
  },
  PushTwoLeftDeltaZero: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
    },
  },
  PushTwoPack5LeftDeltaZero: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readBits(5);
    },
  },
  PushThreeLeftDeltaZero: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
    },
  },
  PushThreePack5LeftDeltaZero: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readBits(5);
    },
  },
  PushTwoLeftDeltaOne: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last]++;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] = reader.readUBitVarFieldPath();
    },
  },
  PushTwoPack5LeftDeltaOne: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last]++;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
    },
  },
  PushThreeLeftDeltaOne: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last]++;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
    },
  },
  PushThreePack5LeftDeltaOne: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last]++;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
    },
  },
  PushTwoLeftDeltaN: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readUBitVar() + 2;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
    },
  },
  PushTwoPack5LeftDeltaN: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readUBitVar() + 2;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
    },
  },
  PushThreeLeftDeltaN: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readUBitVar() + 2;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
    },
  },
  PushThreePack5LeftDeltaN: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last] += reader.readUBitVar() + 2;
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
      fieldPath.last++;
      fieldPath.path[fieldPath.last] += reader.readBits(5);
    },
  },
  PushN: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      const n = reader.readUBitVar();
      fieldPath.path[fieldPath.last] += reader.readUBitVar();
      for (let i = 0; i < n; i++) {
        fieldPath.last++;
        fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath();
      }
    },
  },
  PushNAndNonTopological: {
    weight: 310,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      throw new Error("not implemented");
    },
  },
  PopOnePlusOne: {
    weight: 2,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      pop(fieldPath, 1);
      fieldPath.path[fieldPath.last]++;
    },
  },
  PopOnePlusN: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      pop(fieldPath, 1);
      fieldPath.path[fieldPath.last] += reader.readUBitVarFieldPath() + 1;
    },
  },
  PopAllButOnePlusOne: {
    weight: 1837,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      pop(fieldPath, fieldPath.last);
      fieldPath.path[0]++;
    },
  },
  PopAllButOnePlusN: {
    weight: 149,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      pop(fieldPath, fieldPath.last);
      fieldPath.path[0] += reader.readUBitVarFieldPath() + 1;
    },
  },
  PopAllButOnePlusNPack3Bits: {
    weight: 300,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      pop(fieldPath, fieldPath.last);
      fieldPath.path[0] += reader.readBits(3) + 1;
    },
  },
  PopAllButOnePlusNPack6Bits: {
    weight: 634,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      pop(fieldPath, fieldPath.last);
      fieldPath.path[0] += reader.readBits(6) + 1;
    },
  },
  PopNPlusOne: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      pop(fieldPath, reader.readUBitVarFieldPath());
      fieldPath.path[0]++;
    },
  },
  PopNPlusN: {
    weight: 0,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      throw new Error("not implemented");
    },
  },
  PopNAndNonTopographical: {
    weight: 1,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      throw new Error("not implemented");
    },
  },
  NonTopoComplex: {
    weight: 76,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      throw new Error("not implemented");
    },
  },
  NonTopoPenultimatePlusOne: {
    weight: 271,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.path[fieldPath.last - 1]++;
    },
  },
  NonTopoComplexPack4Bits: {
    weight: 99,
    func: (reader: ByteReader, fieldPath: FieldPath) => {
      for (let i = 0; i <= fieldPath.last; i++) {
        if (reader.readBoolean()) {
          fieldPath.path[i] += reader.readBits(4) - 7;
        }
      }
    },
  },
  FieldPathEncodeFinish: {
    weight: 25474,
    func: (_reader: ByteReader, fieldPath: FieldPath) => {
      fieldPath.done = true;
    },
  },
};

const FIELD_PATHS_ARRAY = Object.values(FIELD_PATHS);

interface HuffmanNode {
  value: number;
  weight: number;
  isLeaf: boolean;
  left?: HuffmanNode | undefined;
  right?: HuffmanNode | undefined;
}

function buildHuffmanTree() {
  const heap = new Heap<HuffmanNode>((a, b) => {
    if (a.weight === b.weight) {
      return b.value - a.value;
    }
    return a.weight - b.weight;
  });

  const fieldPaths = Object.values(FIELD_PATHS);

  const nodes = fieldPaths.map<HuffmanNode>((fieldPath, index) => ({
    value: index,
    weight: fieldPath.weight,
    isLeaf: true,
  }));

  heap.push(...nodes);

  let n = 40;

  while (heap.size() > 1) {
    const left = heap.pop()!;
    const right = heap.pop()!;

    heap.push({
      weight: left.weight + right.weight,
      value: n,
      left,
      right,
      isLeaf: false,
    });
    n++;
  }

  return heap.pop();
}

export const HUFFMAN_TREE = buildHuffmanTree();

const DEFAULT_PATH = [-1, 0, 0, 0, 0, 0, 0];

export function readFieldPaths(reader: ByteReader) {
  const fieldPath: FieldPath = {
    path: [...DEFAULT_PATH],
    last: 0,
    done: false,
  };

  let next = HUFFMAN_TREE;
  let node = HUFFMAN_TREE;
  const paths = [];

  while (!fieldPath.done) {
    if (reader.readBoolean()) {
      next = node!.right;
    } else {
      next = node!.left;
    }

    if (next!.isLeaf) {
      node = HUFFMAN_TREE;

      // Run func
      FIELD_PATHS_ARRAY[next!.value]!.func(reader, fieldPath);
      if (fieldPath.done) {
        break;
      }

      paths.push(fieldPath);
    } else {
      node = next;
    }
  }
  return paths;
}
