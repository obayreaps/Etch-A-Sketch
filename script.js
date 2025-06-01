//add initial color 
//it changes when user selects different color
let color = "black";
let click = false;

function createBoard(size)
{
    const board = document.querySelector(".board");

    //Reset board when changing sizes
    const squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    let totalSquares = size * size;
    for(let i = 0; i < totalSquares; i++)
    {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

//Start program
createBoard(16);




//Other functions
function resetBoard()
{
    const board = document.querySelector(".board");
    const squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = "white");
}

function changeSize(input)
{
    if(input >= 2 && input <= 100)
        createBoard(input);
    else{
        console.log("Too small or too large board");
    }
}

//colors whenever mouse hovers over board square
function colorSquare()
{
    if(click)
    {
        if(color === "random")
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        else
            this.style.backgroundColor = color; 
    }
     
}

//changes the global variable color
function changeColor(choice)
{
    color = choice;
}

//Functionality for click
document.querySelector("body").addEventListener("click", (e)=> {
    if(e.target.tagName != 'BUTTON')
    {
        click = !click;
        let colorMode = document.querySelector("#color-mode");
        if(click)
        {
            colorMode.textContent = "Color-Mode: True";
        }
        else
            colorMode.textContent = "Color-Mode: False";
    }
});