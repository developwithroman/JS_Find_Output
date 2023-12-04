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

// permutation of numbers
let permute = (nums) => {
  //global state
  let result = [];
  const dfs = (i, nums) => {
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    // recursive dfs
    for (j = i; j < nums.length; j++) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  return result;
};

// permutations with no duplicates

const permuteUnique = (nums) => {
  // global state
  let results = [];

  let dfs = (i, nums) => {
    //base case
    if (i === nums.length) {
      results.push(nums.slice());
      return;
    }

    // recursive dfs

    let hash = {};

    for (j = i; j < nums.length; j++) {
      if (nums[j] in hash) {
        constinue;
      }
      hash[nums[j]] = true;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      dfs(i + 1, nums);
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  dfs(0, nums);
  return result;
};
