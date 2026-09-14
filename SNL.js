const board = document.getElementById("board");
for(let row=9;row>=0;row--)
{
    for(let col=0;col<10;col++)
    {
        let number;
        if(row%2==0)
        {
            number = row * 10 + col + 1;
        }
        else
        {
            number = row * 10 + (10-col);
        }
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.textContent = number;
        if(number % 2 == 0)
        {
            cell.classList.add("blue");
        }
        else
        {
            cell.classList.add("yellow")
        }
        board.appendChild(cell);
    }
}

//Part - III Snakes & Ladders
const snakes = {
    99 : 6,
    70: 51,
    54: 48,
    47: 27,
    26: 5
};
const ladders = {
    4 : 25,
    13 : 46,
    21 : 42,
    50 : 69,
    62 : 81
};
const cells = document.querySelectorAll(".cell");
for(let cell of cells)
{
    let num = Number(cell.textContent);
    if(snakes[num])
    {
        cell.textContent = "🐍 " + num;
    }
    else if(ladders[num])
    {
        cell.textContent = "🪜 " + num;
    }
}