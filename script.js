const gridContainer = document.querySelector("#gridContainer");

function randomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
  let r = randomInt(255);
  let g = randomInt(255);
  let b = randomInt(255);
  return `rgb(${r}, ${g}, ${b})`;
} 

for (let i = 0; i < 16 ** 2; i++) {
  const initialGrid = document.createElement("div");
  initialGrid.id = "initialGrid";
  gridContainer.appendChild(initialGrid);

  initialGrid.addEventListener("mouseover", () => {
    initialGrid.style.backgroundColor = randomRgbColor();
  });
}

const btnDiv = document.createElement("div");
document.body.insertBefore(btnDiv, gridContainer);

const button = document.createElement("button");
button.textContent = "Start";
btnDiv.appendChild(button);

let breakElement = document.createElement("br");
document.body.insertBefore(breakElement, gridContainer);

button.addEventListener("click", () => {
  let gridNum = prompt("How many squares per side do you want for your grid?");
  if (gridNum === null) {
    alert("Canceled!");
  } else if (gridNum > 100) {
    alert("Too big!");
  } else if (gridNum < 16) {
    alert("Too small!");
  } else {
    button.textContent = "Restart";
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.firstChild);
    }

    const gridDiv = window.getComputedStyle(gridContainer);
    const squareSize = parseFloat(gridDiv.width) / gridNum;

    for (let i = 0; i < gridNum ** 2; i++) {
      const newGrid = document.createElement("div");
      newGrid.style.width = `${squareSize}px`;
      newGrid.style.height = `${squareSize}px`;
      
      gridContainer.appendChild(newGrid);
      newGrid.addEventListener("mouseover", () => {
        newGrid.style.backgroundColor = randomRgbColor();
      });
    }
  }
})