let src = {
    age: 12,
    wt: 30,
    ht:5
};

//console.log(obj);
// obj.color = "white";
// console.log(obj);

// let obj = {age:12};
// let obj2 = {... obj};
// console.log(obj2);

let src2 = {
    name: "Sach",
    value: 50
};


// let dest = Object.assign({}, src, src2);

// src.age = 60;
// console.log(src);
// console.log(dest);

let dest = {};
for(let key in src){
    let newKey = key;
    let newVal = src[key];
    dest[key] = newVal;
}
src.age = 50;
console.log(dest);
console.log(src);
