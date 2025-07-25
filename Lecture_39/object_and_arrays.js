// let obj = {
//     name: "Sachin",
//     age: 24,
//     dept: "AE",
//     height: "6ft",
//     greet: function(){
//         let a = 7;
//         console.log(a);
//         console.log("how are you?");
//     }
// };

// for(let key in obj){
//     console.log(key, " ", obj[key]);
// }

// console.log(obj);
// obj.greet();

// let arr = [1,2,3,4,5,5,6];
// console.log(arr);

// //array constructor
// let brr = new Array("sachin", 1, false);
// console.log(brr);

// //acceseing element base on index
// console.log(brr[2]);
// let maxi = arr[0];
// for(let i = 0; i<arr.length;i++){
//     if(maxi < arr[i]){
//         maxi = arr[i];
//     }
// }
// console.log(maxi);
// arr.pop()
// console.log(arr);
// arr.push("sachin");
// console.log(arr);

// arr.shift(); //removing begining element
// console.log(arr);
// arr.unshift("kanpur"); //addibg to begining of arr
// console.log(arr);

// //slice 
// console.log(arr.slice(2,4));

// //splice
// console.log(arr);
// arr.splice(2,3,"prince");
// console.log(arr);


// filter

// let arr = [12, 11, 13, 10, 2, 8, 9];
// let ans = arr.filter((num)=>{
//     if(num&1){
//         return false;
//     }
//     else{
//         return true;
//     }
// });

// 

// let arr = [1,true, 'sach', 'djfkhfk', 'dfjhfera', 2 , false, null];

// let stringArr = arr.filter((value)=> {
//     if(typeof(value) === 'string'){
//         return true;
//     }
//     else{
//         return false;
//     }
// });

// console.log(stringArr);


//reduce lets sum the all elemnt and reduce it's size
// let arr = [10,2,3,40,8, 9];

// // let ans = arr.reduce((acc, curr) =>{
// //     return acc+curr;
// // }, 0);

// // console.log(ans);
// arr.sort();
// console.log(arr);

// let arr = [10,20,30];

// arr.forEach((val,index) =>{
//     console.log("Number: ", val, "Index: ", index);
// });


let arr = [10,20,30,40,50];

function getSum(arr){
    let len = arr.length;
    let sum = 0;
    for(let i = 0; i<len; i++){
        sum += arr[i];
    }
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum);


