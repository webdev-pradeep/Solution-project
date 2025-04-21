const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  //   console.log(button);
  button.addEventListener("click", (event) => {
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === "white") {
      body.style.background = "white";
      body.style.color = "grey";
    }
    if (event.target.id === "grey") {
      body.style.background = "grey";
      body.style.color = "white";
    }
    if (event.target.id === "yellow") {
      body.style.background = "yellow";
      body.style.color = "blue";
    }
    if (event.target.id === "blue") {
      body.style.background = "blue";
      body.style.color = "yellow";
    }
  });
});
