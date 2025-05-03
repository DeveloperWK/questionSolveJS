const hasPairWithSum = (arr, sum) => {
const seen = new Set()
    for (let num of arr) {
        const diff = sum - num
        if (seen.has(diff)) {
            return true
        }
        seen.add(num)
    }
}
// const result=hasPairWithSum([1,2,3,4,5,6], 10);
// console.log(result)
console.log(hasPairWithSum([1,2,3,4,5,6], 10))
console.log(hasPairWithSum([1, 4, 7, 12, 15], 19))