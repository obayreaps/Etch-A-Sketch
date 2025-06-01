//add initial color 
//it changes when user selects different color
let color = "black";

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
function clearBoard()
{
    const squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
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
    if(color == "random")
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    else
        this.style.backgroundColor = color;
}

//changes the global variable color
function changeColor(choice)
{
    color = choice;
}
