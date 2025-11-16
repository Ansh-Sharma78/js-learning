//arrays

const myarr=[0,1,2,3,4,5]
const myhero=["shaktiman","gangadhar"]

const myarr2=new Array(1,2,3,4)
// console.log(myarr[0]);
//Array methods
// myarr.push(6) //inserts element in array
// myarr.pop() ///removes the last element inside array 

myarr.unshift(9)
myarr.unshift(7) //puts element to the start of the array takes a lot of time if array is largeee 
myarr.shift() //removes element from the start
myarr.shift()
// console.log(myarr);      

// console.log(myarr.includes(7)); //tells in boolean if the element exists in array or not
// console.log(myarr.indexOf(7)); //returns the index of the element
// console.log(typeof myarr); //object

// const newarr=myarr.join()
// console.log(typeof newarr); //converts array into string spearated by commas

//SLICE, SPLICE

console.log("A ",myarr);

const myn1=myarr.slice(1,3)  //retrives element from 1 to n-1 
console.log(myn1);
console.log("B ",myarr);

const myn2=myarr.splice(1,3) //retrives element from a particular index to n while taking it from the original array like cutting it down
console.log("C ", myarr);

console.log(myn2);


