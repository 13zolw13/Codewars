
// Valid Parentheses https://www.codewars.com/kata/52774a314c2333f0a7000688
function validParentheses(parens){
 let arrayOfParens=[...parens];
  for (let i=0; i<arrayOfParens.length; i++){
    if (arrayOfParens[i]==='(' && arrayOfParens[i+1]===')' )   {
          arrayOfParens[i]=0;
          arrayOfParens[i+1]=0;
     arrayOfParens=   arrayOfParens.filter((e)=> e!==0);
      console.log(arrayOfParens)
      i=0; 
   } 
    if  (arrayOfParens.length===2 &&  arrayOfParens[i]==='(' && arrayOfParens[i+1]===')' ) arrayOfParens=[];
}
  
  console.log(arrayOfParens.length)
  if ( arrayOfParens.length===0 ) {return true} else return false;
}


// Where my anagrams at? https://www.codewars.com/kata/523a86aa4230ebb5420001e1
  function anagrams(word, words) {
  let a=[...word].sort();
  let annswerArray=[];
  console.log(a);
for( let y of words){
  let temp=[...y].sort();
  console.log(y);
  if (temp.length===a.length ){
      console.log('theye are even');
if(temp.join()===a.join()){
  annswerArray.push(y)
}}}
  console.log(annswerArray)
return annswerArray;
}


// Greed is Good https://www.codewars.com/kata/5270d0d18625160ada0000e4
function score( dice ) {
  // Fill me in!
 let A=[0,0,0,0,0,0];
 let B=[1000,200,300,400, 500,600]
 let C=[0,0,0,0,0,0];
  for (let val of dice){
    switch(val) {
  case 1:
    A[0]=A[0]+1;
    break;
  case 2:
    A[1]=A[1]+1;
    break;
        case 3:
    A[2]=A[2]+1;
    break;
  case 4:
    A[3]=A[3]+1;
    break;
        case 5:
    A[4]=A[4]+1;
    break;
  case 6:
    A[5]=A[5]+1;
    break;
    
  }}
  console.log(A);
  if (A[0]<3){ C[0]=C[0]+ A[0]*100}
   if (A[0]>3){ C[0]=C[0]+ (A[0]-3)*100}
  if (A[4]<3){ C[4]= C[4]+A[4]*50}
   if (A[4]>3){ C[4]= C[4]+(A[4]-3)*50}
  
  for (let i=0; i<6; i++){
    if (A[i]>=3){C[i]=C[i]+B[i] }
    
    
  }
  return C.reduce((a,b)=>{return(a+b)})
}


// Human Readable Time https://www.codewars.com/kata/52685f7382004e774f0001f7
function humanReadable(seconds) {
//   // TODO
//   s 60
//   m 60
//   d 24
  
  if (seconds>59){ 
    
    if (seconds<3600){
  let m =Math.floor(seconds/60);
      let leftSec=seconds-m*60;      
      if (m<10){ m='0'+m;}
      if (leftSec<10){ leftSec='0'+leftSec;}
//       console.log(m)
      return '00:'+m+':'+ leftSec;
    }
  if (seconds>=3600){
    let h= Math.floor(seconds/3600);
    console.log(h)
    let leftMin =Math.floor(seconds/60-h*60);
      let leftSec=seconds-leftMin*60-h*3600;   
    console.log(leftSec)
      if (leftMin<10){ leftMin='0'+leftMin;}
      if (leftSec<10){ leftSec='0'+leftSec;}
          if (h<10){ h='0'+h;}

      console.log(leftMin)
      return h+':'+leftMin+':'+ leftSec;
    }
  }
  
else{     
        if (seconds<10){
          seconds='0'+seconds;   }
        return ("00:00:"+ seconds)
    }}
