
// console.log("sach");

// function sayName(){
//     console.log("my Name is: Sach");
// }

// setTimeout(sayName, 5000);

// console.log("end of loop");

// let firstPromise = new Promise((resolve, reject) => {
//     console.log("sach"); //this is sync process
// });

// let secondPromise =  new Promise((resolve, reject) =>{
//     console.log("sach: 2nd phase");
//     resolve(10001);
// });

// //reject that will geive thee system error
// let thirdPromise = new Promise((resolve, reject) =>{
//     console.log("this function will give error as we will use reject");
//     reject(new Error("Internal Server Error"));
// })

// setTimeout(function sayName() {
//     console.log("My name is: Sach");
// }, 1000);

// let promise = new Promise((resolve, reject) => {
    
//     setTimeout(function(){
//         console.log("Hello dexter morgan: ");
//     } ,15000);

//     return 1;
// });

// let promise1 = new Promise((resolve, reject) => {
//     let success = 1;
//     if(success){
//         resolve(10);
//     }
//     else{
//         reject(-1);
//     }
// });

// promise1.then((message) =>{
//     console.log(" first message is: "+ message);
//     return 20;
// }).then((message) => {
//     console.log("msg 2: "+ message);
//     return 30;
// })


//simple way using promise.all
let promise1 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, "first");
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "second");
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "last");
});

Promise.all([promise1, promise2, promise3]).then((value)=>{
    console.log(value);
})
