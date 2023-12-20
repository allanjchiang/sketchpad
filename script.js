document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('grid-container');
    const changeSizeButton = document.getElementById('change-size');

    let gridSize = 16;

    createGrid(gridSize);

    changeSizeButton.addEventListener('click', function () {
        const newSize = prompt('Enter the new grid size:');
        if (newSize && !isNaN(newSize)) {
            gridSize = Math.min(Math.max(parseInt(newSize), 1), 100);
            createGrid(gridSize);
        }
    });

    function createGrid(size) {
        gridContainer.innerHTML = '';

        for(let i = 0; i <= size * size; i++) {
            const square = document.createElement('div');
            square.className = 'grid-item';
            square.textContent = i;
            square.style.height = `calc(100% / ${size} - 4px)`
            gridContainer.appendChild(square);
        }
    }
})