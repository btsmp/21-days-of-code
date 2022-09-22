const userKeyPress = document.querySelector(".keypress");
const boxKeyPress = document.querySelector(".box-keypress");
const easterEgg = document.querySelector(".easter-egg");
let points = 0;
window.addEventListener("keydown", (event) => {
  const keyName = event.key;
  const spanElement = document.createElement("span");

  spanElement.classList.add("keypress");
  spanElement.innerHTML = keyName;
  if (spanElement.textContent == " ") {
    spanElement.innerHTML = "Space";
  }
  boxKeyPress.append(spanElement);
  const allKeyPress = document.querySelectorAll(".keypress");

  if (allKeyPress.length == 8) {
    let points = 0;
    allKeyPress.forEach((keyPress, index) => {


      keyPress.remove();
    });

    if (points == 7) {
      points = 0;
    }
  }
  boxKeyPress.append(spanElement);
});