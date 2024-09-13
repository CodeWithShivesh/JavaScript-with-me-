/*
This array is similar to the map and forEach but 
it returns the array of filtered output.
*/

let marks = [89,78,98,90,87,79,69,97,93];

// Select the students who have scored 90+.

let good_student = (student)=>{
    return student>=90;
};

console.log(marks.filter(good_student));

// OR WE CAN WRITE 

console.log(marks.filter((student)=>{
    return student>=90;
}));