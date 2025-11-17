//DECLARING A FUNCTION
function saymyName(){
    console.log('A');
    console.log('n')
    console.log('s')
    console.log('h')
}

// saymyName()

// function addition(number1,number2){
//      console.log(number1+number2);  //this method can basically add anythimg numbers,number with string number with null
// }
function addition(number1,number2){
    let result=number1+number2
    return result   //now it will return an Number
    //or
    //return number1+number2
}
const resultt=addition(3,5)

// console.log("Result is: ",resultt);

function loginusermessage(username){
    if(username===undefined){  //can also write (!username)
        console.log("no one has logged in till now are pal pal na mane tinkuu jiya")
        return
    }
    return `${username} just logged in`
}

function loginusermessage2(username="sam"){
    if(username===undefined){  //can also write (!username)
        console.log("no one has logged in till now are pal pal na mane tinkuu jiya")
        return
    }
    return `${username} just logged in`  //now here function parameter mai ek default value de di hai jo agar argument pass na ho toh use ki jaa sake
}

console.log(loginusermessage2()) //agar kuch pass nahi karte hai argument mai toh undefined ata hai