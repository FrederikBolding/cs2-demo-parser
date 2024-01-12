import { promises as fs } from "fs";
import path from "path";
import pbjs from "protobufjs-cli/pbjs";
import pbts from "protobufjs-cli/pbts";

async function build(protobufPath: string) {
  const jsSource = await new Promise<string>((resolve, reject) => {
    pbjs.main(
      ["--target", "static-module", protobufPath],
      function (error, output) {
        if (error) {
          reject(error);
          return;
        }
        resolve(output!);
      }
    );
  });
  const fileName = path.basename(protobufPath, ".proto");
  const fileNameJS = `${fileName}.js`;
  const filePathJS = path.resolve(
    protobufPath,
    "../../src/generated",
    fileNameJS
  );
  const fileNameTS = `${fileName}.d.ts`;
  const filePathTS = path.resolve(
    protobufPath,
    "../../src/generated",
    fileNameTS
  );

  await fs.writeFile(filePathJS, jsSource, "utf-8");

  const tsSource = await new Promise<string>((resolve, reject) => {
    pbts.main([filePathJS], function (error, output) {
      if (error) {
        reject(error);
        return;
      }
      resolve(output!);
    });
  });

  await fs.writeFile(filePathTS, tsSource, "utf-8");
}

async function main() {
  const rootPath = path.resolve("./protobuf");
  const files = await fs.readdir(rootPath);
  await Promise.all(
    files.map(async (file) => {
      const protobufPath = path.join(rootPath, file);
      await build(protobufPath);
    })
  );
}

main().catch(console.error);
