
// var c=300
let a=200
if(true){
    let a=10
    const b=20
    // var c=30
    // console.log("INNER :" ,a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username="Yogesh"

    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    // two()
}
one()


if(true){
    const username="hitesh"
    if(username==="hitesh"){
        const website="youtube"
        // console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


//+++++++++++++++ interesting+++++++++++++
console.log(addOne(5));

function addOne(num){
    return num+1
}

addTwo(5) //error because we hold it in addTwo varaible
const addTwo=function(num){
    return num+2
}


