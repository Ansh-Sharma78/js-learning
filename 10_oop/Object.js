//In JS everything is an object 
//even a function is some point an object but it is also an function


//isme new keyword k bts bataya hai
function multiplyby5(num){
    return num*5;
}

multiplyby5.power=2

console.log(multiplyby5(5));
console.log(multiplyby5.power);  //here we can see that we can use dot with function cuz at some point it is an object
console.log(multiplyby5.prototype); //{}=> it is some bydefault context setted, so basically we can say that ye uss function ka this hai since it is telling us the current context

function createUser(username, score){
    this.username=username  //
    this.score=score
}

createUser.prototype.increment = function(){
    this.score++;  //sabka score bad jayega
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);  //this ko we can remember like this ki jisne bhi call kia uska kaam kara do thissssssss
    
}

//new use krna padega taki prototype ka function instance mai jaa paye
const chai= new createUser("chai",25)
const tea=new createUser("tea",33)

chai.printMe()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/