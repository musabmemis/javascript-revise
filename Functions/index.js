// function max(n1, n2) {
//     return n1 > n2 ? n1 : n2
// }
// console.log(max(5,10));

// let arr = [23, 34, 45, 56, 67, 78, 89, 90, 99, 88, 77, 54, 21];

// function max(arr) {
//   let result = 0;
//   for (let num of arr) {
//     if (result < num) {
//       console.log(`${result} küçüktür ${num} yeni result = ${num}`);
//       result = num;
//     } else console.log(`${result} küçüktür ${num}`);
//   }
//   return result;
// }

// console.log(max(arr));

//  Arrow Function :

let people = [
  { firstName: "Musab", lastName: "Memiş", job: "doctor", salary: 25 },
  { firstName: "Musab", lastName: "hak", job: "painter", salary: 50 },
  {
    firstName: "Muhammed",
    lastName: "Ramazan",
    job: "machinery engineer",
    salary: 15,
  },
  {
    firstName: "Bilal",
    lastName: "Ramazan",
    job: "Electrical engineer",
    salary: 20,
  },
  { firstName: "Muaz", lastName: "Memiş", job: "engineer", salary: 40 },
];

for (let item of people){}
