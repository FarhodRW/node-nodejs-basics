import fs from "fs";
import crypto from "crypto";
export const calculateHash = async () => {
  // Write your code here ---\
  const fileBuffer = fs.readFileSync("./files/fileToCalculateHashFor.txt");
  const hashSum = crypto.createHash("sha256");
  hashSum.update(fileBuffer);

  const hex = hashSum.digest("hex");
  console.log(hex);
  return hex;
};

calculateHash();
//done
