import { getBitcoinData } from "../opertatos/get-bitcoin-data.js";

export const loadTable = async () => {
  const data = await getBitcoinData();

  document.body.style.backgroundColor =
    data.percent < 0 ? "#662929" : "#1D2F78";
  document.getElementById("title").style.color =
    data.percent < 0 ? "#FF4646" : "#5cf45c";
  document.getElementById("base").innerHTML = `$ ${data.base.toLocaleString(
    "en-US",
    {
      currency: "USD",
    }
  )}`;

  document.getElementById(
    "current"
  ).innerHTML = `$${data.current.toLocaleString("en-US", {
    currency: "USD",
  })}`;

  document
    .getElementById("arrow")
    .setAttribute(
      "transform",
      data.percent < 0
        ? "matrix(1, 0, 0, -1, 0, 0)"
        : "matrix(1, 0, 0, 1, 0, 0)"
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

  Array.from(document.querySelectorAll("tr"))
    .slice(1)
    .forEach((element) => element.remove());

  let difference = document.querySelector(".table").children[0].children[0];
  data.points.forEach((item) => {
    let tr = document.createElement("tr");
    for (
      let i = 0;
      i < document.querySelectorAll("tr")[0].children.length;
      i++
    ) {
      let td = document.createElement("td");
      td.innerHTML = (() => {
        let key = Object.keys(item)[i];

        let value =
          key !== "difference"
            ? item[key] ?? item.difference.base.toFixed(2)
            : item.difference.last.toFixed(2);
        td.style.color =
          (key === "difference" || key === undefined) &&
          (td.style.color = Number(value) < 1 ? "#FF4646" : "#5cf45c");

        return !isNaN(value)
          ? `$ ${Number(value).toLocaleString("en-US", {
              currency: "usd",
            })}`
          : value;
      })();
      tr.appendChild(td);
    }

    difference.appendChild(tr);
  });
};
