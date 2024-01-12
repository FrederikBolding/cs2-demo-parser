import fs from 'fs';
import path from 'path';
import { Readable } from "stream";
import { parse } from './parser';

async function main() {
  const fileStream = fs.createReadStream(path.resolve('./test/ence-vs-astralis-m1-overpass.dem'));
  await parse(Readable.toWeb(fileStream));
}

main().catch(console.error);