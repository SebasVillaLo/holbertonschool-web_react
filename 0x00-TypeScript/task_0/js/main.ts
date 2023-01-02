interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

let student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  location: "London",
};

let student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Paris",
};

let studentsList: Student[] = [student1, student2];
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
for (let i = 0; i < studentsList.length; i++) {
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  td1.innerHTML = studentsList[i].firstName;
  td2.innerHTML = studentsList[i].location;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tbody.appendChild(tr);
};
table.appendChild(tbody);
document.body.appendChild(table);
