const isAnagram = (str1,str2)=>{
  return cleanString(str1)=== cleanString(str2)
}

const cleanString = (str)=>{
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}


const isAnagramWithMap =(str1,str2)=>{
  let word1 = str1.replace(/[^\w]/g).toLowerCase().split('').sort().join()
  let word2 = str2.replace(/[^\w]/g).toLowerCase().split('').sort().join()
  return word1===word2
}
console.log(isAnagramWithMap("hello", "world"))

class isAnagramWithClass{
  constructor(str1,str2){
    this.str1 = str1
    this.str2= str2
  }

  isAnagram(){
    return cleanString(this.str1)===cleanString(this.str2)
  }
  #cleanString(str){
     return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
  }

}

const word1 = new isAnagramWithClass("hello","word")
const word2 = new isAnagramWithClass("listen","silent")
console.log(word2.isAnagram())
