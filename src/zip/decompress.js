import fs from "fs";
import zlib from "zlib";

export const decompress = async () => {
  // Write your code here

  var r = fs.createReadStream("./files/archive.gz");
  var w = fs.createWriteStream("./files/fileToCompress.txt");
  zlib.gzip(r.toString(), (err, buffer) => {
    zlib.unzip(buffer, (err, buffer) => {
      let writerStream = fs.createWriteStream("./files/fileToCompress.txt");

      writerStream.write(buffer.toString("base64"), "UTF8");

      writerStream.end();
    });
  });
};

decompress();
