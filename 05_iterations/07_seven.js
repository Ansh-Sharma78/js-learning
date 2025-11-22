const myNumbers=[1,2,3,4,5,6,7]

// const newNums= myNumbers.map((num) => {
//     return num+10
// })

//Chaining
const newNums=myNumbers
        .map((num)=>num*10)  //pehla ye operate hoga and array mai opertion perform karega multiplying by 10
        .map((num)=>num+1)  //now previous map ka jo function hai uska result[10,20,30,40,50,60,70], mai yahan changes honge not from the original array this is why its clled chaining
        .filter((num)=> num>=40)  //now previous operaion par filtering hogi

console.log(newNums);

