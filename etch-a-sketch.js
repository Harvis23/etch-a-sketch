const GRIDSIZE = 600;
const pantalla = document.getElementById("pantalla");
pantalla.style.width = `${GRIDSIZE}px` 
pantalla.style.height = `${GRIDSIZE}px`;
let squarePerSide = 0;

document.querySelector("#tamanho").addEventListener("click", sizeSelection);

function sizeSelection() {
    squarePerSide = prompt("Select number of squares per side: ");
    if (squarePerSide > 100) {
        alert("Select between 0 and 100 please");
        return;
    }
    updateGrid();

}

function updateGrid() {
    const resolution = (squarePerSide * squarePerSide);
    const widthAndHeigth = `${(GRIDSIZE / squarePerSide) - 2}px`;

    while (pantalla.firstChild) {
        pantalla.removeChild(pantalla.firstChild);
    }

    for (let i = 0; i < resolution; i++){


        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.style.width =  `${widthAndHeigth}`
        pixel.style.height = `${widthAndHeigth}`;
        pantalla.appendChild(pixel);
    
        pixel.addEventListener("mouseover", changeBackgroundColor);
    
    
        const reset = document.querySelector(".reset");
        reset.addEventListener("click", () => {
            pixel.style.backgroundColor = "white";
        })
    
    
    }

}



function changeBackgroundColor() {
    this.style.backgroundColor = RGBColor();

}


function RGBColor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
}
