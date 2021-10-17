const drawingBoard = document.querySelector(".canvas");
const currentColor = document.querySelector(".colorPicker");
const eraser = document.querySelector(".erase");
const reset = document.querySelector(".reset");
const draw = document.querySelector(".paint");
let paintOrErase = true;

function createBoard(drawingBoard) {
  for (let i = 0; i < 400; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    drawingBoard.appendChild(square);
  }
}
createBoard(drawingBoard);
draw.classList.add("buttonPressed");

const square = document.querySelectorAll(".square");

square.forEach((e) => {
  e.onclick = function () {
    if (paintOrErase) {
      e.style.backgroundColor = currentColor.value;
    } else {
      e.style.backgroundColor = "white";
    }
  };
});

reset.onclick = function () {
  square.forEach((e) => {
    e.style.backgroundColor = "white";
  });
};

eraser.onclick = function (e) {
  draw.classList.remove("buttonPressed");
  eraser.classList.add("buttonPressed");
  paintOrErase = false;
};

draw.onclick = function (e) {
  draw.classList.add("buttonPressed");
  eraser.classList.remove("buttonPressed");
  paintOrErase = true;
};
