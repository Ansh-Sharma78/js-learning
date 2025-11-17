//#Creating object using constructors making it singleton

// const tinderuser=new Object()  //singleton object
//there is no as such diff between declaring object as literal or using constructor
//the only differnce is singleton only  baki everythinh is same

const tinderuser={}
tinderuser.id="123"
tinderuser.name="ansh"
// console.log(tinderuser);


const regularuser={
    email:"some@gmail.com",
    fullname: {    //object within an object
        username:{
            firstname:"ansh",
            lastname:"sharma"
        }
    }
}
//accessing objectss within an object
// console.log(regularuser.fullname.username.firstname);


//COMBINING OBJECTS
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d",5:"e"}
// const obj3={obj1,obj2}   //by doing this we are not concatinating two objects rather we are taking 2 objects as a particular element of object 3
// console.log( obj3);  

// 
// const obj3=Object.assign({},obj1,obj2)  //syntax for concatinating two objects in js,, here {} is the target object means we are concatinating the objects in it if we dont do so the objects are concatinated within object1
const obj3={...obj1,...obj2}  //most used method for concatinating objects is using spreader
// console.log(obj3);

//OBJECTS WITHIN  AN ARRAY
const user=[
    {
        id:1,
        email:"ansh@google.com"
    },
    {
        id:1,
        email:"ansh@google.com"
    },
    {
        id:1,
        email:"ansh@google.com"
    }
]

// console.log(user[1].email)

console.log(tinderuser);
console.log(Object.keys(tinderuser));  //to access keys of an aprticular object in form of arrray using this we can perform array operations on it GONNA BE USEFUL IN FUTURE
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

 console.log(tinderuser.hasOwnProperty('isLogged')); //to check existence of property of object
