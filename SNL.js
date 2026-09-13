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
        board.appendChild(cell);
    }
}