// console.log(7);

// 
function printCounting(num){
    for(let i = 0; i<num ;i++){
        console.log(i);
    }
}

// printCounting(5);

// function average(num1, num2){
//     let avg = (num1+num2)/2;
//     console.log("average: ", avg);
// }

// average(3, 8);

let getMult = function(x,y){
    return x*y;
}

let ans = getMult(2,3);
console.log(ans);

// arrow fucntions;
let getMulti = (x, y) =>{
    return x*y;
}

let res = getMulti(3,4);
console.log(res);