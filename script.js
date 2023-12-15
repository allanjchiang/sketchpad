const container = document.querySelector('.container');

const div1 = document.createElement('div');
div1.classList.add('div1');

container.appendChild(div1);

for(let i = 0; i <= 256; i++) {
    const div1 = document.createElement('div');
    div1.classList.add('div1');
    container.appendChild(div1);
}