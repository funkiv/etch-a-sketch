//Lock drawing lock
let notLocked = true;
//Grid creation
let squareContainer = document.getElementById("square-container");
//container for individual squares instantiated
let squareArray = [];
//Creates individual square in array, assigns class, adds listener, sizes, then adds to DOM
function createSquare(gridDimensions) { 
    //Halts function call if lock drawing is enabled
    if (notLocked === true) {
        //Remove all prior squares if pertinent
        while (squareContainer.firstChild) {
            squareContainer.firstChild.remove()
        }
        //Loop for element creation
        for (let i = 0; i < Math.pow(gridDimensions, 2); i++) {
            //element creation
            squareArray[i] = document.createElement("div");
            //Adds square class
            squareArray[i].classList.add("grid-square");
            //Adds activation event listener
            squareArray[i].addEventListener("mouseover", () => {squareArray[i].classList.add("activated-grid-square")});
            //Size each square
            let squareDimensions = 400 / gridDimensions;
            squareArray[i].style.height = `${squareDimensions}px`;
            squareArray[i].style.width = `${squareDimensions}px`;
            //Add square to DOM
            squareContainer.appendChild(squareArray[i]);
        }
        
    }
}   


//Default grid creation
let gridDimensions = 16;
createSquare(gridDimensions);
//Slider grid creation 
let slider = document.getElementById("slider");
slider.oninput = () => {
    gridDimensions = slider.value; 
    createSquare(gridDimensions);   
}

//Query buttons list
let buttons = document.querySelectorAll('button');
//Reset current grid button
buttons[0].addEventListener('click', () => {
    createSquare(gridDimensions);
});
//Toggle input button
function toggle() {
    notLocked = !notLocked;
    if(!notLocked) {
        squareContainer.style.pointerEvents = "none"
        buttons[1].innerText = "Unlock Drawing";
    } else {
        squareContainer.style.pointerEvents = "auto"
        buttons[1].innerText = "Lock Drawing";    
    }
};

    