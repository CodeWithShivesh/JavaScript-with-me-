// Q.1: Find Avg Marks
/*
let marks = [85,97,44,37,76,60];
let sum = 0;
for( let mark of marks){
    sum += mark;
}

let Avg = sum/marks.length;
console.log(`The average of the marks is ${Avg}`);
*/

// Q.2: Applying the offer
/*
let prices = [250, 645, 300, 900, 50];
let idx=0;
for(let price of prices){
    prices[idx] = price-(price*0.1);
    ++idx;
}
console.log("After applying the offer");
for(let price of prices){
    console.log(price);
}
*/

//Array operations 

let companies = ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];

console.log(companies.shift()); // Delete 1 from start
console.log(companies.splice(2,1,'Ola'));
console.log(companies.push('Amazon'));
console.log(companies);


