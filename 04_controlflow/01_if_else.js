//if
// if(3!=2){ //if block gets executed when the condition inside it is true
//    console.log("executed");  //<,>,>=,<=,==,!=, === (trple = checks type also),!==
// }
//---------------------------------------------

//IF ELSE (same concept as java)  
// const temperature=41
// if(temperature===41){
//     console.log("less than 50");
// } else{
//     console.log("temp is greater than 50");
// }


//----------------------------------------------------------
//short hand notation of if
// const balance=1000

// if(balance>500) console.log("test");  //implicit scope(ek hi line mai likhna h) 


//#Nesting conditions
// const balance=1000
// if(balance<500){
//     console.log("less than 500");
// } else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("equals or greater than 1000");
// }

const userLoggedin=true
const debitcard=true
const loggedinFromGoogle=false
const loggedinFromEmail=true

if(userLoggedin && debitcard){   //&&->this will only get executed when both conditions are true
    console.log("allow to buuy courses");
    
} 
if(loggedinFromEmail || loggedinFromGoogle){ //|| ->this will only get executed when one of the conditions are true
    console.log("user loggedin");
    
}