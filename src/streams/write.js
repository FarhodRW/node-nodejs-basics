import fs from "fs";

export const write = async () => {
  const data = process.argv[2];
  // const data = "hahahaha";
  console.log(data);
  let writerStream = fs.createWriteStream("./files/fileToWrite.txt");

  writerStream.write(data, "UTF8");

  writerStream.end();

  writerStream.on("finish", function () {
    console.log("Write completed.");
  });

  writerStream.on("error", function (err) {
    console.log(err.stack);
  });

  console.log("Program Ended");
};

write();
