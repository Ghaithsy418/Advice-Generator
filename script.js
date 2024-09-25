'use strict';

const iconDice = document.querySelector(".icon-dice");
const advice = document.querySelector("p");
const number = document.querySelector(".number");
let theAdvice;
let theNumber = 0;
//#########################################################

const adviceAPI = async function(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const final = await res.json();
    theAdvice = final.slip.advice;
    theNumber++;
    number.textContent = theNumber;
    advice.textContent = `"${theAdvice}"`;
    console.log(final);
}

number.textContent = `${theNumber}`;
advice.textContent = '';
adviceAPI();


iconDice.addEventListener("click",function(){
    advice.textContent = 'LOADING....';
    adviceAPI();
})