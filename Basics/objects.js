let student= {
    name:"Shivesh",
    rollNo:46,
    isPass:true,
    address:"Kanpur"
};

console.log(student);

console.log(student["name"]);

console.log(student.name);

//For-in LOOP
for(let key in student){
    console.log(key,':',student[key]);
}

