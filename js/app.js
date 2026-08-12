async function loadCards(cards, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    for (const cardInfo of cards) {
        // Genera l'ID TCGdex al volo (es. "ASC-142" -> "me2.5-142")
        const tcgdexId = getTcgdexId(cardInfo);

        if (!tcgdexId) continue;

        const card = await getCard(tcgdexId);
        if (!card) continue;

        const cardElement = document.createElement("div");
        cardElement.className = "pokemon-card";

        const imageUrl = typeof card.getImageURL === "function" 
            ? card.getImageURL("high", "png") 
            : card.getImageUrl("high", "png");

        cardElement.innerHTML = `
            <img src="${imageUrl}" alt="${card.name}">
            <h3>${card.name}</h3>
        `;

        container.appendChild(cardElement);
    }
}

loadCards(staples, "staple-cards");
loadCards(useful, "useful-cards")