const container= document.querySelector('.container');
const btnColor= document.querySelector('.color');
const btnSize= document.querySelector('.size');
const btnReset= document.querySelector('.reset');

let value= 816;
let small=true;
for(let i=0; i<value; i++){

let box =document.createElement('div');
box.classList.add('box');
container.appendChild(box);
box.style.width= `20px`;
box.style.height= `20px`;

box.addEventListener('mouseover', function(){
    box.style.backgroundColor= `rgb(37, 37, 37)`;
})
btnReset.addEventListener('click', function(){
    box.style.backgroundColor= ``;
})
let black= true;
btnColor.addEventListener('click', function(){
    box.style.backgroundColor= ``;
    if (black){
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    black= false;
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor= (`rgb(${r}, ${g}, ${b}`);
    })} else if (!black){
        black= true;
        box.addEventListener('mouseover', function(){
            box.style.backgroundColor= `rgb(37, 37, 37)`;
        })}
    })
}  
function clearBoxes() {
    container.innerHTML = '';
}

btnSize.addEventListener('click', function(){
    clearBoxes();
    if(small){
        let value= 13056;
        small=false;

for(let i=0; i<value; i++){

let box =document.createElement('div');
box.classList.add('box');
container.appendChild(box);
box.style.width= `5px`;
box.style.height= `5px`;

box.addEventListener('mouseover', function(){
    btnReset.addEventListener('click', function(){
        box.style.backgroundColor= ``;
    })
    box.style.backgroundColor= `rgb(37, 37, 37)`;
})
let black= true;
btnColor.addEventListener('click', function(){
    box.style.backgroundColor= ``;
    if (black){
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    black= false;
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor= (`rgb(${r}, ${g}, ${b}`);
    })} else if (!black){
        black= true;
        box.addEventListener('mouseover', function(){
            box.style.backgroundColor= `rgb(37, 37, 37)`;
        })}
})
} 
}
    else if (!small){
        let value= 816;
        small=true;
for(let i=0; i<value; i++){

let box =document.createElement('div');
box.classList.add('box');
container.appendChild(box);
box.style.width= `20px`;
box.style.height= `20px`;

box.addEventListener('mouseover', function(){
    box.style.backgroundColor= `rgb(37, 37, 37)`;
})
let black= true;
btnColor.addEventListener('click', function(){
    box.style.backgroundColor= ``;
    if (black){
    let r= Math.floor(Math.random()*256);
    let g= Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    black= false;
    box.addEventListener('mouseover', function(){
        box.style.backgroundColor= (`rgb(${r}, ${g}, ${b}`);
    })} else if (!black){
        black= true;
        box.addEventListener('mouseover', function(){
            box.style.backgroundColor= `rgb(37, 37, 37)`;
        })}
    })
}  
    }
})
    