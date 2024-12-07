//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log("DB CONNECTED");
    
})();  

//OR and semocolon is mandatory to run multiple IIFE
(function one(){
    console.log("DB CONNECTED");
    
})() ;
//OR

(
    ()=>{
        console.log("Three");
        
    }
)();

//OR
(
    (name)=>{
        console.log(`Name is ${name}`);
        
    }
)("Yogesh")


