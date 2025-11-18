let a=300 //globally declared variable 
if(true){
    let a=10
    const b=20
    var c=30
    // console.log("INNER: ",a);
    
}

// console.log(a) //not accessible
// console.log(b); //same here
// console.log(c); //accessible prints 30

//NESTED FUNCTION

function one(){
    const username="ansh"
    function two(){
        const website="youtubedotcom"
        console.log(username); //this will get executed since for this function username is within the scope
        
    }
    // console.log(website); //this wouldnt be acccessible cuz website ka scope is within the two function
    
    two()
} 

// one()

//same goes in if else
if(true){
    const username="ansh"
    if(username==="ansh"){
        const website2=" youtube.com"
        console.log(username+website2);
        
    }
    // console.log(website2); cant access
    
}
// console.log(username);   //cant access


//++++++++++++interesting concept++++++++++++++
//addone(6)  allowed hai
function addone(num1){
    return num1 + 1
}

addone(5) 

//addtwo(5)  //this is not allowed
const addtwo=function(num){  //variable holding a function another way to create a function,, but in this way you cannot use the function before initialization it will thrpw error while in normal way u can

    return num+2
}
addtwo(5)