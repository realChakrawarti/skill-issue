import { assertEquals } from "@std/assert";

const red = "\x1b[31m";
const green = "\x1b[32m";
const yellow = "\x1b[33m"; // Added yellow for input
const reset = "\x1b[0m";
const bold = "\x1b[1m";

export default function asserts<T, R>(
  input: T[],
  testFn: (value: T) => R,
  output: R[]
) {
  const startTime = performance.now(); // Start timing the assertion
  if (input.length !== output.length) {
    console.log(`${red}The number of input and output should match.${reset}`);
    return;
  }

  input.forEach((item, idx) => {
    const returnedOutput = testFn(item);

    try {
      assertEquals(returnedOutput, output[idx]);
    } catch (err) {
      const message = `${bold}Input:${reset} ${yellow}${JSON.stringify(
        item
      )}${reset}\n${bold}Expected:${reset} ${green}${JSON.stringify(
        output[idx]
      )}${reset}\n${bold}Returned:${reset} ${red}${JSON.stringify(
        returnedOutput
      )}${reset}`;
      console.error(err);
      console.log(
        "\n----------------------------------------------------------\n"
      );
      console.log(message);
      return;
    }
  });

  const endTime = performance.now(); // End timing the assertion
  const totalTime = endTime - startTime;
  console.log(
    `${bold}Assertion completed:${reset} ${green}${totalTime.toFixed(
      2
    )}ms${reset}`
  ); // Log total time
}
