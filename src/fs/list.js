import fs from "fs";

export const list = async () => {
  if (!fs.existsSync("./files")) {
    throw new Error("FS operation failed");
  }

  fs.readdir("./files", (err, files) => {
    const filesL = [];
    files.forEach((file) => {
      filesL.push(file);
    });
    console.log(filesL);
  });
};
list();
