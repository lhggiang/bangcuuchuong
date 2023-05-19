let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

// Adding the entire table to the body tag
document.getElementById("body").appendChild(table);
let row_1 = document.createElement("tr");
let heading_1 = document.createElement("th");
heading_1.innerHTML = "Bang cuu chuong";

row_1.appendChild(heading_1);
thead.appendChild(row_1);
table.appendChild(thead);
table.appendChild(tbody);
for (let i = 1; i <= 9; i++) {
  let row_2 = document.createElement("tr");
  let row_2_data_1 = document.createElement("td");
  row_2_data_1.innerHTML = `2 * ${i} = ${i * 2}`;
  row_2.appendChild(row_2_data_1);
  tbody.appendChild(row_2);
  table.appendChild(thead);
  table.appendChild(tbody);
}
for (let i = 1; i <= 9; i++) {
  let row_2 = document.createElement("tr");
  let row_2_data_1 = document.createElement("td");
  row_2_data_1.innerHTML = `2 * ${i} = ${i * 2}`;
  row_2.appendChild(row_2_data_1);
  tbody.appendChild(row_2);
  table.appendChild(thead);
  table.appendChild(tbody);
}
