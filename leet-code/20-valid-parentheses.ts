// Link: https://leetcode.com/problems/valid-parentheses/

import asserts from "./utils/asserts.ts";

function isValid(s: string): boolean {
  const table = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  type TableKeys = keyof typeof table;

  if (s.length < 2) return false;

  const firstSymbol = s[0];
  if (firstSymbol === "]" || firstSymbol === ")" || firstSymbol === "}")
    return false;

  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const symbol = s[i];
    if (symbol === "(" || symbol === "[" || symbol === "{") {
      stack.push(table[symbol as TableKeys]);
      continue;
    }

    if (symbol === ")" || symbol === "]" || symbol === "}") {
      if (!stack.length) {
        return false;
      }
      if (stack.at(-1) === symbol) {
        stack.pop();
        continue;
      } else return false;
    }

    i++;
  }

  if (stack.length) {
    return false;
  } else {
    return true;
  }
}

// Tests

const input = ["]", "()", "()[]{}", "(]", "([])", "([)]", "){", "(){}}{", "(}{)"];
const output = [false, true, true, false, true, false, false, false, false];

asserts(input, isValid, output);
