const northButton = document.getElementById("northButton"); 
northButton.addEventListener("click", showNorth(north)); 

const southButton = document.getElementById("southButton"); 
southButton.addEventListener("click", showSouth(south)); 

async function getRegion() {
    const response = await fetch("pro4.json"); 
    region = await response.json(); 
    return region; 
}

function showNorth(region) {
    document.title = region.north.title; 
    document.getElementById("peli").hidden = true;
    document.getElementById("alli").hidden = false;  

}

function showSouth(region) {
    document.title = region.south.title; 
    document.getElementById("peli").hidden = false;
    document.getElementById("alli").hidden = true; 
}
