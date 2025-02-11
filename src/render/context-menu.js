document.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  console.log(event.pageX);
  console.log(event.pageY);
});
