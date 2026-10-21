async function getRegion() {
    const response = await fetch("pro4.json"); 
    regionData = await response.json(); 
    return regionData; 
}

const northButton = document.getElementById("northButton"); 
northButton.addEventListener("click", changeNorth); 

const southButton = document.getElementById("southButton"); 
southButton.addEventListener("click", changeSouth); 

const spButton1 = document.getElementById("button1")

function showNorth(regionData) {
    document.title = regionData.region.north.title; 
    document.getElementById("peli").hidden = true;
    document.getElementById("alli").hidden = false;  
    document.getElementById("h2").textContent = regionData.region.north.title; 
    document.getElementById("info").textContent = regionData.region.north.info; 
    document.getElementById("h3").hidden = true; 
    document.getElementById("buttons").style.display = "none"; 
    document.getElementById("spButtons").style.display = "block";
    document.getElementById("button1").textContent = regionData.region.north.species.aa.title; 
    document.getElementById("button2").textContent = regionData.region.north.species.wtd.title; 
    document.getElementById("button3").textContent = regionData.region.north.species.wbc.title;  
    document.getElementById("button4").textContent = regionData.region.north.species.ms.title; 
}

function showSouth(regionData) {
    document.title = regionData.region.south.title; 
    document.getElementById("peli").hidden = false;
    document.getElementById("alli").hidden = true; 
    document.getElementById("h2").textContent = regionData.region.south.title; 
    document.getElementById("info").textContent = regionData.region.south.info; 
    document.getElementById("h3").hidden = true; 
    document.getElementById("buttons").style.display = "none"; 
    document.getElementById("spButtons").style.display = "block";
    document.getElementById("button1").textContent = regionData.region.south.species.rs.title; 
    document.getElementById("button2").textContent = regionData.region.south.species.fhc.title; 
    document.getElementById("button3").textContent = regionData.region.south.species.rbw.title;  
    document.getElementById("button4").textContent = regionData.region.south.species.bs.title;  
}

async function changeNorth() {
    const regionData = await getRegion(); 
    if (regionData) {
        changeNorth(regionData);
    }
}

async function changeSouth() {
    const regionData = await getRegion(); 
    if (regionData) {
        changeSouth(regionData);
    }
}

