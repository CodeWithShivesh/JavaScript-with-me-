/*
This method syntax same as forEach loop but 
it return array of output values.
*/

let prices = [200,367,456,510,667,799];

//WE ARE CALCULATING 10% DISCOUNT OFFER ON ABOVE PRICES

let countOffer = (val)=>{
    return (val-val*0.1);
};

console.log(prices.map(countOffer));
