//while creating projects you might be able to create a functions that ll be taking many arguments dynamically like adding items to the Cart
function calculatCartPrice(...num1){  //... dots are rest and spread operator

    return num1
}
function calculatCartPrice2(val1,val2,...num1){  //... dots are rest and spread operator

    return num1
}
// console.log(calculatCartPrice(200,300,400)); //now we will get an array of these items
// console.log(calculatCartPrice2(200,300,500,600,400));  //is function mai val1 val2 mai humne 200 300 pass kia h aur wo usme storre hua baki humara num1 mai store hua hai since hum num1 ko return kar rahe hai toh wahi output ayega

//#2Objects in function
const user={
    username:"Ansh",
    price:99
}

function handleobject(anyobject){  //parameter is an object
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject(user) //argument is passed
//or
// handleobject({
//     username: "sam singh",
//     price: 399
// })

//#Passing arrays in Objects
const newarr=[200,300,400,500]

function returnarray(getarr){
    return getarr[2]
}

// console.log(returnarray(newarr))
//or
console.log(returnarray([200,300,400,600]))