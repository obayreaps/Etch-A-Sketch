function createBoard(size)
{
    const board = document.querySelector(".board");

    //Reset board when changing sizes
    const squares = document.querySelectorAll("divs");
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows= `repeat(${size}, 1fr)`;

    let totalSquares = size * size;
    for(let i = 0; i < totalSquares; i++)
    {
        let square = document.createElement("div");
        square.addEventListener("mouseover", ()=> {
            square.style.backgroundColor = "black";
        });
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(input)
{
    if(input >= 2 && input <= 100)
        createBoard(input);
    else{
        console.log("Too small or too large board");
    }
}

createBoard(16);