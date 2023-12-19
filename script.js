const promptTest = document.querySelector('.prompt');
const container = document.querySelector('.container');

promptTest.addEventListener('click', () => {
    let prompt = prompt("What size were you after?");
});


for(let i = 0; i <= 256; i++) {
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
        div.style.backgroundColor = 'black';
    });
});