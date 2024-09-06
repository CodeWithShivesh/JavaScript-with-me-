const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myNewArr = myArr.map((num) => num > 5)

// .map((num) => num * 10)

const NewArr = myArr.filter((num) => num > 5)
//.map((num) => num * 10)

console.log(myNewArr);
console.log(NewArr);