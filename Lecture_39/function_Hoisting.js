// console.log("abs");

// sayName("sachin"); //this is called function hoisting
// function sayName(name1){
//     console.log(name1);
// }

// console.log(age); //variable hoisting it gives undefined because it only take: var age;
// var age = 25;


// console.log(height);

// let height = "6ft"; in case of let varible declaration it will give error



// function greet(){
//     console.log("Say my Name: ");
// }

// function greetMe(greet, myName){
//     greet();
//     console.log("Hiesenberg: ", myName);

// }

// greetMe(greet, "is my Name");

// function solve(num){
//     return function(num){
//         return num*num;
//     }
// }

// let ans = solve(5);
// console.log(ans);
// let finalAns = ans(10);
// console.log(finalAns);

const arr = [
    function(a,b){
        return a+b;
    },

    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
];

let len = arr.length;
for(let i=0; i<len ;i++){
    let ans = arr[i];
    let finalAns = ans(200, 10);
    console.log(finalAns);
}