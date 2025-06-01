//add initial color
let color = "black";

function createBoard(size)
{
    const board = document.querySelector(".board");

    //Reset board when changing sizes
    const squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    //Reset board button
    const reset = document.querySelector("#reset");
    reset.addEventListener("mousedown", clearBoard);

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

function colorSquare()
{
    this.style.backgroundColor = color;
}


function changeColor(choice)
{
    color = choice;
}
