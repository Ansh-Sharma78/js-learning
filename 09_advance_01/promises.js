//CREATING A PROMISE
// const promiseOne = new Promise(function(resolve, reject){
//     //do an async task
//     //DB CALLS,cryptography,network
//     setTimeout(function(){
//         console.log('Async task is completed');
//         resolve() //isko use karke connect hoga then se 
//     },1000)
// })

// promiseOne.then(function(){         //here we are resolving the promise (promise consumption)
//     console.log('promise is resolved');  
// })
// //OR
// new Promise(function(resolve,reject){
//     setTimeout(function(){
//          console.log("Async task 2");
//          resolve()
//     },1000)
// }).then(function(){
//     console.log("promise is resolved 2");
    
// })

// const promiseThree= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai", email: "chai@gogle.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"ansh",password:"2131"})
//         }else{
//             reject('ERROR something went wrong')
//         }
//     },1000)
// })
 
// //imp concept of chaining of then zaruri nahi hai then ko sirf ek baar likho
// promiseFour.then( (user) => {
//     console.log(user);
//     return user.username
// }).then((username)=>{
//   console.log(username);
  
// }).catch(function(error){
//       console.log(error);
      
// }).finally(()=>{  //default rehta hai
//     console.log('the promise is either resolved or rejected');
    
// })

// const promiseFive= new Promise(function(resolve,reject){
// setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"jsavascript",password:"2131"})
//         }else{
//             reject('ERROR js went wrong')
//         }
//     },1000)
// });

//zaruri nahi ap promise then catch se hi handle kare async await se bhi kr sakte hai
//async await thodi der wait krta hai kaam ka hone ka warna error throw kr deta hai
// async function consumePromiseFive(){
//     try{
//       const response= await promiseFive  //time lagega isliye await laga liya 
//     console.log(response);  
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }

// consumePromiseFive();

//------------------------------------------------------
// async function getAllusers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //response string mai ata isliue usko json mai convert kr diya taki data ffetch kr paaye
//         console.log(data);
        
//     }catch(error){
//         console.log("error occured");
        
//     }
// }
//getAllusers();
//OR

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
 console.log(data);
 
}).catch((error)=>{
 console.log(error);
 
})
