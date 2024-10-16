const name = "swara"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('swara--aa')
// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  swara  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.amazon.in/Home/Home"
console.log(url.replace('%20', '-'))
console.log(url.includes('sara'));

console.log(gameName.split('-'));
