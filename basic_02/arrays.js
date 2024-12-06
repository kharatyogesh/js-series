//Array

// const myArr=[0,1,2,3,4,5]

// const myHeroes=["strange","Hulk"]

// const myArr2=new Array(1,2,3,4)

// console.log(myArr[1]);

//Array Methods

// const myArr=[0,1,2,3,4,5]
// myArr.push(6) //add element at last
// myArr.push(7)
// myArr.pop() //remove last value


// myArr.unshift(45) //add element at first index
// myArr.shift() //remove first element
// myArr.shift() //remove first element
// console.log(myArr);  

// console.log(myArr.includes(3));//true
// console.log(myArr.indexOf(5)); //5

// const newArr=myArr.join();
// console.log(newArr);

// console.log(typeof newArr);  //string not array


//slice and splice method

// console.log("A ",myArr);

// const myn1=myArr.slice(1,3) //1,2 skip last index 3 
// console.log(myn1);


// const myn2=myArr.splice(1,3) //1 2 3  not skip
// console.log(myn2);

// const myArr=[0,1,2,3,4,5]

const heroes=["thor","Ironman","spiderman"];

const dc=["superman","flash","batman"];

// heroes.push(dc) //array a single element when push whole array
// console.log(heroes);
// console.log(heroes[3]);//[ 'superman', 'flash', 'batman' ]

// heroes.concat(dc)
// console.log(heroes); //[ 'thor', 'Ironman', 'spiderman' ]

// //assign in new variable for merge
// const allHeroes=heroes.concat(dc)
// console.log(allHeroes); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heroes=[...heroes,...dc]
// console.log(all_new_heroes);//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const realArray=another_array.flat(Infinity);
// console.log(realArray);
//output
// [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// console.log(Array.isArray("Yogesh")) //false
// console.log(Array.from("Yogesh"))//[ 'Y', 'o', 'g', 'e', 's', 'h' ]

let score1=100
let score2=200
let score3=300
//converti it into array
console.log(Array.of(score1,score2,score3));

