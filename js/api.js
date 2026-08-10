const tcgdex = new TCGdex("en");

async function getCard(cardId) {
    try {
        const card = await tcgdex.card.get(cardId);
        return card;
    } catch (error) {
        console.error(`Errore caricando ${cardId}:`, error);
        return null;
    }
} // <-- Added missing closing brace here

async function loadCards(cardIds, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container ${containerId} non trovato.`);
        return;
    }

    for (const cardId of cardIds) {
        const card = await getCard(cardId);

        if (!card) {
            continue;
        }

        const cardElement = document.createElement("div");
        cardElement.className = "pokemon-card";

        const imageUrl = card.getImageURL("high", "png");

        cardElement.innerHTML = `
            <img src="${imageUrl}" alt="${card.name}">
            <h3>${card.name}</h3>
        `;

        container.appendChild(cardElement);
    }
}

loadCards(staples, "staple-cards");
// Removed dangling closing brace from here