const container = document.querySelector('.container');
const divs = document.querySelectorAll('div');

divs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor('white');
    });
});

for(let i = 0; i <= 256; i++) {
    const div1 = document.createElement('div');
    div1.classList.add('div1');
    container.appendChild(div1);
}