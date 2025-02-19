const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector("#reset");

function createGrid(size)
{
    for(let i = 0; i < size * size; i++)
    {
        const grid = document.createElement("div");
        grid.classList.add("grid-style");
        gridContainer.appendChild(grid);

        grid.addEventListener("mouseover", () => {
            grid.classList.add("hover");
        });
    }
}

function start() {
    createGrid(16);
    
    resetBtn.addEventListener("click", () => {
        resetGrid();
    });

}

function resetGrid(){
    grid.classList.add("reset-board");
}

start();


