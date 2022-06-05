import { pipeline, Transform } from "stream";
const input = process.stdin;
const output = process.stdout;

export const transform = async () => {
  // Write your code here
  const transform = new Transform({
    transform(chunk, enc, cb) {
      const stringed = chunk.toString().trim();
      const res = stringed.split("").reverse().join("");
      this.push(res + "\n");
      cb();
    },
  });

  pipeline(input, transform, output, function (err) {
    console.log(err);
  });
};

transform();

//done
