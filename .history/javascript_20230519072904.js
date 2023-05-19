let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement("th");
heading_2.innerHTML = "Name";
let heading_3 = document.createElement("th");
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

table.appendChild(thead);
table.appendChild(tbody);
for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    let row_2 = document.createElement("tr");
    let row_2_data_1 = document.createElement("td");
    row_2_data_1.innerHTML = `${i} * ${j} = ${i * j}`;
    row_2.appendChild(row_2_data_1);
    tbody.appendChild(row_2);

    table.appendChild(thead);
    table.appendChild(tbody);
  }
}
