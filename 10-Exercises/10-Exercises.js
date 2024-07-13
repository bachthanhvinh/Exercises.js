function gamingbutton(Selector) {
  const gamingElement = document.querySelector(Selector);

  if (!gamingElement.classList.contains("is-toggled")) {
    turnOffbuttongaming();
    gamingElement.classList.add("is-toggled");
  } else {
    gamingElement.classList.remove("is-toggled");
  }
}
function turnOffbuttongaming() {
  const previousButton = document.querySelector(".is-toggled");

  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}
const addCartElement = document.querySelector(".add-cart");
console.log(addCartElement.classList.contains("add-cart1"));
