const gridToggle = document.getElementById('gridBtn')
const sizeValue = document.getElementById('sizevalue');
let container = document.querySelector('.grid-panel');

function populateBoard(size) {
    let squares = container.querySelectorAll("div");
    // removes divs
    squares.forEach((div) => div.remove());
// allows grid to be set by 16 and so on
container.style.gridTemplateColumns = `repeat(${size} , 1fr)`; 
container.style.gridTemplateRows = `repeat(${size} , 1fr)`;


    // creates the grid 
    let amount = size * size;
    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.classList.add("border");
        container.appendChild(square);
        square.addEventListener("mouseover", printSquares);  
        container.insertAdjacentElement("beforeend", square); //function moves element in a specific spot
    }
}

populateBoard(16);

// changes the size of the grid 
function changeSize(input) {
    populateBoard(input);
    updateSizeValue(input);
}

//changes the input value on HTML
function updateSizeValue(input) {
    sizeValue.innerHTML = `Grid size: ${input} x ${input}`;
}

// colors the squares
function printSquares() {
    if (click) {
        if (color === "rainbow") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

// function resets the sketch
function resetSketch() {
    let container = document.querySelector('.grid-panel');
    let squares = container.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor = 'white');
}

// allows you change from color mode to not color mode  
let click = true;
document.querySelector('body'),addEventListener("click", () => {
    click = !click;
});

//default color of ink is black
let color = "black";

//color picker 
const colorPicker = document.getElementById('select-color')
colorPicker.addEventListener('input', (e) => {
    color = e.target.value;
});

//changes the color from the buttons on the HTML 
function changeColor(choice) {
    color = choice; 
}

//grid toggle switch
gridToggle.addEventListener("click", () => {
    let children = container.children;
    for (var i = 0; i < children.length; i++) {
        if (children[i].classList.contains("border")) {
            children[i].classList.remove("border");
        } else {
            children[i].classList.add("border");
        }
    }
});

console.log(gridToggle);