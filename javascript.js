const container = document.querySelector(".container");

function createGrid (number){
    for(let j = 0; j < number; j++){
        const divRow = document.createElement("div");
        divRow.className = "divRow";
        for(let i = 0; i < number; i++){
                const div = document.createElement("div");
                /*div.textContent = "Hi";*/
                div.className = "square";
                let squareSize = (960 / number).toFixed(5);
                console.log(squareSize);
                squareSize = squareSize + "px";
                div.style.height= squareSize;
                div.style.width= squareSize;
                divRow.appendChild(div);
        }
        container.appendChild(divRow);
    }
}

function hover(){
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square) => {

        square.addEventListener("mouseover", () =>{
            square.style.backgroundColor = "blue";
        });
    });
}


createGrid(16);
hover();

const button = document.createElement("button");
button.textContent = "Choose a ? x ? Grid";
document.body.prepend(button);

button.addEventListener("click", () => {
    let response = prompt("Type a number for a grid width and height (Type the number)", "");
    let number = Number(response);
    while(number > 100 || number < 0 || isNaN(number) || Number.isInteger(number) == false){
        response = prompt("Choice invalid! Input must be a valid integer between 1-100 (Type the number)", "");
        console.log(response);
        number = Number(response);
    }
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach((square) => {
        square.remove();
    });
    createGrid(number);
    hover();
});

/*Next Job Same width and height for container  */



