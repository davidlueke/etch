function getWidth (){
    let result = 100/pixel;
    return `${result}%`;
};

function createTiles(){

    for (i = 0; i < (pixel*pixel); i++){
        
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.minHeight = getWidth();
        tile.style.minWidth = getWidth();
        tile.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "#1F2937"
        })
        box.appendChild(tile);
    }
};

let pixel = 32;
const box = document.querySelector(".box");

createTiles();
