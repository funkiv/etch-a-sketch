//Grid creation
let squareContainer = document.getElementById("square-container");
//container for individual squares instantiated
let squareArray = [];
//Creates individual square in array, assigns class, adds mouseover listener, and adds to DOM
function createSquare(gridDimensions) { 
    //Remove all prior squares if pertinent
    while (squareContainer.firstChild) {
        squareContainer.firstChild.remove();
    }
    //Loop for element creation
    for (let i = 0; i < Math.pow(gridDimensions, 2); i++) {
    //element creation
    squareArray[i] = document.createElement("div");
    //adds square class
    squareArray[i].classList.add("grid-square")
    //Adds event listener to all elements, mouseover activated class is added
    squareArray[i].addEventListener("mouseover", () => squareArray[i].classList.add("activated-grid-square"));
    //Add height & width style to each individual element
    let squareDimensions = 400 / gridDimensions;
    squareArray[i].style.height = `${squareDimensions}px`;
    squareArray[i].style.width = `${squareDimensions}px`;
    //add element to DOM
    squareContainer.appendChild(squareArray[i]);
    } 
}
//Default dimensions and grid creation
let gridDimensions = 16;

//User specified dimensions and grid creation  
gridDimensions = prompt("Enter grid size: ")
createSquare(gridDimensions) 
    