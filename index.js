function stemPlot(input){
  let output=[];
  for(let i=0;i<input.length;i++){
    let temp=input[i].toString();
    output.push(splitStemLeaf(temp,temp.length-1));
    }
output.sort((a,b)=>a[0]-b[0]);
let result=[];
let i=0;
while(i<output.length){
  let temp=output[i][0];
  let tempEntry=temp+'|';
  while(output[i][0]===temp){
    tempEntry=tempEntry+' '+output[i][1];
    i++;
    if(i===output.length){
      break;
    }
   }
  result.push(tempEntry);
  }
return result;
}
function splitStemLeaf(value, index) {
   return [(value.substring(0, index)===''?0:parseInt(value.substring(0,index))),parseInt(value.substring(index))];
}
console.log(stemPlot([111, 11, 1]));
console.log(stemPlot([4, 8, 75]));
console.log(stemPlot([22, 22, 38, 22, 19]));