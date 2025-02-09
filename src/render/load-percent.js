import { getBitcoinData } from "../opertatos/get-bitcoin-data.js";

// setInterval(async () => {
const data = await getBitcoinData();

document.body.style.backgroundColor = data.percent < 0 ? "#662929" : "#1D2F78";
document.getElementById("title").style.color =
  data.percent < 0 ? "#FF4646" : "#5cf45c";
document.getElementById("base").innerHTML = `$ ${data.base.toLocaleString(
  "en-US",
  {
    currency: "USD",
  }
)}`;

document.getElementById("current").innerHTML = `$${data.current.toLocaleString(
  "en-US",
  {
    currency: "USD",
  }
)}`;

document
  .getElementById("arrow")
  .setAttribute(
    "transform",
    data.percent < 0 ? "matrix(1, 0, 0, -1, 0, 0)" : "matrix(1, 0, 0, 1, 0, 0)"
  );
document
  .getElementById("arrow")
  .children[2].children[0].setAttribute(
    "fill",
    data.percent < 0 ? "#FF4646" : "#5cf45c"
  );
document.getElementById("percent").innerHTML = `${data.percent
  .toFixed(2)
  .replace("-", "")}% (1d)`;

let difference = document.querySelector(".table").children[0].children[0];

data.points.forEach((item) => {
  let tr = document.createElement("tr");
  for (let i = 0; i < document.querySelectorAll("tr")[0].children.length; i++) {
    let td = document.createElement("td");
    td.innerHTML =
      Object.keys(item)[i] != "difference"
        ? item[Object.keys(item)[i]] ?? item.difference.base
        : item.difference.last.toFixed(2);
    tr.appendChild(td);
    console.log(item);
  }

  // td.style.color = item.difference < 0 ? "#FF4646" : "#5cf45c";

  difference.appendChild(tr);
});
