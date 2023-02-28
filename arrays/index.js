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

// for (let i = 0; i < people.length; i++) {
//   if (people[i].firstName === "Musab") {
//     console.log(
//       `${people[i].firstName} ${people[i].lastName}: ${people[i].job}`
//     );
//   }
// }
// let hDOM = document.querySelector("#head")
// for (let i = 0; i < people.length; i++) {
//   if (people[i].lastName === "Ramazan") {
//     hDOM.innerHTML += `<span class="text-primary mr-5" >${people[i].firstName} ${people[i].lastName}: ${people[i].job}</span>`
//   }
// }

for (let item of people) {
  if (item.salary <= 25){
    console.log(`${item.firstName} ${item.lastName} -> Eski Maaş: ${item.salary}, Yeni Maaş : ${item.salary*1.25}`);
  } 
}
