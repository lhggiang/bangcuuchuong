let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");

table.appendChild(thead);
table.appendChild(tbody);

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

// Creating and adding data to second row of the table
let row_2 = document.createElement("tr");
let row_2_data_1 = document.createElement("td");
row_2_data_1.innerHTML = "1.";
let row_2_data_2 = document.createElement("td");
row_2_data_2.innerHTML = "James Clerk";
let row_2_data_3 = document.createElement("td");
row_2_data_3.innerHTML = "Netflix";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);
