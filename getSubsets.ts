const getSubsets = (arr: number[]): number[][] => {
  let subSets: number[][] = [];
  const dfs = (i: number, arr: number[], slate: number[]) => {
    if (i === arr.length) {
      subSets.push(slate.slice());
      return;
    }
    dfs(i + 1, arr, slate); //

    slate.push(arr[i]); //1

    dfs(i + 1, arr, slate);

    slate.pop();//0
  };
  dfs(0, arr, []);

  return subSets;
};

const result = getSubsets([1, 2]);

console.log(result);

