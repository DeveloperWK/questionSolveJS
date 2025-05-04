/*
Approach 1: Using the Mathematical Approach (Summation of first N natural Numbers)
*/
const findMissingNumber=(arr)=>{
  const n = arr.length + 1;
  const sumOfFirstN = (n * (n + 1)) / 2;
  let sumOfArr = 0;
  let i = 0;
  let j = arr.length
  for (i; i < j;i++){
    sumOfArr += arr[i];
  }
  let missingNumber = sumOfFirstN - sumOfArr;
  return missingNumber
}
const arr = [3, 7, 1, 2, 8, 4, 5];
const missingNumber = findMissingNumber(arr);
console.log("Missing Number: ", missingNumber);
// const array = [1,2,5,4]

/*
Using Hashing
*/
const findMissingNumberUsingHashing=(arr)=>{
  let i = 0;
  const N = arr.length
  console.log(N)
  const temp = new Array(N+1).fill(0)
  for (i; i < N;i++){
    temp[arr[i]-1]=1

  }
  let ans = 0;
  let k = 0
  for (k; k <= N;k++){
    if(temp[k]===0){
      ans=k+1
    }
  }

  return ans

}
console.log(findMissingNumberUsingHashing([3, 7, 1]))
