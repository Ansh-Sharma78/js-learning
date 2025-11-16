//dates

export let mydate=new Date()
// console.log(mydate.toString()); //converts to string and readable format
// console.log(mydate.toDateString());  //prints only date 
// console.log(mydate.toISOString());  //someformat of date
// console.log(mydate.toJSON());   //someformat of date
// console.log(mydate.toLocaleDateString());  //local format of printing date
// console.log(mydate.toLocaleString());   // local format  of date and time 
// console.log(mydate.toLocaleTimeString());    //localeformat of time
// console.log(typeof mydate);

//specifying a date
// let myCreateddate=new Date(2023, 0, 23,5,3,2)  //month jo hai zero se start hote hai js mai
let myCreateddate=new Date("01-14-2023")
// console.log(myCreateddate.toLocaleString());


let mytimestamp=Date.now()  //imp for hotel booking and quick makinf projects
// console.log(mytimestamp);
// console.log(myCreateddate.getTime());

//converting date.now to seconds
// console.log(Math.floor(Date.now()/1000)); 

let newdate=new Date("01-13-2025")
console.log(newdate.getDate()); //gets date similar methods are getmonth,year,milliseconds,hours etc
console.log(newdate.get);   //toggle here and you can see


//imp method of date
newdate.toLocaleString('default',{
    weekday: "long",
})