//const str="Yogesh"
//const repoCount=50

// console.log(str+repoCount+" value");

//console.log(`Hello My name is ${str}`);

//Another way to decalre string
const gameNew=new String('Yogesh-yp')

console.log(gameNew[0])
console.log(gameNew.__proto__.__proto__);

console.log(gameNew.length); //6
console.log(gameNew.toUpperCase());
console.log(gameNew.toLowerCase());
console.log(gameNew.charAt(3));//e
console.log(gameNew.indexOf('h'));//5

const newString=gameNew.slice(1,6)
console.log(newString);

const s1="     Yogesh    "
console.log(s1);

console.log(s1.trim());

const s2="https://hitesh.com/hitesh%20chaudhari"
console.log(s2.replace('%20','-'));

console.log(s2.includes('hitesh'));






