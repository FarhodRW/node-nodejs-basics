import fs from "fs";

if (!fs.existsSync("./files/fileToRead.txt")) {
  throw new Error("FS operation failed");
}

export const read = async () => {
  // Write your code here
  fs.readFile("./files/fileToRead.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};

read();

// file system done
