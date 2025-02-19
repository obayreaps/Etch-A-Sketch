const gridContainer = document.getElementById("grid-container");
const resetBtn = document.querySelector("#prompt");

function createGrid(size)
{
    
    gridContainer.style.width = `calc(100%/${size})`;
    gridContainer.style.height = `calc(100%/${size})`;

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

function getSize()
{
    let userPrompt = prompt("Enter grid size: ");
    return userPrompt;
}

function start() {

    size = 16;
    createGrid(16);

    resetBtn.addEventListener("click", () => {
        console.log("Prompt has been clicked. ");
        let size = parseInt(getSize());
        gridContainer.remove();
        createGrid(size);
    });
}


start();


