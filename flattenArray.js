const flattenArray = (arr)=>{
  // const result = arr.flat(Infinity)
  // const result = arr.reduce((a,b)=>{
  //   return a.concat(b)
  // })
  let result = []
  let i = 0
  for (i; i < arr.length;i++){
    if(Array.isArray(arr[i])){
      result=result.concat(flattenArray(arr[i]))
    }else{
      result.push(arr[i])
    }
  }
 return result
}
/*
* Alternative Array Prototype
*/

Array.prototype.flatten = function(){
  let result = []
  let i = 0;
  for (i; i < this.length;i++){
    if(Array.isArray(this[i])){
      result= result.concat(this[i].flatten())
    }else{
      result.push(this[i])
    }
  }
return result
}
// console.log(flattenArray([[1], [[2, 3]], [4]]))

/*
ES6 Syntex
*/

const flattenArrayEs6=(arr)=>arr.reduce((a,b)=>a.concat(Array.isArray(b)?flattenArrayEs6(b):b),[])
// console.log([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]].flatten() )
console.log(flattenArrayEs6([[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]]))
