async function getboardingData() {
    const response = await fetch("boardingData.json"); 
    boardingData = await response.json(); 
    return boardingData; 
}

function changeText(boardingData) {
    document.title = boardingData.title; 
    const overviewCards = document.querySelectorAll("#sec1Grid.card"); 
    const equipCards = document.querySelectorAll("#sec2Grid.card"); 
    document.getElementById("styleName").textContent = boardingData.header; 
    document.getElementById("heroTitle").textContent = boardingData.hero.headline;
    document.getElementById("heroDesc").textContent = boardingData.hero.discription;
    document.getElementById("sec1Title").textContent = boardingData.sections.overview.title; 
    document.getElementById("sec1Subtitle").textContent = boardingData.sections.overview.subtitle;
    document.getElementById("sec2Title").textContent = boardingData.sections.equipment.title;
    document.getElementById("sec2Subtitle").textContent = boardingData.sections.equipment.subtitle;
    boardingData.sections.overview.cards.array.forEach((card, index) => {
        overviewCards[index].querySelector("h3").textContent = card.title; 
        overviewCards[index].querySelector("p").textContent = card.description; 
    });
    boardingData.sections.equipment.cards.array.forEach((card, index) => {
        equipCards[index].querySelector("h3").textContent = card.title; 
        equipCards[index].querySelector("p").textContent = card.description; 
    });
}

function changeImg(boardingData) {
    document.documentElement.style.setProperty("--hero-img", `url("${boardingData.hero.image}")`);
}

async function init() {
    const boardingData = await getboardingData(); 

    if (boardingData) {
        changeText(boardingData); 
        changeImg(boardingData); 
    }
}

document.getElementById("changeThemeBtn").addEventListener("click", init); 
