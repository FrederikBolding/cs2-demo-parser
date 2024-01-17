import { uncompress } from "snappyjs";

export function decompress(bytes: Uint8Array) {
  return uncompress(bytes);
}
