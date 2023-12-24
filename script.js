const grid = document.querySelector('.body');
grid.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex-direction: column;');



for (let i = 0; i < 16; ++i) {

    let row = document.createElement('div');
    row.setAttribute('style', 'display: flex; justify-content: center; align-items: center; gap: 8px;')
    grid.appendChild(row);

    for (let j = 0; j < 16; ++j) {
        let field = document.createElement('div');
        field.textContent = "#";
        row.appendChild(field);
    }
}