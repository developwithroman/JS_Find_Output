//letter case permutation
let letterCasePermutaion = (S) => {
  let result = [];
  const dfs = (i, S, combination) => {
    if (i === S.length) {
      result.push(combination.join(""));
      return;
    }
    let character = S[i];
    if (!Number.isInteger(parseInt(character))) {
      // add the lowercase letter
      combination.push(character.toLowerCase());
      dfs(i + 1, S, combination);
      combination.pop();

      // add the uppercase letter
      combination.push(character.toUpperCase());
      dfs(i + 1, S, combination);
      combination.pop();
    } else {
      combination.push(character);
      dfs(i + 1, S, combination);
      combination.pop();
    }
  };
  dfs(0, S, []);
  return result;
};
