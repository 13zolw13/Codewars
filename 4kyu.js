// Adding Big Numbers https://www.codewars.com/kata/525f4206b73515bffb000b21
function add(a, b){
   if(a.length!==b.length){
    if(a.length>b.length){
      b='0'.repeat(a.length-b.length)+b;
    console.log(a)}
     if(a.length<b.length){
      a='0'.repeat(b.length-a.length)+a;
    console.log(b)}
    
}
     let arrayOfA=[...a];
  let arrayOfB=[...b];
  let arrayOfC=[];
     arrayOfA.reverse();
  arrayOfB.reverse()
  console.log(arrayOfA);
    console.log(arrayOfB);
  
  for (i=0; i<arrayOfB.length; i++)
    {
     let temp= Number(arrayOfA[i]) + Number(arrayOfB[i]);
      console.log(temp)
      if (temp>=10 && i<arrayOfB.length-1 ){
        arrayOfA[i+1]=Number(arrayOfA[i+1])+Math.floor(temp/10);
        arrayOfC[i]=(temp-10).toString();
        
      }else  
        {arrayOfC[i]=temp.toString();}
    }
 
//   console.log(arrayOfC.reverse().join(''))
  return (arrayOfC.reverse()).join('')
}
