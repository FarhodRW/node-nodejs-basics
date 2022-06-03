import fs from "fs";

export const remove = async () => {
  // Write your code here. Okay codes are below 😎
  if (!fs.existsSync("./files/fileToRemove.txt")) {
    throw new Error("FS operation failed");
  }

  fs.unlink("fileToRemove.txt", function (err) {
    if (err) throw err;
    console.log("File deleted!");
  });
};

remove();

//done
