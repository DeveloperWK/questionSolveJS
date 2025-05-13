const longestWord = (sentence)=>{
  const words = sentence.match(/\b\w+\b/g)
  let longest = 0
  let word = null
  words.forEach((e)=>{
    if(longest<e.length){
      longest=e.length
      word= e
    }
  })
  return word
}
const str = longestWord("The quick brown fox jumps over the lazy dog")
console.log(str)
