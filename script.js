document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    const changeSizeButton = document.getElementById('change-size');

    let gridSize = 16;

    createGrid(gridSize);

    changeSizeButton.addEventListener('click', function () {
        const newSize = prompt('Enter the new grid size:');
        if (newSize && !isNaN(newSize)) {
            gridSize = parseInt(newSize);
            createGrid(gridSize);
        }
    });

    function createGrid(size) {
        gridContainer.innerHTML = '';

        for(let i = 0; i <= size * size; i++) {
            const square = document.createElement('div');
            square.className = 'grid-item';
            square.textContent = i;
            gridContainer.appendChild(square);
        }
    }
})