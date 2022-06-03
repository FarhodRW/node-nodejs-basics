import fs from "fs";

export const rename = async () => {
  // Write your code here  Okay codes are below 😎
  if (
    fs.existsSync("./files/wrongFilename.txt") ||
    fs.existsSync("./files/properFilename.md")
  ) {
    throw new Error("FS operation failed");
  }

  fs.rename("wrongFilename.txt", "properFilename.md", function (err) {
    if (err) throw err;
    console.log("success");
  });
};

rename();

//done
