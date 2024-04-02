const GRIDSIZE = 600;
const rows = 16;
const cols = 16;


const pantalla = document.getElementById("pantalla");
pantalla.style.width = `${GRIDSIZE}px`;
pantalla.style.height = `${GRIDSIZE}px`;


for (let i = 0; i < (rows * cols); i++){
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    pixel.style.width =  `${(GRIDSIZE/cols) - 2}px`
    pixel.style.height = `${(GRIDSIZE/rows) - 2}px`;
    pantalla.appendChild(pixel);

    pixel.addEventListener("mouseover", changeBackgroundColor);


    const reset = document.querySelector(".reset");
    reset.addEventListener("click", () => {
        pixel.style.backgroundColor = "white";
    })

    
}



function changeBackgroundColor() {
    this.style.backgroundColor = "black"

}


