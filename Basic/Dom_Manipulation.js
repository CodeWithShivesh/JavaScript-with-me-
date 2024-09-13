/*
Automatic and default object : WINDOW OBJECT 
which is created by browser and it will create after the program runs.
*/

/*
All HTML Code will gets convert into the document 
object which is present in WINDOW OBJ.
*/

/*
We can manipulate anything in the HTML code dynamically 
without open HTML file using DOCUMENT OBJ in with JS.
*/

/*

Window obj --> Document obj --> HTML code

we have some kind of Element selector:
    => document.getElementById("ID");
    => document.getElementsByClassName("CLASS");
    => document.getElementByTagName("TAG");
    => document.querySelector(".myClass");
    => document.querySelector("#myId");
    => document.querySelector("Tag");

Properties: 
    => innerText
    => tagName
    => innerHtml
    => textContent

*/

/*

For fetching attributes of any tag:
    => .getAttribute("id");
    => .setAttribute("id", "myid");

For fetching inline style:
    => node.style

For adding some new elements: First we ahve to create and then insert.
For creation :
    => let element = document.createElement("div");
For Insertion :    
    => node.append(element);
    => node.prepend(element);
    => node.before(element);
    => node.after(element);

For Deletion:
    => node.remove();
 */

//Q.1: create one h3 heading with the text "hello javascript" and then append with "Apna college Students."

// let h3 = document.querySelector('h3');

// console.log(h3);
// console.dir(h3);

// h3.innerText = h3.innerText + " from Apna college students";


//Q.2: Access all 3 div with the class and add some unique text in each of them.

// let divs = document.querySelectorAll(".box");

// divs[0].innerText = "Hello";
// divs[1].innerText = "Apna";
// divs[2].innerText = "College";


// let idx=1;
// for(let div of divs){
//     div.innerText = `New unique text ${idx}`;
//     idx++;
// }

// console.dir(divs[0]);
// console.dir(divs[1]);
// console.dir(divs[2]);

//Q.3 create new button and give text and color using JS.

let button = document.createElement("button");
button.innerText = "Click Me!";
button.style.color = "white";
button.style.background = "red";

let body = document.querySelector('body');
body.append(button);


//Q.4 create a new class in css file and then append with the old class in paragraph tag.
//Hint: Use classList to add more then one class in tag.

let paragraph = document.querySelector("p");
paragraph.classList.add('newPara');
// paragraph.getAttribute('class');
