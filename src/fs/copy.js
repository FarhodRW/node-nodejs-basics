import fs from "fs";
import fse from "fs-extra";
export const copy = async () => {
  // My code is here 😎

  if (!fs.existsSync("./files") || fs.existsSync("./files_copy")) {
    throw new Error("FS operation failed");
  }

  fse.copy("./files/", "./files_copy", (err) => {
    if (err) return console.error(err);
    console.log("success!");
  });
};

copy();

//done
