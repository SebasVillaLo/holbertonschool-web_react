// Write an interface named Teacher that accepts the following elements:
// firstName: string - can only be set during initialization of an object of this interface
// lastName: string - can only be set during initialization of an object of this interface
// fullTimeEmployee: boolean
// yearsOfExperience: number - optional
// location: string
// Add the possibility to add any attribute to the Teacher object like contract(boolean) without specifying the name of the attribute:
// Property should be a string
// Type of this property can be anything
// Requirements:

// When running, Webpack should return No type errors found.
// Every variable should use TypeScript when possible.



interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
};

let teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: true,
};

let teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Doe",
  fullTimeEmployee: false,
  yearsOfExperience: 5,
  location: "Paris",
  contract: false,
};

let teachersList: Teacher[] = [teacher1, teacher2];
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let tr = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
th1.innerHTML = "firstName";
th2.innerHTML = "location";
tr.appendChild(th1);
tr.appendChild(th2);
thead.appendChild(tr);
table.appendChild(thead);
for (let i = 0; i < teachersList.length; i++) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td1.innerHTML = teachersList[i].firstName;
  td2.innerHTML = teachersList[i].location;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
}
table.appendChild(tbody);
document.body.appendChild(table);
