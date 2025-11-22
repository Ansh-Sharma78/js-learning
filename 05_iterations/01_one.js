//FOR LOOP
for (let i = 0; i < 10; i++) {
    const element =i;
    // console.log(element);
}

//nested loop
// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 0; j <= 10; j++) {
//         // console.log(`Inner Loop value ${j} and outer loop ${i}`);
//         console.log(i+' * '+j+' = '+i*j);
        
//     }
// }

let myarr=["flash","batman","superman"]

for (let index = 0; index < myarr.length; index++) {
    const element = myarr[index];
   // console.log(element);
}


//----------------------------------------------------------
//#break and continue
// for (let i = 1; i <= 20; i++) {
//     if(i==5){
//         console.log(`detected 5`);
//         break; //breaks the iteration agar continue hota toh iss iteration ko ignore kr dete
//     }
//     console.log(`value of i is ${i}`);
// }
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(`detected 5`);
        continue; //breaks the iteration agar continue hota toh iss iteration ko ignore kr dete
    }
    console.log(`value of i is ${i}`);
}