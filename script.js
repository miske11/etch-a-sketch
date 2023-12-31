const size = 480;

let gridExists = false;

const mainBody = document.querySelector('body');


const container = document.querySelector('.container');

const btnChangeDim = document.createElement('button');
btnChangeDim.textContent = "Change dimensions";
container.appendChild(btnChangeDim);



container.setAttribute('style', 'display: flex; flex-direction: column; gap: 18px; justify-content: center; align-items: center');

btnChangeDim.setAttribute('style', 'width: 90px;');

drawGrid();

btnChangeDim.addEventListener('click', () => {
    
    let dim = 0;

    while (true) {

        dim = prompt("Enter the size of your grid.");

        if (dim > 0 && dim <= 100) {
            break;
        }   

    }
    
    removeGrid();
    drawGrid(dim);
})


function drawGrid(dim = 32) {

    const grid = document.createElement('div');
    grid.setAttribute('class', 'grid');
    grid.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex-direction: column;'); 
    container.appendChild(grid);

    const fieldSize = (size / dim).toString();

    for (let i = 0; i < dim; ++i) {

        let row = document.createElement('div');
        row.setAttribute('style', 'display: flex; justify-content: center; align-items: center;')
        row.setAttribute('id', i);
        grid.appendChild(row);

        for (let j = 0; j < dim; ++j) {
            let field = document.createElement('div');
            field.setAttribute('style', `height: ${fieldSize}px; width: ${fieldSize}px; background-color: white;`);
            field.setAttribute('id', j);
            row.appendChild(field);

            field.addEventListener('mouseover', () => {
                field.style.backgroundColor = getRandomColor();
            })
        }
    }
}

function removeGrid() {
    const grid = document.querySelector('.grid');
    grid.remove();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }