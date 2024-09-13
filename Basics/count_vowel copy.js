function count_vowel(str){
    let i=0;
    for(let char of str){
        console.log(char);
        if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
        {
            ++i;
        }
    }
    return i;
}
let strr = prompt("Enter any string: ");
console.log("Number of vowel in your string:",count_vowel(strr));