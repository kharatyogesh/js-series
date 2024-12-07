// console.log("functions");

// function myName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }
// myName()

function addTwoNum(num1,num2){
   return num1+num2
    
}
const res=addTwoNum(10,20)
// console.log(`Addition is ${res}`);

function loginUserMessage(username) {
    if(username===undefined){
       console.log("Please enter a username");
       return 
    }
     return `${username} just logged in`
}

// console.log(loginUserMessage("Yogesh"))
// console.log(loginUserMessage()) //undefined

//... Rest Operator
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,500))



const user={
    username:"Yogesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"Sam",
    price:399
})

const myNewArr=[200,400,100,700]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
