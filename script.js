const drawingBoard = document.querySelector(".canvas");

function createBoard(drawingBoard) {
  for (let i = 0; i < 400; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    drawingBoard.appendChild(square);
  }
}

createBoard(drawingBoard);
