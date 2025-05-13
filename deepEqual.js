


const person1 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35
}

const person2 = {
    "firstName": "John",
    "lastName": "Doe",
    "age": 35
}
console.log(JSON.stringify(person1)=== JSON.stringify(person2))
 const isDeepEqual = (obj1,obj2)=>{
const objkeys1 = Object.keys(obj1)
const objKeys2 = Object.keys(obj2)
if(objkeys1.length!==objKeys2.length)return false
for (let key of objkeys1){
  const value1 = obj1[key]
  const value2 = obj2[key]
  const isObject = isObj(value1) && isObj(value2)
  if((isObject&& !isDeepEqual(value1,value2))|| (!isObject && value1 !== value2))return false
}
return true
 }

 const isObj = (obj)=>{
   return obj !== null && typeof obj==='object'
 }
console.log(isDeepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
