//We can open or send the request from browser to Any API or any web page.
//For open any webpage or send the request to API we have to use "fetch(URL,[options]);"


Url = "https://cat-fact.herokuapp.com/facts";

async function getAPI(){
    console.log('getting data....')
let response = await fetch(Url);
console.log(response);
}

// getAPI();

/*
IN past days when we send the req to API then API response to us in the form of AJAX which is "Asyncronus JS and XML" but now no more XML is beign use now we are using JSON (Javascript object notation)instead of XML. 

So we are getting the information after fetch the call to API but we recive the infomation is not in a proper way. Then we use the json(); which will convert the response in useable text. json() method also return promise only.
 */

Url = "https://cat-fact.herokuapp.com/facts";

async function getAPI(){
    console.log('getting data....')
let response = await fetch(Url);
console.log(response);//json format
let result = await response.json();
console.log(result);
}

getAPI();
