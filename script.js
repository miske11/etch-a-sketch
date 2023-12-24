

const grid = document.querySelector('.body');
grid.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 1px;');


for (let i = 0; i < 16; ++i) {

    let row = document.createElement('div');
    row.setAttribute('style', 'display: flex; justify-content: center; align-items: center; gap: 1px;')
    row.setAttribute('id', i);
    grid.appendChild(row);

    for (let j = 0; j < 16; ++j) {
        let field = document.createElement('div');
        field.setAttribute('style', 'height: 16px; width: 16px; background-color: grey;');
        field.setAttribute('id', j);
        row.appendChild(field);
        
        field.addEventListener('mouseover', () => {
            field.style.backgroundColor = "yellow";
        })
    }
}