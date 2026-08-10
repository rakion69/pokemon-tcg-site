const API_BASE = "https://api.tcgdex.net/v2/en";

async function getCard(cardId) {
    try {
        const response = await fetch(`${API_BASE}/cards/${cardId}`);

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        return await response.json();

    } catch (error) {
        console.error(`Errore caricando ${cardId}:`, error);
        return null;
    }
}