const box = document.createElement("div")
box.classList.add("box")
document.body.appendChild(box)

for (i = 0; i < 16; i++){
    
    let tile = document.createElement("div")
    tile.classList.add("tile")
    box.appendChild(tile)

}

