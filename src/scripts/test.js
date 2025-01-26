let id = 0;
setInterval(() => {
  console.log(id);
  id++;
  document.querySelector("h2").innerHTML = id;
}, 1000);
