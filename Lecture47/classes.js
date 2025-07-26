
// class human{
//     //properties
//     age ;
//     wt ;
//     height = 1.7;
//     //constructor 
//     constructor(newAge, newWeight){
//         this.age = newAge;
//         this.wt = newWeight;
//     }
//     //behaviour
//     walking(){
//         console.log("I'm Walking", this.wt);
//     }

//     singing(){
//         console.log("I'm Singing");
//     }

//     //getter and setter
//     get fetchWeight(){
//         return this.wt;
//     }
//     //setter
//     set modifyAge(val){
//         this.age = val;
//     }
// };

// let obj = new human(12, 30);
// console.log(obj.age);

// //console.log(obj.singing());
// // obj.singing();
// console.log(obj.wt);
// obj.walking();


function sayName(myName = "Sach"){
    console.log("Say my Name: ", myName);
}

sayName(); //this is called default parameter
