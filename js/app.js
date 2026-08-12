async function loadCards(cards, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.error(`Container ${containerId} non trovato.`);
        return;
    }

    for (const cardInfo of cards) {

        const tcgdexId = getTcgdexId(cardInfo);

        if (!tcgdexId) {
            continue;
        }

        const card = await getCard(tcgdexId);

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