import path from "path";
import { release, version } from "os";
import createServerHttp from "node:http";
// const { createServerHttp } = createServer;
import "./files/c.js";
import { fileURLToPath } from "url";
import unknownObjectA from "./files/a.json" assert { type: "json" };
import unknownObjectB from "./files/b.json" assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = unknownObjectA;
} else {
  unknownObject = unknownObjectB;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current directory is ${__dirname}`);
console.log(`Path to current file is ${__filename}`);

export const createMyServer = createServerHttp.createServer((_, res) => {
  res.end("Request accepted");
});

//done
