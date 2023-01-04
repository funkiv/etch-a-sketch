//Grid creation
let squareContainer = document.getElementById("square-container");
//container for individual squares instantiated
let squareArray = {};
//Creates individual square in array, assigns class, adds mouseover listener, and adds to DOM
function createSquare(i) { 
    //element creation
    squareArray[i] = document.createElement("div");
    //adds square class
    squareArray[i].classList.add("grid-square")
    //Adds event listener to all elements, mouseover activated class is added
    squareArray[i].addEventListener("mouseover", () => squareArray[i].classList.add("activated-grid-square"));
    //add element to DOM
    squareContainer.appendChild(squareArray[i]);
}
//Index and function call for all 256 square creation
for (let i = 0; i < 256; i++) {
    createSquare(i);
}
//event listener for hover
