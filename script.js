const container = document.querySelector('.container');
const btnColor = document.querySelector('.color');
const btnSize = document.querySelector('.size');
const btnReset = document.querySelector('.reset');

let small = true;
let isBlack = true;

function createGrid(size, boxSize) {
    clearBoxes();
    for (let i = 0; i < size; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        container.appendChild(box);

        box.addEventListener('mouseover', () => {
            box.style.backgroundColor = isBlack ? 'rgb(37, 37, 37)' : getRandomColor();
        });
    }
}

function clearColors() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.backgroundColor = '');
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function clearBoxes() {
    container.innerHTML = '';
}

btnColor.addEventListener('click', () => {
    isBlack = !isBlack;
    clearColors(); 
});

btnReset.addEventListener('click', () => {
    clearColors();
});

btnSize.addEventListener('click', () => {
    if (small) {
        createGrid(13056, 5);  
    } else {
        createGrid(816, 20);   
    }
    small = !small;
});

createGrid(816, 20);
