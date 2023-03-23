const z = 3 + 4;
let myName = "Frank";
const myHero = document.querySelector("#hero");
const myGrader = document.querySelector("#grader");
const myTemperature = document.querySelector("#temperature");
const mySpan = document.querySelector("p#hero> span");
mySpan.innerHTML = console.log(myHero);

myHero.innerHTML = "Hej Emanuel";
console.log("Hej " + myName + " från Elinor");

myHero.innerHTML = " Hej " + myName + " från Elinor";
// slumpa fram ett tal mellan två nummer   Math.random Math.floor, rundar ner talet
let myNumber = Math.floor(Math.random() * (7 - 3 + 1) + 3);

//console.log(myNumber);
myGrader.innerHTML = "Hej det är " + myNumber + " grader kallt";
mySpan.innerHTML = myNumber;

//document.querySelector("#hero")
//<p id=​"hero">​Hej Besökare, välkommen till mig portfölj.​</p>​ selekterar ut
// document.querySelector(argument)
// argumentet är css-selectorn för att selektera ut ETT element som en sträng
