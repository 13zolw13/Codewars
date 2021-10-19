// Bit Counting https://www.codewars.com/kata/526571aae218b8ee490006f4
var countBits = function(n) {
  let bits=[...n.toString(2)];
 let answer= [...bits].reduce( (a,b)=> parseInt(a)+parseInt(b));
  return  parseInt(answer);
};


// Valid Phone Number https://www.codewars.com/kata/525f47c79f2f25a4db000025
function validPhoneNumber(phoneNumber){
 let splitphoneNumber= phoneNumber.split(' ');
//  console.log(splitphoneNumber)
   
  if (splitphoneNumber.length===2){
    console.log(splitphoneNumber[1].indexOf('-'))
    if (splitphoneNumber[1].indexOf('-')==3 && splitphoneNumber[1].length===8 && splitphoneNumber[0].length===5){
      return true;
    } else {return false}
    
  }else return false
  //TODO: Return whether phoneNumber is in the proper form
}


// Highest Scoring Word https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
function high(x){
  let arrayOfworld= Array.from(x.split(' '));
  let arrayOfsum=[];
  let highValue=0;
  let answer;
  
for (let i=0; i<arrayOfworld.length; i++ ){
  let sum=0;  
  for (let w of arrayOfworld[i]){
//        console.log(w)
//       console.log(w.codePointAt(0))
      sum=sum+Number(w.codePointAt(0)-96);
    
    }
//   console.log(sum);
    if (highValue<sum){
      answer=arrayOfworld[i];
      highValue=sum;
    }
  
  }

return answer;
}
