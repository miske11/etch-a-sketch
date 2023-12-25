const size = 480;

const grid = document.querySelector('.grid');
grid.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex-direction: column;'); 


const container = document.querySelector('.container');

const btnChangeDim = document.createElement('button');
btnChangeDim.textContent = "Change dimensions";
container.appendChild(btnChangeDim);


container.setAttribute('style', 'display: flex; flex-direction: column; gap: 18px; justify-content: center; align-items: center');

btnChangeDim.setAttribute('style', 'width: 90px;');

drawGrid();

btnChangeDim.addEventListener('click', () => {
    let dim = prompt("Enter the size of your grid.");
    removeRows();
    drawGrid(dim);
})


function drawGrid(dim = 32) {


    const fieldSize = (size / dim).toString();

    for (let i = 0; i < dim; ++i) {

        let row = document.createElement('div');
        row.setAttribute('style', 'display: flex; justify-content: center; align-items: center;')
        row.setAttribute('id', i);
        grid.appendChild(row);

        for (let j = 0; j < dim; ++j) {
            let field = document.createElement('div');
            field.setAttribute('style', `height: ${fieldSize}px; width: ${fieldSize}px; background-color: grey;`);
            field.setAttribute('id', j);
            row.appendChild(field);

            field.addEventListener('mouseover', () => {
                field.style.backgroundColor = "yellow";
            })
        }
    }
}

function removeRows(dim = 32) {
    for (let i = 0; i < dim; ++i) {
        let id = i.toString();
        let row = document.querySelector('#'+ id);
        grid.removeChild(row);
    }
}
