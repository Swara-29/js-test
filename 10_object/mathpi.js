const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor);

console.log(Math.PI);
Math.PI = 5
console.log(Math.PI);

const chai = {
    name: "swara",
    price: 234553,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));


for(let [key, value] of Object.entries(chai)) {
    if(typeof vlaue !== "function"){
    console.log(`${key} : ${value}`);
    }
}