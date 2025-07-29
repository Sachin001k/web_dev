// let firstPara = document.getElementById('fpara');
// firstPara.textContent = "hello Sach";

// function changeText(event){
//     console.log(event);
//     let firstPara = document.getElementById('fpara');
//     firstPara.textContent = "Hello world!, sach";
// }

// let fpara = document.getElementById('fpara');
// //adding event lister
// fpara.addEventListener('click', changeText);


// function changeDefault(event){
//     event.preventDefault();
//     anchorElement.textContent = "Click is done:";
// }

// let anchorElement = document.getElementById('fanchor');
// anchorElement.addEventListener('click', changeDefault);

let paras = document.querySelectorAll('p');
function alertPara(event){
    alert("you have clicked on para: " + event.target.textContent);
}

// for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', alertPara);
// }

let mydiv = document.getElementById('firstDiv');
mydiv.addEventListener('click', alertPara);
