const userEmail=""

if(userEmail){
    console.log("got user email");
    
} else{
    console.log("dont have user email");
}

//falsy value (kin kin value ko false assume kia jata h by compiler)
// false, 0 , -0,BigInt, "", null, undefined, NaN, 

//truthy values (jin values ko compiler asssume krta hai ki ye true hai)
//true, 1, "filledstring", emptyarray [] , "0", 'false' , ' ',{}, function(){} these are truthy values

const emptyObj={}
if(Object.keys(emptyObj).length===0){ //we know Object.keys() converts object into an array and whenn it is converted to an arr we can calculate the lenggth
    // console.log("Object is empty");
}

//------------------------------------------------------------------
// #Nullish Coalescing Operator (??): null undefined

let val1;
// val1=5 ?? 10  //basically what this operator does is if the first value is nota available (sometimes backend se value nahi aaapati) toh we use this operator jo ki dusri value de dega
val1= null??10??20
// console.log(val1);
  


//----------------------------------------------------
//#Terniary Operator it is a small syntax for if else
// condition ? true : false
const iceTeaprice=100
iceTeaprice >=80 ? console.log("less than 80") : console.log("more than 80");

