const coding=["java","js","ruby","python","swift"]

// const values=coding.forEach((item)=>{
//      return item
// })

// console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newnums= mynums.filter((num)=> {
//    return num>4 
// })
// console.log(newnums);


//const newnums=[]

// mynums.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
// })

// console.log(newnums);

//------------------------------------------------------
const books=[
    {
        title:"book one",
        genre:"history",
    },
    {
        title:"book two",
        genre:"science",
        publish:2009,
    },
    {
        title:"book three",
        genre:"romcom",
        publish: 1999
    },
    {
        title:"book four",
        genre:"history",
        publish:2004
    }
]

let userbooks=books.filter((bk)=>bk.genre==='history')
userbooks=books.filter((bk)=> {return bk.publish>=2000 && bk.genre=="history"})
console.log(userbooks);
