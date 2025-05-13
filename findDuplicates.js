const findDuplicates = (arr)=>{
const unique = new Set()
 let result = []
 arr.forEach((e)=>{

    if(unique.has(e)){
      result.push(e)
    }else{
      unique.add(e)
    }
  })
  return result
}
console.log(findDuplicates([1, 2, 3,1,3,5,7,5,10]) );
