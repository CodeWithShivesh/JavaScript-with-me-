//async-await is two type of fuction in JS which makes promises chain more easier.
//async is type of keyword which makes the function like who always must return promises. it is use before the function keyword.
//await is another type of keyword who calls the function with full execution and stop execution of all the things in surrounding.
//await is always use inside the async function. 


function getData(dataId){
    return new Promise((resolve,reject) =>{   
    setTimeout(()=>{
        console.log("Found",dataId);
        resolve("success");
    },4000); 
});
}

//async-await 
/* 
async function api(){
    console.log("fechting data....");
    await getData(1);
    console.log("fechting data....");
    await getData(2);
}
*/

//IIFE: (Immediately Invoked Function Expression)
//IIFE is the type of fuction which has no name and who invoked immediately as you run the program. "(whole function)();"

(async function api(){
    console.log("fechting data....");
    await getData("Username");
    console.log("fechting data....");
    await getData("Password");
})();