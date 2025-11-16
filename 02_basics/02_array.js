const marvel=["ironman","thor","spiderman"]
const dc=["superman","flash","batman"]


// marvel.push(dc)
// console.log(marvel); //now what it does is it pushes the dc array into the marvel array as a whole particular element which can be concluded as array can take any type of element
// console.log(marvel[3][1]);

// const newarr=marvel.concat(dc) //this is how we merge an array always take this into a new array
// console.log(newarr);

//more optimal way to merge two array
//spreading

const newheroes=[...marvel, ...dc] //this method is more usable by developers
// 

//converting complex arr into simple
const complex_arr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr=complex_arr.flat(3)
// console.log(real_arr);

console.log(Array.isArray("ansh")); //false
console.log(Array.from("ANSH"));  //convertin to arrray
// console.log(Array.from({name:"ansh"})); //interesting


//converting multiple variables into array

let score1=300
let score2=400
let score3=500


console.log(Array.of(score1,score2,score3)); //cant use from
