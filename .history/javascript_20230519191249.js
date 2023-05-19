let str = "";
for (let i = 1; i <= 10; i++) {
  str += "<tr>";
  for (let k = 2; k <= 10; k++) {
    str += `<td> ${k} x ${i} = ${i * k}</td>`;
  }
}
document.getElementById("table").innerHTML = str;
