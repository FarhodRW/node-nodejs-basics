import fs from "fs";

export const create = async () => {
  // I'm writing my code here
  if (fs.existsSync("./files/fresh.txt")) {
    throw new Error("FS operation failed");
  }

  fs.writeFile("./files/fresh.txt", "I am fresh and young", function (err) {
    console.log("The file is saved!");
  });
};

create();

//done
