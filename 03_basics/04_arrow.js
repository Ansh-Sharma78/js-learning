const user={
    username: "ansh",
    price: 999,

    welcomeMessage: function(){
console.log(`${this.username}, welcome to website`); //referes to the correct context of a variable like here its refering username 
// console.log(this);

    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

//function ka andar this use nhi kr paate
// const chai=function(){
//     let username="ansh"
//     console.log(this.username)  //doesnt work it gives undefined
// }

// chai()

//+++++++++++++++ARROW FUNCTION++++++++++++++
const chai=()=>{
    let username="ansh"
    console.log(this);
}
// chai()
//basic arrow function (explicit return)
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,4))

//implicit return arrow function
// const addtwo=(num1,num2)=> (num1 + num2)
const addtwo=(num1,num2)=> num1 + num2 //isme return statement nhi hota cuz ek hi line ka code hota hai na
const obj=(num1,num2)=>({username:"ansh"})
console.log(addtwo(3,4))
