const name="ansh"
const repocount=3

console.log(typeof name);

// console.log(name+repocount+" value"); //this is the old way to concenate strings
//modern js uses a new way (imp)

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
//this is called back text this is more readable and reliable



const gamename=new String('ansh-hc-com')
console.log(gamename);
console.log(typeof gamename);


//some functions/mehtod of Sstring like java only
console.log(gamename[0]); //accesing the 0th key
console.log(gamename.__proto__);  //object dekhna

console.log(gamename.length); ///tels the length of string
console.log(gamename.toUpperCase()); //converts to uppercase but but doesnt chaneg the original string as stringss are call by value 
console.log(gamename.charAt(5)) //tells the character which is at the given position
console.log(gamename.indexOf('h')); //returns the index of the given character

//making a substring out of a string
const newstr=gamename.substring(0,4) //ending index/key is not included in substr
console.log(newstr);
// console.log(gamename.substring(0,4));

const anotherstr=gamename.slice(-6,4) //diff between slice and substttring is here we can use negative indexing it would be used often
console.log(anotherstr);

//trim
const str3='    ansh    '
console.log(str3);
console.log(str3.trim());  //basically trim method removes the extra spaces

//replace method
// basically it replaces the values by some other values here %20 is replaced
// by -
const url="https://ansh.com/home%30about"
console.log(url.replace('%30','-'));

console.log(url.includes('ansh')); //checks the existence of some character can be used in checking password wagerah

//converting string to arrray
console.log(gamename.split('-')); //splits on the basis of - into an array check mdn FBU

// mdn for more methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#static_methods