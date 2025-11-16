//primitive data types

const score= 12 //dynamic typed laanguage

const id=Symbol('123')  //symbol datatype
const anotherid=Symbol('123')

//console.log(id===anotherid); false
//const bigNumber=3434340000000000

//refrence(non-primitive)
const temp=null
const temp2=undefined
//array
const heroes=["ironman","cuteiman","spiderman"]; 

//object
let myObj = {
    name:"ansh",
    age: 22,
}

//function
const myFunction = function(){
// console.log("helo world");

}

// console.log(typeof heroes);


//++++++++++++++++++++++++++++++++++Memory in js++++++++

let ch1="ansh vlogs"
let ch2=ch1
ch2="ansh gaming"

console.log(ch1);
console.log(ch2);

let userOne = {
    email: "ansh@google.com"

}

let userTwo=userOne

userTwo.email="ansh@netflix.com"

console.log(userOne.email);
console.log(userTwo.email);

