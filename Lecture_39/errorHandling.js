
try{
    console.log("I'm in try block");
    console.log(x); //error block will give runtime error\
    console.log("end here try  block: ");
}
catch(err){
    //
    console.log("I'm in catch block")
    console.log("Error is: ", err);
}
finally{
    console.log("I will always work weather you want to or not");
    // console.log(x);
    // console.log(err);
}