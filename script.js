let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0];

let all_grades_div = document.getElementById("all-grades");
let search_grades_div = document.getElementById("search-grades");
let A_grades_div = document.getElementById("A-grades");
let bonus_grades_div = document.getElementById("bonus-grades");
let random_grade_div = document.getElementById("random-grade");

function search() {
  let inputValue = document.getElementById("input").value;
  let marks = grades.filter((marks) => marks == inputValue);
  search_grades_div.innerHTML += `<span> ${marks} </span>`;
}

grades.pop();
grades.push(99);

// grades.forEach(
//   (grade) => (all_grades_div.innerHTML += `<span>${grade}</span>`)
// );

for (let i = 0; i < grades.length; i++) {
  all_grades_div.innerHTML += `<span> ${grades[i]} </span>`;
}

let excellent = grades.filter((excellent) => excellent > 90);

A_grades_div.innerHTML += `<span> ${excellent} </span>`;

let addition = grades.map((addition) => addition + 3);
bonus_grades_div.innerHTML += `<span> ${addition} </span>`;

// if ((inputValue = document.getElementById("input").value) != grades) {
//   alert("not found");
// }

var randomIndex = Math.floor(Math.random() * grades.length);

random_grade_div.innerHTML += `<span>
  
    #${randomIndex}: ${grades[randomIndex]}
  </span>`;
