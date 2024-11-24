 const myNums = [ 1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)

// console.log(myTotal);


const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCArt = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "data analyst",
        price: 1999
    },
    {
        itemName: "mobile developer",
        price: 29909
    },
]

const priceToPay = shoppingCArt.reduce( (acc,item) => acc + item.price,0 )

console.log(priceToPay);
