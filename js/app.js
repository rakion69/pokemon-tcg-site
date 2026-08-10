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

        cardElement.innerHTML = `
            <img src="${card.image}/high.webp" alt="${card.name}">
            <h3>${card.name}</h3>
        `;

        container.appendChild(cardElement);
    }
}

loadCards(staples, "staple-cards");