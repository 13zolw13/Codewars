// Watermelon  https://www.codewars.com/kata/55192f4ecd82ff826900089e
function divide(weight){
  return(weight >2 &&  weight % 2 )=== 0 ?  true : false;    
}

// Grasshopper - Summation https://www.codewars.com/kata/55d24f55d7dd296eb9000030
var summation = function (num) {
let  sum=0;// Code here
  for (let i=1; i<=num; i++){
    sum=sum+i;
  }
  return sum;
}

// Remove String Spaces https://www.codewars.com/kata/57eae20f5500ad98e50002c5
function noSpace(x){
  
  let y= x.split(' ');
  return  y.join('');
  
}

// Abbreviate a Two Word Name https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name){
let n= name[0]
let inn=[];    // code away
inn.push(name[0].toUpperCase());
  for  ( let i=1;  i<name.length; i++){
  if (name[i-1]==' '){
    
    inn.push(name[i].toUpperCase());
  }
}
  return inn.join('.');
}

// Remove duplicates from list https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
function distinct(a) {
  let x=new Set(a);
  return [...x];
}

// Opposites Attract  https://www.codewars.com/kata/555086d53eac039a2a000083
function lovefunc(flower1, flower2){
  // moment of truth 
  if((flower1+flower2)%2===0) {
    return false;
  }
  else
    return true;
}

// Convert a Number to a String!  https://www.codewars.com/kata/5265326f5fda8eb1160004c8
function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

// Multiply https://www.codewars.com/kata/50654ddff44f800200000004
function multiply(a, b){
 return a * b
}
