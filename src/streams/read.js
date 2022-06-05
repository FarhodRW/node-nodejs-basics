import fs from "fs";

export const read = async () => {
  // Write your code here
  const data = fs.createReadStream("./files/fileToRead.txt", "utf-8");
  data.on("error", function (error) {
    console.log(`error: ${error.message}`);
  });

  data.on("data", (chunk) => {
    process.stdout.write(chunk + "\n");
  });
};

read();
