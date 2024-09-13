//username Suggestion code
let f_name = prompt("Enter first name:");
let l_name = prompt("Enter last name:");

let len = f_name.length+l_name.length;

let userName = `Suggested Username: @${f_name}${l_name}${len}`

console.log(userName);
