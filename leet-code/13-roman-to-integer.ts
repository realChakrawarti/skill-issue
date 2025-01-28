// Link: https://leetcode.com/problems/roman-to-integer/

const romanInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
} as const;

const constraints = {
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
} as const;

const constraintsCharacters = Object.keys(constraints);

type RomanCharacter = keyof typeof romanInt;
type ConstrainRomanCharacter = keyof typeof constraints;

function romanToInt(s: string): number {
  let sum = 0;
  const splitRoman = s.split("") as RomanCharacter[];
  for (let i = 0; i < splitRoman.length; i++) {
    const lastIdx = splitRoman.length - 1;
    const currentIdx = i;

    if (lastIdx === currentIdx) {
      sum = sum + romanInt[splitRoman[currentIdx]];
      continue;
    }

    const combined = splitRoman[currentIdx] + splitRoman[currentIdx + 1];
    const constrainKey = constraintsCharacters.find(
      (item) => item === combined
    ) as ConstrainRomanCharacter;

    if (constrainKey) {
      sum = sum + constraints[constrainKey];
      i++;
      continue;
    }

    sum = sum + romanInt[splitRoman[currentIdx]];
  }
  return sum;
}

// Tests

const input = ["III", "LVIII", "MCMXCIV"];

input.forEach((item) => {
  console.log(romanToInt(item));
});
