const pantalla = document.getElementById("pantalla")
for (let i = 0; i <= 16; i++){
    for (let j = 0; j <= 16; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = "8px"; // Set the width
        square.style.height = "8px"; // Set the height
        square.style.backgroundColor = "white"; // Set the background color
        square.style.border = "1px solid black"; 
        pantalla.appendChild(square);

    }
}