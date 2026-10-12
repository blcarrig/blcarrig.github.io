async function getboardingData() {
    const response = await fetch("boardingData.json"); 
    boardingData = await response.json(); 
    return boardingData; 
}

function changeText(altText) {
    document.title = altText.title; 
    const equipmentCards = altText.sections.equipment.cards;
    const overviewCards = altText.sections.overview.cards;
    document.getElementById("header").textContent = altText.header; 
    document.getElementById("hero-headline").textContent = altText.hero.headline;
    document.getElementById("hero-description").textContent = altText.hero.discription;
    document.getElementById("overview-title").textContent = altText.sections.overview.title; 
    document.getElementById("overview-subtitle").textContent = altText.sections.overview.subtitle;
    document.getElementById("equipment-title").textContent = altText.sections.equipment.title;
    document.getElementById("equipment-subtitle").textContent = altText.sections.equipment.subtitle;
    document.getElementById("overview-card-1-title").textContent = overviewCards[0].title;
    document.getElementById("overview-card-1-description").textContent = overviewCards[0].description;
    document.getElementById("overview-card-2-title").textContent = overviewCards[1].title;
    document.getElementById("overview-card-2-description").textContent = overviewCards[1].description;
    document.getElementById("overview-card-3-title").textContent = overviewCards[2].title;
    document.getElementById("overview-card-3-description").textContent = overviewCards[2].description;
    document.getElementById("equipment-card-1-title").textContent = equipmentCards[0].title;
    document.getElementById("equipment-card-1-description").textContent = equipmentCards[0].description;
    document.getElementById("equipment-card-2-title").textContent = equipmentCards[1].title;
    document.getElementById("equipment-card-2-description").textContent = equipmentCards[1].description;
    document.getElementById("equipment-card-3-title").textContent = equipmentCards[2].title; 
    document.getElementById("equipment-card-3-description").textContent = equipmentCards[2].description;
}

function changeImg(altText) {
    document.documentElement.style.setProperty("--hero-img", `url("${text.hero.image}")`);
}

async function init() {
    const altText = await getboardingData(); 

    if (altText) {
        changeText(altText); 
        changeImg(altText); 
    }
}

document.getElementById("changeThemeBtn").addEventListener("click", init())
