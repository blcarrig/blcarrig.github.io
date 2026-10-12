async function getboardingData() {
    const response = await fetch("boardingData.json"); 
    boardingData = await response.json(); 
    return boardingData; 
}

function changeText(altText) {
    document.title = altText.title; 
    const overviewCards = document.querySelectorAll("#sec1Grid.card"); 
    const equipCards = document.querySelectorAll("#sec2Grid.card"); 
    document.getElementById("styleName").textContent = altText.header; 
    document.getElementById("heroTitle").textContent = altText.hero.headline;
    document.getElementById("heroDesc").textContent = altText.hero.discription;
    document.getElementById("sec1Title").textContent = altText.sections.overview.title; 
    document.getElementById("sec1Subtitle").textContent = altText.sections.overview.subtitle;
    document.getElementById("sec2Title").textContent = altText.sections.equipment.title;
    document.getElementById("sec2Subtitle").textContent = altText.sections.equipment.subtitle;
    altText.sections.overview.cards.array.forEach((card, index) => {
        overviewCards[index].querySelector("h3").textContent = card.title; 
        overviewCards[index].querySelector("p").textContent = card.description; 
    });
    altText.sections.equipment.cards.array.forEach((card, index) => {
        equipCards[index].querySelector("h3").textContent = card.title; 
        equipCards[index].querySelector("p").textContent = card.description; 
    });
}

function changeImg(altText) {
    document.documentElement.style.setProperty("--hero-img", `url("${altText.hero.image}")`);
}

async function init() {
    const altText = await getboardingData(); 

    if (altText) {
        changeText(altText); 
        changeImg(altText); 
    }
}

document.getElementById("changeThemeBtn").addEventListener("click", init())
