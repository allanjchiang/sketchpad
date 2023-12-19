const prompt = document.querySelector('.prompt');
const container = document.querySelector('.container');

prompt.addEventListener('click', () => {
    prompt("Enter the preferred size of your grid.");
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