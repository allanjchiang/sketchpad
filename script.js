const size = document.querySelector('#size');
const container = document.querySelector('.container');

size.addEventListener('click', () => {
    let sizeTest = prompt("What size were you after?");
});


for(let i = 0; i <= sizeTest * sizeTest; i++) {
    const div1 = document.createElement('div');
    div1.classList.add('div1');
    container.appendChild(div1);
}

const divs = document.querySelectorAll('.div1');

divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = 'lightgreen';
    });

    div.addEventListener('mouseleave', () => {
        div.style.backgroundColor = 'white';
    });
});