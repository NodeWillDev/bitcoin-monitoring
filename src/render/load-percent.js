import { getBitcoinData } from "../opertatos/get-bitcoin-data.js";

// setInterval(async () => {
const data = {
  percent: 2.2778123858123,
  current: 108102.19289123,
  update: "02/02/2025, 16:04:52",
  last: 90212.123313123,
};

document.body.style.backgroundColor = data.percent < 0 ? "#662929" : "#1D2F78";
document.getElementById("title").style.color =
  data.percent < 0 ? "#FF4646" : "#5cf45c";

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
document.getElementById("percent").innerHTML = `${data.percent.toFixed(
  2
)}% (1d)`;

let difference = document.querySelector(".table").children[0].children[0];
for (let i = 1; i < difference.children.length; ++i) {
  difference.children[i].children[3].getAttribute("data-value").split(" ")[0] ==
  "+"
    ? (difference.children[i].children[3].style.color = "#5cf45c")
    : (difference.children[i].children[3].style.color = "#FF4646");
}

//await getBitcoinData();
// }, 126000);
