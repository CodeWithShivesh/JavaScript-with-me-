// Callbacks is a type of fuctions who is passing through like argument in another function.
//this type of argument will not pass with the () otherwise prgram will give you error.
//we can pass arrow function instead of function name.

/*

function sum(a,b){
    console.log(a+b);
}

function calc(a,b, sumCallback){
    sumCallback(a,b);
}

calc(4,6,sum);

 */

//callback hell : when callbacks fuction are calling each other in the form of nesting then it takes lots of time.
// callbacks hell are also known as "Pyramid of doom".

// How can we get data from one by one with some time delaye

function getData(dataId, getNxt){
    setTimeout(()=>{
        console.log("Data",dataId);

        if(getNxt){
            getNxt();
        }
    },2000);
}

//pyramid of doom
    getData(1, () => { 
        getData(2, () => { 
            getData(3, () => { 
                getData(4)
                    });
                });
            });