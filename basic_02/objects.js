//singleton
//Object.create



//object literals

const mySum=Symbol("key1")
// const JsUser={
//     name:"Yogesh",
//     "full name":"Yogesh Kharat",
//     // mySum:"mykey1",//for string type
//     [mySum]:"mykey1",//for string type
//     age:23,
//     location:"Jaipur",
//     email:"kharatyogesh4523@gmail.com",
//     isLoggedIn:false
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySum); //mykey1
// console.log(typeof JsUser.mySum); // type is String not Symbol
// console.log(JsUser[mySum]); //mykey1

// JsUser.email="yogesh4523@gmail.com"
// console.log(JsUser.email); //yogesh4523@gmail.com
// Object.freeze(JsUser) //it is freeze then we cannot modify it
// JsUser.email="kharat4523@gmail.com"
// console.log(JsUser.email); //yogesh4523@gmail.com

// console.log(JsUser);



//singleton

//const tinder=new Object() //empty object
// console.log(tinder);
// const tinderUser={} //empty object
// console.log(tinderUser);

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Yogesh",
            lastname:"chaudhari"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3=Object.assign(obj1,obj2)
// console.log(obj3);
// console.log(obj3===obj1); //true

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        id:1,
        email:"y@gmail.com"
    },
    {
        id:1,
        email:"y@gmail.com"
    },
    {
        id:1,
        email:"y@gmail.com"
    }
]

// console.log(users[0]);
// console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Objects de-structure 

const course={
    coursename:"Js in hindi",
    price:1000,
    courseInstructor:"hitesh"
}

const {courseInstructor}=course
console.log(courseInstructor); //hitesh


//API
//Json structure 
// {
//     "name":"hitesh",
//     "coursename":"Js in hindi",
//     "price":"free"
// }
