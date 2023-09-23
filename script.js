const btn = document.querySelector(".btn");
const divContainer = document.querySelector(".div-container");
let numTiles = 16;

const loadGrid = () => {
  const containerSize = 450;
  const totalBoxes = numTiles * numTiles;
  const boxSize = containerSize / numTiles;

  for (i = 0; i < totalBoxes; i++) {
    const divEl = document.createElement("div");
    divEl.classList.add("div");
    divEl.style.width = boxSize - 1 + "px";
    divEl.style.height = boxSize - 1 + "px";
    divContainer.appendChild(divEl);
    divEl.addEventListener("mouseover", () => {
      divEl.classList.add("div_active");
    });
  }
};

const init = () => {
  loadGrid();
};
init();

const removeTiles = () => {
  divContainer.innerHTML = "";
};

btn.addEventListener("click", () => {
  numTiles = Number(prompt("How many tiles do you want?"));
  if (numTiles > 100) {
    numTiles = 100;
  }
  removeTiles();
  loadGrid();
});
