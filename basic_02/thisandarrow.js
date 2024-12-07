const user={
    username:"Yogesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} ,Welcome to Website`);
        // console.log(this);
        
    }

}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);

// function one(){
//     console.log(this);
    
// }
// one()



// const chai=function(){

//     let username="Yogesh"
//     console.log(this.username);
    
// }

//Arraow Functions

const chai=()=>{

    let username="Yogesh"
    console.log(this);
    
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
          //OR//
const addTwo=(num1,num2)=>num1+num2 //implicit return type not need to write return statement


console.log(addTwo(20,30));

