const gridContainer = document.querySelector("#gridContainer");

const btnContainer = document.createElement("div");
btnContainer.classList.add("btnContainer");
document.body.insertBefore(btnContainer, gridContainer);

const startBtn = document.createElement("button");
startBtn.textContent = "Start";
btnContainer.appendChild(startBtn);

function randomRgbColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)})`;
} 

for (let i = 0; i < 16 ** 2; i++) {
  const initialGrid = document.createElement("div");
  initialGrid.classList.add("initialGrid");
  gridContainer.appendChild(initialGrid);

  initialGrid.addEventListener("mouseover", () => {
    initialGrid.style.backgroundColor = randomRgbColor();
  });
}

startBtn.addEventListener("click", () => {
    let gridNum = prompt("How many squares per side do you want for your grid?");
    if (gridNum === null) {
      alert("Canceled!");
    } else if (gridNum < 16 || gridNum > 100) {
      alert("Too big!");
    } else if (gridNum < 16) {
      alert("Too small!");
    } else {
      startBtn.textContent = "Restart";
      gridContainer.innerHTML = "";

      const gridDiv = window.getComputedStyle(gridContainer);
      const squareSize = parseFloat(gridDiv.width) / gridNum;

    for (let i = 0; i < gridNum ** 2; i++) {
      const newGrid = document.createElement("div");
      newGrid.style.width = `${squareSize}px`;
      newGrid.style.height = `${squareSize}px`;
      gridContainer.appendChild(newGrid);
      newGrid.addEventListener("mouseover", () => {
        newGrid.style.backgroundColor = "black";
        let opacity = parseFloat(newGrid.style.opacity) || 0.1;
        newGrid.style.opacity = Math.min(opacity + 0.1, 1);
      });
    };
  }
});