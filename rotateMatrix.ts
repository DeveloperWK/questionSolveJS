const rotateMatrix = (matrix:number[][]):number[][]=>{
  const start = performance.now(); 
  const rowLength = matrix.length 
  const colLength = matrix[0].length 
let i = 0
  
  for (i;i<rowLength;i++) {
    for (let j=i; j<colLength ; j++) {
      [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
        
    }
   matrix[i].reverse() 
  }

/*  
let k = 0
  for ( k; k < rowLength; k++) {
    matrix[k].reverse()
    
  }
*/
  const end = performance.now();
  console.log(`Execution time: ${(end - start)*1000} ms`);
  return matrix
  
}

let rotate = rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]); 
 console.log(rotate);

