const chunkArray =(arr,size)=>{
  let res = []
  for (let i = 0; i < arr.length;i+=size ){
    res.push(arr.slice(i,size+i))
  }
  return res
}
console.log(chunkArray([1, 2, 3, 4, 5], 2))

function chunkArray2 (arr,size){
  return arr.reduce((acc,_,i)=>{
    if(i% size===0){
      acc.push(arr.slice(i,i+size))
    }
     return acc
  },[])

}
console.log(chunkArray2([1, 2, 3, 4, 5], 3))


let [list, chunkSize] = [[1, 2, 3, 4, 5], 2];
list = [...Array(Math.ceil(list.length/chunkSize))].map((_)=>list.splice(0,chunkSize))
console.log(Math.floor(1.22))
