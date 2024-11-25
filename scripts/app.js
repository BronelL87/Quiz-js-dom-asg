
let boxNumber = document.getElementById("boxNumber");
let changeColor = document.getElementById("changeColor");

let changeBtn = document.getElementById("changeBtn");
let resetBtn = document.getElementById("resetBtn");

const colorOptions = ["red", "blue", "purple", "brown", "yellow"];




changeBtn.addEventListener("click", function () {
    changeBox();
});

function changeBox() {
    let boxNum = boxNumber.value;
    let bgColor = changeColor.value.toLowerCase();


    let boxInpt = document.getElementById(`box${boxNum}`);


    if (boxInpt && colorOptions.includes(bgColor)) {
        boxInpt.style.backgroundColor = bgColor;
    }

}


resetBtn.addEventListener("click", function () {
    resetBoxes();
});

function resetBoxes() {

    for(let i = 1; i <= 8; i++){
        let boxInpt = document.getElementById(`box${i}`)   
        boxInpt.style.backgroundColor = "";    
    }
       
}