//code 1
const t1 = performance.now();
for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para: "+i;
    document.body.appendChild(para);
}

const t2 = performance.now();

console.log("time take by code1: ", + (t2-t1));

//code 2

const t3 = performance.now();
let mydiv = document.createElement('div');

for(let i=1;i<=100;i++){
    let para = document.createElement('p');
    para.textContent = "This is para: "+i;
    mydiv.append(para);
}
document.body.appendChild(mydiv);

const t4 = performance.now();
console.log("time taken by code 2: "+(t4-t3));
//best code
const t5 = performance.now();
let fragment = document.createDocumentFragment();

for(let i = 1; i<=100; i++){
    let para = document.createElement('p');
    para.textContent = "This is para: "+i;
    fragment.appendChild(para);
}

document.body.appendChild(fragment);
const t6 = performance.now();
console.log("time for code 3 is: "+(t6-t5));