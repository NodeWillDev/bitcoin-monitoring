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
  let key = ["date", "time", "value", "difference"];
  for (let i = 0; i < key.length; ++i) {
    let td = document.createElement("td");
    td.innerHTML =
      key[i] == "value" || key[i] == "difference"
        ? Number(item[key[i]]).toLocaleString("en-US", {
            currency: "usd",
          })
        : item[key[i]];
    if (key[i] == "difference") {
      td.style.color = item.difference < 0 ? "#FF4646" : "#5cf45c";
    }
    tr.appendChild(td);
  }
  difference.appendChild(tr);
});
