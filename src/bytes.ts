// Non async version of byte reading utilities from StreamReader and DemoParser
// But with extra handling of bit reading etc
export class ByteReader {
  #buffer: Uint8Array;
  #pointer: number;
  #bitPointer: number;
  // Remaining bits in unaligned mode
  #bitValue: number;

  constructor(buffer: Uint8Array) {
    this.#buffer = buffer;
    this.#pointer = 0;
    this.#bitPointer = 0;
    this.#bitValue = 0;
  }

  getBytesLeft() {
    return this.#buffer.byteLength - this.#pointer;
  }

  skip(n: number) {
    this.#pointer = this.#pointer + n;
  }

  read(n: number): Uint8Array {
    // Reading unaligned bytes seems slow, investigate perf improvements?
    if (this.#bitPointer !== 0) {
      return new Uint8Array(new Array(n).fill(1).map(() => this.readBits(8)));
    }

    const start = this.#pointer;
    const end = this.#pointer + n;

    if (this.#buffer.length < end) {
      throw new Error("ByteReader out of range");
    }

    this.#pointer = end;
    return this.#buffer.subarray(start, end);
  }

  readByte() {
    const bytes = this.read(1);
    return bytes[0]!;
  }

  readByteAligned() {
    if (this.getBytesLeft() <= 0) {
      throw new Error("ByteReader out of range");
    }
    const bytes = this.#buffer.subarray(this.#pointer, this.#pointer + 1);
    this.#pointer++;
    return bytes[0]!;
  }

  readBits(n: number) {
    while (this.#bitPointer < n) {
      const byte = this.readByteAligned();
      this.#bitValue = this.#bitValue | (byte << this.#bitPointer);
      this.#bitPointer += 8;
    }

    const value = this.#bitValue & ((1 << n) - 1);
    this.#bitValue = this.#bitValue >> n;
    this.#bitPointer -= n;
    return value;
  }

  readUBitVar() {
    const bits = this.readBits(6);

    switch (bits & 48) {
      case 16:
        return (bits & 15) | (this.readBits(4) << 4);
      case 32:
        return (bits & 15) | (this.readBits(8) << 4);
      case 48:
        return (bits & 15) | (this.readBits(28) << 4);
      default:
        return bits;
    }
  }

  readVarint() {
    let result = 0;
    for (var i = 0; i < 5; i++) {
      const byte = this.readByte();

      result |= (byte & 127) << (7 * i);

      if ((byte & 0x80) === 0) {
        break;
      }
    }
    return result;
  }
}
