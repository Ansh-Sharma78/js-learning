const coding=["js","ruby","cpp","java","swift"]

// coding.forEach( function (item) { 
//  console.log(item);
 
// }) 
//OR
 
// coding.forEach( (i) => {  //using arrow function
// console.log(i);

// })

//OR

// function printme(item){
//     console.log(item);
    
// }

// coding.forEach(printme)


//------------------------------
// coding.forEach((item, index, arr)=>{
// console.log(item, index, arr);
// })


//important
const mycoding=[
    {
        langname:"javascript",
        langfile: "js"
    },
    {
        langname:"java",
        langfile: "java"
    },
    {
        langname:"python",
        langfile: "py"
    },
]
mycoding.forEach((item)=>{
      console.log(item.langname);
      
})