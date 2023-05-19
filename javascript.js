let newStr = "";
for (let i = 1; i <= 10; i++) {
  newStr += "<tr>";
  for (let j = 2; j <= 10; j++) {
    newStr += `<td> ${j} x ${i} = ${i * j}</td>`;
  }
}
document.getElementById("table").innerHTML = newStr;
