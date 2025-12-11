//Object Literal
//it is nothing but literally defining an object
// const user={
//     //properties
//     username: 'ansh',
//     loginCount: 8,
//     signedIn: true,
    
//     //methods
//     getUserDetails: function(){
//         //console.log('got user details from DB');
//         //console.log(`Username: ${this.username}`); //we used this kyunki ye function execution engine mai jayege separately so we need to tell it we want something from the current context which is why we use this
//         //console.log(this); //it will show the current context
        
//     }
// }

// console.log(user.username);
// console.log(user.getUserDetails());
//console.log(this); => {}

//------------------------------------------------
//Constructor Function

//const promieOne=new Promise() //what is this new keyword? it is a constructor function it allow to create multiple instance from an object literal

function User(username,logincount,isLoggedIn){
    this.username = username;
    this.logincount=logincount;
    this.isLoggedIn=isLoggedIn;

    return this;  //ye by default hota hai
}

// const user1=User("ansh",3,true)
// const user2= User("chiku",3,false)
// console.log(user1); //ab agar isko log karenge toh user 2 kki values print hogi??why=>   user 2 value overwrite kr dega which is why we use constructor function which provides multiple instances

//since now we used new ab user 1 pr wahi print hoga mtlbb ushi ka instance print hoga 
//and user 2 mai bhi cf use krne ka baad uska separate instance banega and we can print that too
const user1=new User("ansh",3,true)
 //const user2= new User("chiku",3,false)
console.log(user1.constructor); //refrence to the function


//console.log(user1 instanceof User);  //can check if it is an instance of an fucntion or not


//So whenever we use new keyword an empty object is created jisko instance bola jata hai ,, 2) an constructor function is called automatically by using new keywork and packs the argument in this new keyworkd .,,, 3) and phir wo sab mil jata hai