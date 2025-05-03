const firstNonRepeatingChar =(str)=>{
  const obj = {}
  for(let elem of str){
 if(obj[elem]){
   obj[elem]=obj[elem]+1

 }else{
   obj[elem]=1
 }
  }
  /* for(let elem in obj){
    if(obj[elem]===1){
      return elem
    }
  } */
  for(let char of str){
    if(obj[char]===1){
      return char
    }
  }

  return null

}
console.log(firstNonRepeatingChar("abacabad")) // "c"
console.log(firstNonRepeatingChar("aabbccdde")) // "e"
console.log(firstNonRepeatingChar("aabbcc"))// null
