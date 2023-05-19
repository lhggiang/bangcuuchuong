let newStr = "";
for (let i = 1; i <= 10; i++) {
  newStr += "<tr>";
  for (let k = 2; k <= 10; k++) {
    newStr += `<td> ${k} x ${i} = ${i * k}</td>`;
  }
}
document.getElementById("table").innerHTML = newStr;
