const countVowels = (str)=>{
  const arr = str.split("")
 const vowel = new Set(["a","e","i","o","u","A","E","I","O","U"])
let count = 0
arr.forEach((e)=>{
  if(vowel.has(e)){
    count++
  }

})
  return count


}
console.log(countVowels("Hello World"))
console.log(countVowels("AEIOUaeiou"))
