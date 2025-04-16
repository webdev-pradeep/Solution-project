const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === "white") {
      body.style.background = "white";
    }
    if (event.target.id === "grey") {
      body.style.background = "grey";
    }
    if (event.target.id === "yellow") {
      body.style.background = "yellow";
    }
    if (event.target.id === "blue") {
      body.style.background = "blue";
    }
  });
});
