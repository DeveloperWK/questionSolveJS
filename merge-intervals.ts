function mergeIntervals(interval:number[]):number[] {
  const sortNum = interval.sort((a,b)=>a[0]-b[0])
  const merged = [sortNum[0]]
  let i = 1
const numsLength = sortNum.length 
  for(i;i<numsLength;i++){
    const lastIdx = merged.length-1 
    const lastEl = merged[lastIdx][1]
if(sortNum[i][0]<=lastEl){
      merged[lastIdx][1]=sortNum[i][1]>=lastEl ? sortNum[i][1]:lastEl
    }else{
      merged.push(sortNum[i])
    }
    
  }
  return merged 
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));



