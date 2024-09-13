//concept of 'Promise' is like Amazon e-Com where we place the order with 
//the online payment and then we have to wait for order delevery.
//Where amazon give us promise to delever the order if the order sucessfully delevered 
//then promise is 'Fulfilled' or 'Resolve' and 
//if not deleverd then promise 'Reject' and initailly promise is on 'Pending'.
//Promise is object in JS



//e.g:1 
/*

let promise = new Promise((resolve, reject) =>{
    console.log('i am a promise');
    // resolve("Success");
    reject("unsuccesful");
});

 */
/* 
function getData(dataId, nxtdata){
    return new Promise((resolve,reject) => {setTimeout(()=>{
        console.log("Data:",dataId);
        // resolve("sucess");
        // reject("Error");
        if(nxtdata){nxtdata();}
    },5000);
    });
}

let result = getData(89);
*/

/*
If we want to take work from promise then we have to use 'Then' and 'catch' method.
promise.then((res)=>{......})
promise.catch((err)=>{.....})

*/
/* 

const getPromise = () => { return new Promise((resolve, reject) =>{
    console.log('i am a promise');
    resolve("Success");
    // reject("unsucessful");
});
};

let promise = getPromise();
promise.then((res) => {
    console.log(res);
});
promise.catch((err) => {
    console.log(err);
});

*/

/*
Promise chaining is one feature of promise where we use the promises like nesting.
*/


const async1 = () => { return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log("Data1");
        resolve("Success1");
    // reject("unsucessful");
    },4000);
});
};

const async2 = () => { return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log("Data2");
        resolve("Success2");
    // reject("unsucessful");
    },4000);
});
};

const async3 = () => { return new Promise((resolve, reject) =>{
    setTimeout(()=>{
        console.log("Data3");
        resolve("Success3");
    // reject("unsucessful");
    },4000);
});
};


console.log("fecthing data1 ....");
async1().then((res) => {
    console.log("fecthing data2 ....");
    async2().then((res) => {
        console.log("fecthing data3 ....");
        async3().then((res) => {
        });
    });
});


