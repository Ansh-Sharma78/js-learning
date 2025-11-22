const myarr=[1,2,3]


// const myTotal=myarr.reduce(function (accumulator,currvalue){      //basically what this function does is it accumulates a value here we have passed zero, toh pehle zero ayega accumulator mai phir 0+1 hoke accumulator ki value 1 hojayegi and so on.....
//     console.log(`acc: ${accumulator} and curr value ${currvalue}`);
//     return accumulator+currvalue
// }, 0)


const myTotal=myarr.reduce((acc,curr) => acc+curr,0)

// console.log(myTotal)

const shoppingCart=[
    {
        itemname:"js course",
        price: 999
    },
    {
        itemname:"java course",
        price: 9999
    },
    {
        itemname:"python course",
        price: 1000
    },
]

const total= shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(total)