/** Select all necessary elements from DOM */

const canvas = document.getElementById('canvas');
const toolbox = document.getElementById('toolbox');
const increaseBtn = document.getElementById('increase');
const sizeEl = document.getElementById('size');
const decreaseBtn = document.getElementById('decrease');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

const ctx = canvas.getContext('2d');
color.value = "black"; //set color by default to black

let size = 5;
let color = color.value;


let isPressed = false;
let x, y;
//Add event listener on mousedown
canvas.addEventListener('mousedown', (e)=>{
    isPressed = true;

    x = e.offsetX       //x and y coordinates of mouse
    x = e.offsetY
})

//Add event listener on mouseup
canvas.addEventListener('mouseup', (e)=>{       //when mouse is up, removed from canvas
    isPressed = false;                          //e = event

    x = undefined;
    y = undefined;  //since we are dragging mouse randomly, so "no" coordinates
})

//Add event listener on mousemove
canvas.addEventListener('mousemove', (e)=>{ 
    if (isPressed){
        x = e.offsetX;
        y = e.offsetY;
    }

});

//Define function to draw a circle
function circle(){
    circle.arc(180, 100, 90, 0, 2 * Math.PI);
      circle.stroke();
}
//Define function to draw line
function line(){
    ctx.lineWidth = 2;
      ctx.strokeStyle = "blue";
      var x1 = 50;
      var y1 = 50;
      var x2 = 350;
      var y2 = 350;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
}
//Define function to change size of element
function updateSizeOnScreen(){
    sizeEl.innerText = size;
}
//Add event listener on click to increase size
increase.addEventListener('change', ()=>{
    size += 5

    if(size > 50){
        size =50
    }
    updateSizeOnScreen()
})

//Add event listener on click to decrease size
decreaseBtn.addEventListener('change', ()=>{
    size +=5

    if(size > 50){
        size =50
    }
})
//Add event listener to change color
color.addEventListener('change', (e)=>{
    color = e.target.value
})

//Add event listener to clear the canvas
clearBtn.addEventListener('click', ()=>{
    ctx.clearRect(0, 0, x, y, canvas.weight, canvas.height)
})