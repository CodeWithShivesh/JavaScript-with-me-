// ASYNCHRONOUS program
// this is something about not sequential program
// in this type of programs will not run with the sequential flow.
// in this types of program we use special method : setTimeout(callback_function, time in milisecond)

//eg:1
// function print_hello(){
//     console.log("hello");
// }

// setTimeout(print_hello,3000);

//or

// setTimeout(()=>{
//     console.log("hello");//arrow function
//     },3000);


//eg:2
console.log("statement 1");
console.log("statement 2");
console.log("statement 3");

setTimeout(()=>{
    console.log("hello");//arrow function
    },3000);

console.log("statement 4");
console.log("statement 5");
