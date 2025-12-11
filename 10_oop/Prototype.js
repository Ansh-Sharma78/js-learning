//isme prototype samjhenge

// let myName="ansh       "
// console.log(myName.length); //while printing length it will give 11 since it is also calculating the spaces lets create a function that gives true length

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//we created an new property in the object prototype

//yahan humne property object mai define ki h which makes it kinda global so  array can also use it let us ssee if reversing things would also work??
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHites=function(){
    console.log(`Hitesh says hellow`);
    
}
               
//heroPower.hitesh()
//myHeros.hitesh()

// heroPower.heyHites() //this wouldnt be able to acces heyhitesh property since we defined it in an array prototype so and object which is an upper layer cannot use it
// myHeros.heyHites()


//------------------------
//INHERITANCE
const user={
    name:'chai',
    email:'chai@gogle.com'
}
const teacher={
    makeVideo: true,

}

const teachersupport = {
    isAvailable: false
}


const TAsupport={
    makeAssignment: 'Js assignment',
    fulltime:true,
    __proto__: teachersupport //here we linked one object to another meaning it can acccess other object's properties
}

teacher.__proto__ = user

//modern syntax is this
Object.setPrototypeOf(teachersupport, teacher) //(a,b ) a can access properties of b


let anotherusername="chaiaurcode    "

String.prototype.truelength=function(){
    console.log(`${this}`);
    
    console.log(`True length is: ${this.trim().length}`);
}

anotherusername.truelength()
"fuckkkkkk".truelength()