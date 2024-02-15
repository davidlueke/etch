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
        box.appendChild(tile);
    }
};

let pixel = 16;
const box = document.querySelector(".box");

createTiles();
