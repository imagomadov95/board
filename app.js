const board = document.querySelector("#board");
const SQUARES_NUMBER = 700;

const arrayColor = [
  "#F08080",
  "#FF69B4",
  "#DC143C",
  "#7CFC00",
  "#00BFFF",
  "#9400D3",
  "#00FFFF",
];

for (let index = 0; index < SQUARES_NUMBER; index++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setColor(square);
  });
  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });
  board.append(square);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * arrayColor.length);
  return arrayColor[index];
}
