// singleton
//can create object using 
//Object.create => way of creating obeject using constructor

const mysym=Symbol("key1")


// *************object literals*********
const jsuser={
  name:"ansh",
  age: 18,
  [mysym]: "mykey1",
  email:"ansh@gmail.com",
  isLoggedin: false,
  lastLoggedin: ["monday","tuesday"],
  "fullname": "Ansh Sharma"  //you can't access this using dot which is why there are two methods to access objects
}

//#Accessing values of objects
// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["fullname"]);
// console.log(jsuser[mysym]);
// console.log(typeof jsuser["mysym"]); //string show karega na ki symbol


//changing values 
jsuser.email="ansh@google.com"
//In Javascript if you dont want to change the value further you can freeze making it constant
// Object.freeze(jsuser)
// jsuser.email="ansh@microsoft.com"
// console.log(jsuser.email) //deosnt get changed since object has been freezed

jsuser.greeting=function(){
  console.log("hello js user");
}
jsuser.greetingtwo=function(){
  console.log(`Hello Js user, ${this.name}`);  //jab bhi same object ko refrence karne ho you can write this
}

console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());


