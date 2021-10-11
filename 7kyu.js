// Growth of a Population https://www.codewars.com/kata/563b662a59afc2b5120000c6
function counting(p0, percent, aug, p,i){
  let x=i;
   let pop=p0+(p0*percent*0.01)+aug;
  console.log(pop)
  if (pop<p){ i++;
        
  return  counting(pop,percent, aug, p,i)
  }
  if(pop>=p){
      
return i;
  }   
}

function nbYear(p0, percent, aug, p) {
  return  counting(p0, percent, aug, p,1);;
}


//Number of People in the Bus  https://www.codewars.com/kata/5648b12ce68d9daa6b000099
var number = function(busStops){
let sumEnter=0;
let sumLeave=0;
  
  for (let p of busStops){
    sumEnter=p[0]+sumEnter;
    sumLeave=p[1]+sumLeave;
  }
  
  return sumEnter-sumLeave;
}


// Even or Odd - Which is Greater? https://www.codewars.com/kata/57f7b8271e3d9283300000b4
function evenOrOdd(str) {
let sortedArray=[...str].sort((a,b)=>{return a-b});

  let sumOdd=0;
let sumEven=0;
console.log(sortedArray)
  for (let x of sortedArray){
    if (x%2===0){
      sumOdd=sumOdd+Number(x);
//   console.log(sumOdd);
    }else{
      sumEven=sumEven+Number(x);
// console.log(sumEven);
    }
  }
  
  if (sumOdd>sumEven){return'Even is greater than Odd'};
  if (sumOdd<sumEven){return 'Odd is greater than Even'};  
  if (sumOdd===sumEven){return 'Even and Odd are the same'}; 
  }


// Get the Middle Character https://www.codewars.com/kata/56747fd5cb988479af000028
function getMiddle(s)
{ if (s.length%2===0){
  return(s[(s.length/2)-1]+s[(s.length/2)])
}else{ 
  return s[Math.floor(s.length/2)]
 }}


// Sum of two lowest positive integers https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {  
  //Code here
 function compareFunction(a,b){
   return a-b;
 }
let sortedArray= numbers.sort(compareFunction);
  return sortedArray[0] +sortedArray[1] ; 
}
 

// Mumbling https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
  // your code
let  worldLength=s.length;
let arrayMumble=[];
  console.log(worldLength);

  for (i=0 ; i<worldLength; i++){
   arrayMumble[i] =s[i].toUpperCase()+ s[i].repeat(i).toLowerCase();
    }
  return arrayMumble.join('-') ;
}


// Categorize New Member https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa
function openOrSenior(data){
  // ...
  let category=[];
  for (let person of data){
  if (person[0]>54 && person[1]>7 ){
    category.push('Senior');
  }else {
    category.push('Open');}
    }
  return category;
}



// Highest and Lowest https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
 let arrayOfNumbers= numbers.split(' ');
 arrayOfNumbers=arrayOfNumbers.map( Number);

  console.log(arrayOfNumbers); 
  
let maxvalue=  Math.max(...arrayOfNumbers);
let minvalue= Math.min(...arrayOfNumbers);
let answer= maxvalue+' '+ minvalue;
  return answer;
}


// Square Every Digit https://www.codewars.com/kata/546e2562b03326a88e000020
function squareDigits(num){
  let temp=num.toString();
  let temp2=Array.from(temp);
  let temp3=[];
  let x='';
  console.log(temp2)
  for (let e of temp2){
    e=Number(e);
    e=e*e;
    x=x+e.toString();
    console.log(x);
  }
  console.log(x);  
  return Number(x); 
}

//  Sum of odd numbers https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
function rowSumOddNumbers(n) {
  let oddNumbers= 0;
  let rowSum= 0;
  let t=1
for (t=1; t<=n; t++){
oddNumbers= t+ oddNumbers; // odd numbres in triangle to n row
};

let adding=0;
let lastrow=0;
let i=2;
let sum=1;
  
  if (n===1) {
 return n;
  }
  while (i<=oddNumbers ){
      sum=sum+2;
   if (i>(oddNumbers-n)){
   console.log(sum);
     rowSum=rowSum+sum;
     } 
   i++;
 }
  console.log(rowSum);
  return rowSum; 
}


// Beginner Series #3 Sum of Numbers https://www.codewars.com/kata/55f2b110f61eb01779000053
function getSum( a,b )
{
      if(a===b){
        return b;
      } else{
        if (a>b){
          let i=b;
          while (a>i){
            i++;
            b=b+i;
            console.log(b);}
          return b}
            else{
              if (a<b){
                let i=a;
              while (i<b){
                i++;
                a=a+i;
                console.log(a);}
            return a; 
              }}}}


// Descending Order https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n){
  //...
const nString=n.toString();  
 let  nArray=[...nString]
console.log(nArray);

  if (nArray.length>1){
   nArray=  nArray.sort();
    console.log(nArray);
   nArray=nArray.reverse();
    console.log(nArray);
     nArray=nArray.join('')
    console.log(nArray);
    return Number(nArray);
  }
  else return n;
}
  
//  Credit Card Mask https://www.codewars.com/kata/5412509bd436bd33920011bc
function maskify(cc) {
const temp= [...cc];
  if (temp.length>4){
    for(let i=0; i<temp.length-4; i++)
      temp[i]='#';   }
  cc=temp.join('')
return cc;  
}

// Friend or Foe? https://www.codewars.com/kata/55b42574ff091733d900002f
function friend(friends){
  const surefriends=[];
  for(let f of friends){
    if (f.length===4){
      surefriends.push(f); }}
  return surefriends;
}


// Disemvowel Trolls https://www.codewars.com/kata/52fba66badcd10859f00097e
function disemvowel(str) {

 let  temp=str.split('i' );
  str=temp.join('');
  temp=str.split('I' );
  str=temp.join('');
   temp=str.split('a' );
  str=temp.join('');
   temp=str.split('A' );
  str=temp.join('');
   temp=str.split('o');
  str=temp.join('');
   temp=str.split( 'O');
  str=temp.join('');
  temp=str.split( 'e');
  str=temp.join('');
  temp=str.split( 'E');
  str=temp.join('');
  temp=str.split( 'u');
  str=temp.join('');
  temp=str.split( 'U');
  str=temp.join('');
  console.log(str)
  return str;
}
