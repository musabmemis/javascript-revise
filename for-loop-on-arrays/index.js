// let cars = ['BMW','MERCEDES', 'TOYOTA'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);

// }

// let people = [
//     {firstName : 'Musab', lastName: 'Memiş', job: 'doctor'},
//     {firstName : 'Muaz', lastName: 'Memi', job: 'engineer'},
//     {firstName : 'Muhammed', lastName: 'Ramazan',job: 'machinery engineer'},

// ]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].firstName)

// }
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].lastName)

// }

// for (let i = 0; i < people.length; i++) {
//     console.log (people[i].job,'+',people[i].lastName)
// }

// const getAddedValue = (a, b) => {
//   return a + b;
// };

// console.log(getAddedValue(1, 2));

// const minusPlus = (x, y) => {
//   return x * y;
// };

// console.log(minusPlus(4, 5));

// function plus(a, b, c, d) {
//   return a + b + c * d;
// }

// console.log(plus(1, 2, 3, 4));

// let counter = 1;

// for (let i = 1; i < 10; i++) {
//   counter *= i;
// }
// console.log(counter);
// console.log(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9);

// const PI = Math.PI;
// console.log(PI);

const hDOM = document.querySelector("#deneme")
const ulDOM = document.querySelector(".liste")
const list  = document.createElement("li")
const span = document.createElement("span")
const h1DOM = document.querySelector("#remove")


let day;
let something;
let week;

function yapilacak(list) {
  ulDOM.appendChild(list);  
  list.innerHTML = `bugün yapılacaklar: ${week}`
}

switch(new Date().getDay()){
  case 0:
  case 6:
    day = "haftasonu";
    week = " Kızlarımla gezmek ve eğlenmek ";
    something = "güzel bir gün.";
    yapilacak(list);
    h1DOM.innerHTML = "GEZ, DOLAŞ";
    h1DOM.style.color = "blue";
    h1DOM.style.backgroundColor = "rgb(194, 118, 118)";
      break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    day = "hafta içi"
    something = "zor bir gün"
    week = "ders çalışmak";
    yapilacak(span);
    h1DOM.innerHTML = "DERS ÇALIŞ";
    h1DOM.style.color = "red";
    h1DOM.style.backgroundColor = "aquamarine";
      break;
}

hDOM.innerHTML = `bugün ${day}, ${something}`

