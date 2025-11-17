//destructuring

const course ={
    name: "Ansh Sharma",
    email:"ansh@gmail.com"
}

// console.log(course.name);

const {name: myname}=course //another way of destructuring
//console.log(name);
console.log(myname);

//##############################APIS#####################################
//API can be received through an object and also sometimes as an array too
// {
//     "name":"Ansh",
//     "coursename":"js hindi"
// }

// [
//     {},
//     {},
//     {}
// ]