// Link: https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = "";

  if (strs.length === 1) {
    return strs[0];
  }

  for (let i = 0; i < strs.length - 1; i++) {
    const firstWord = strs[i];
    const secondWord = strs[i + 1];

    const smallerWordLength =
      firstWord.length > secondWord.length
        ? secondWord.length
        : firstWord.length;

    let commonCharacter = "";
    for (let j = 0; j < smallerWordLength; j++) {
      if (firstWord[j] === secondWord[j]) {
        commonCharacter += firstWord[j];
      } else {
        break;
      }
    }

    const firstPass = commonCharacter && !commonPrefix;
    const findsMoreCharacters =
      commonPrefix && commonCharacter.length >= commonPrefix.length;
    const findsLessCharacters =
      commonPrefix && commonCharacter.length < commonPrefix.length;

    if (!commonCharacter) {
      return "";
    } else if (firstPass) {
      commonPrefix = commonCharacter;
    } else if (findsMoreCharacters) {
      continue;
    } else if (findsLessCharacters) {
      commonPrefix = commonCharacter;
    }
  }
  return commonPrefix;
}

// Tests

const input = [
  ["flower", "flow", "flight"],
  ["dog", "racecar", "car"],
  ["a"],
  ["acc", "aaa", "aaba"],
];

input.forEach((item) => {
  console.log(longestCommonPrefix(item));
});
