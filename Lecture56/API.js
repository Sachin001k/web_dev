//  console.log("sach");

// async function getData(){

//     setTimeout(function(){
//         console.log("Async function declaration: ");
//     }, 3000);
// }

// //async await;
// let output = getData();

// async function getData(){
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     let data = await response.json();
//     console.log(data);
// };

// getData();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const option = {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify({ username: "Sach k" }),
  // …
}

async function getData(){
    let response = await fetch(url);
    let data = await response.json();

    console.log("get data reponse: ", data);
}

async function postData(){
    let response = await fetch(url, option);
    let data = await response.json();
    console.log("Post data response is: ", data);
}
// const response = await fetch(url, option)
//process data use await function
async function processData(){
    await postData();
    await getData();
}
// getData();
// postData();

