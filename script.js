function createTiles(length){

    function getWidth (length){
        let result = 100/length;
        return `${result}%`;
    };

    pixel.oninput = () => {
        let value = pixel.value;
        pixelInfo.textContent = value;
        document.querySelectorAll(".tile").forEach(el => el.remove());
        createTiles(value);
    }

    for (i = 0; i < (length*length); i++){
        
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.style.minHeight = getWidth(length);
        tile.style.minWidth = getWidth(length);
        tile.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "#1F2937"
        })
        box.appendChild(tile);
    }
};


const pixelInfo = document.querySelector(".pixelInfo")
const pixel = document.querySelector("#size");
const box = document.querySelector(".box");

createTiles(pixel.value);
