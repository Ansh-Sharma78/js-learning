const { mydate } = require("./08_dateandtime");

//*********              number                  *******/
const score=400
// console.log(score); 

const balance=new Number(200)  //explicitly defined Number
// console.log(balance);
// console.log(typeof balance); //object hai

// console.log(balance.toString()); //conversion to string isko string mai convert karke uske methods use kar sakte hai
// console.log(typeof balance.toString());
// console.log(balance.toFixed(2)); //fixes precisoon value


const num=84.666686
// console.log(num.toFixed(2));
// console.log(num.toPrecision(4)); //precisely 3 hi numbers ko consider karta hai last wale ko round off kar dega


const hundred=100000000
// console.log(hundred.toLocaleString('en-IN'));


//++++++++++++++++Maths++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4)); //absolute value leta hai minut to plus hota hai
// console.log(Math.round(4.6)); //does roundoff
// console.log(Math.ceil(4.2)); //decimal se ek bhi value zyada hui toh upper value lega 
// console.log(Math.floor(4.9)); //takes ground value
// console.log(Math.pow(2,3));

console.log(Math.random()); //generates a random value between 0 and 1
console.log((Math.random()*10)+1); //sometimes we want a random value betwen integers like in a game of dice here
//we multiplied wih 10 to place a value leftside making it greater than zero and added 1 to avoid gettimg zero in case of decimal value is zero

const min=10
const max=20
//imp
console.log(Math.floor(Math.random() * (max-min+1))+ min);
console.log(mydate.toTimeString());
//+min humne isliya kiya to get atleast that required minimum value when the left side of the code generates zero
//(max-min+1) is multiplid to shift decimal to left side .2

