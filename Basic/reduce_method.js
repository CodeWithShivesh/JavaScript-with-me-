/* 
This method use where in input big 
array and in output only one calculated number.
*/

//Q. Enter one number and create the array from 1 to that number then cal. the sum and product of that array.

let num = prompt("Enter the value of n: ");
let arr = [];

function createArray(n){
    for(let i=1;i<=n;i++){
       arr[i-1]=i;
    }
}

createArray(num);
console.log(arr);

let sum = arr.reduce((prev,curr)=>{
    return (prev+curr);
});

console.log("Sum:",sum);

let pro = arr.reduce((prev,curr)=>{
    return (prev*curr);
});

console.log("product:",pro);


