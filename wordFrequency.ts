function wordFrequency(str:string):Record<string,number> {
  let cleaned = str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g,"").trim()
  const words  = cleaned.split(/\s+/)
  const freq:Record<string,number>={}
for(const word of words){
    freq[word] = (freq[word]|| 0)+1;
  }
  
  return freq
}

let word = wordFrequency("Hello, hello! How are you?");
console.log(word);

