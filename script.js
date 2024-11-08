const gridContainer = document.querySelector("#gridContainer");

for (let i = 0; i < 16 ** 2; i++) {
  const initialGrid = document.createElement("div");
  // initialGrid.classList.add("grid");
  initialGrid.id = "initialGrid";
  gridContainer.appendChild(initialGrid);

  initialGrid.addEventListener("mouseover", () => {
    initialGrid.style.backgroundColor = "dodgerblue";
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
      // newGrid.classList.add("grid");
      newGrid.style.width = `${squareSize}px`;
      newGrid.style.height = `${squareSize}px`;
      
      gridContainer.appendChild(newGrid);
      newGrid.addEventListener("mouseover", () => {
        newGrid.style.backgroundColor = "dodgerblue";
      });
    }
  }
})