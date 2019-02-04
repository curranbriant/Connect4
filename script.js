/*const cells = document.querySelectorAll('.cell')
const reset = document.querySelector('.reset')

let currentPlayer = 1;



for (i = 0; i < cells.length; i++){

cells[i].addEventListener("click", function(evt){
console.log(this)

if (currentPlayer === 1){
    evt.target.style.backgroundColor = "red"; //this.style.backgroundColor = "red"; both of these work 
    currentPlayer = 2;
}else {
    evt.target.style.backgroundColor = "green";
    currentPlayer = 1;
}
evt.target.style.pointerEvents = "none"; //
});
}
//when reset button is hit, cells should reset background color to white


reset.addEventListener("click", function(evt){
    evt.preventDefault();
    for (let i = 0; i < cells.length; i++) {
    const element = cells[i];
        element.style.backgroundColor = "white";

        element.style.pointerEvents = "auto";
    }
});

//refactor to use event propagation 


grid.addEventListener('click', function(evt){
     for (let i = 0; i < cells.length; i++) {
        const grid2 = document.querySelector('.grid2');
        //grid2.style.backgroundColor = "blue";
        if (currentPlayer === 1){
            grid2.style.backgroundColor = "red"; //this.style.backgroundColor = "red"; both of these work 
            currentPlayer = 2;
        }else {
            grid2.style.backgroundColor = "green";
            currentPlayer = 1;

        }
    }
})
*/

var column1 = document.querySelector('.column1')
var column2 = document.querySelector('.column2')
const cells = document.querySelectorAll('.cell')
const columnOne = [];



column1.addEventListener('click', function(evt){
    columnOne.push("red");
    console.log(columnOne)
    

}
)
/*
let currentPlayer = 1;



for (i = 3; i > cells.length; i++){

cells[i].addEventListener("click", function(evt){
console.log(this)

if (currentPlayer === 1){
    evt.target.style.backgroundColor = "red"; //this.style.backgroundColor = "red"; both of these work 
    currentPlayer = 2;
}else {
    evt.target.style.backgroundColor = "green";
    currentPlayer = 1;
}
evt.target.style.pointerEvents = "none"; //
});
}
*/