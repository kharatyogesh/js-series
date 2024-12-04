//Primitive Datatypes...
//1) String
//2) Number
//3) Boolean
//4) null
//5) undefined
//6) symbol
//7) BigInt

const score=100;
const scoreValue=100.3

const isLoggedIn=false

const outSideTemp=null;
let userEmail=undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);



//Non-Primitive/ Reference
//1) Array
//2) Objects
//3) Functions

const heroes=["shaktiman","naagraj","doga"]

let inf={
    name:"Yogesh",
    age:22
}

const myFunction=function (){
    console.log("Hello World");
    
}

console.log(typeof myFunction);
console.log(typeof heroes);

