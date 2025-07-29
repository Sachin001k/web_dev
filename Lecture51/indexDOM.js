// let mydiv = document.querySelector('#mydiv');

// let newElemnt = document.createElement('span');
// newElemnt.textContent = "Sach K";

// mydiv.insertAdjacentElement('afterend', newElemnt);

let parentDiv = document.querySelector('#mydiv');
let child = document.querySelector('#lastPara');

parentDiv.removeChild(child);