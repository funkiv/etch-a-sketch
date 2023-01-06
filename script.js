//Grid creation
let notLocked = true;
let squareContainer = document.getElementById("square-container");
//container for individual squares instantiated
let squareArray = [];
//Creates individual square in array, assigns class, adds mouseover listener, and adds to DOM
function createSquare(gridDimensions) { 
    if (notLocked === true) {
        //Remove all prior squares if pertinent
        while (squareContainer.firstChild) {
            squareContainer.firstChild.remove()
        }
        //Loop for element creation
        for (let i = 0; i < Math.pow(gridDimensions, 2); i++) {
            //element creation
            squareArray[i] = document.createElement("div");
            //adds square class
            squareArray[i].classList.add("grid-square")
            //Adds event listener to all elements, mouseover activated class is added
            squareArray[i].addEventListener("mouseover", activateSquare);
            function activateSquare() {
                squareArray[i].classList.add("activated-grid-square");
            }
            //Add height & width style to each individual element
            let squareDimensions = 400 / gridDimensions;
            squareArray[i].style.height = `${squareDimensions}px`;
            squareArray[i].style.width = `${squareDimensions}px`;
            //add element to DOM
            squareContainer.appendChild(squareArray[i]);
        } 
    }
    let activateSquare = activateSquare;
}   

//Default dimensions and grid creation
let gridDimensions = 16;
createSquare(gridDimensions);
//User specified dimensions and grid creation  
let slider = document.getElementById("slider");
slider.oninput = () => {
    gridDimensions = slider.value; 
    createSquare(gridDimensions);
    
}

//Query buttons & Reset Grid button
let buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', () => {
    createSquare(gridDimensions);
});
//Save Drawing Button

function toggle() {
    notLocked = !notLocked;
    if(!notLocked) {
        // for (let i = 0; i < Math.pow(gridDimensions, 2); i++){
        //     squareArray[i].removeEventListener("mouseover", () => squareArray[i].classList.add("activated-grid-square"));
        // }
        buttons[1].innerText = "Unlock Drawing";
    } else {
        // for (let i = 0; i < Math.pow(gridDimensions, 2); i++){
        //    // squareArray[i].classList.add("activated-grid-square"));
        // }
        buttons[1].innerText = "Lock Drawing";    
    }
};

    