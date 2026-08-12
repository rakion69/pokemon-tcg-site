const setMap = {
    SVI: "sv01",
    PAL: "sv02",
    OBF: "sv03",
    MEW: "sv3.05",
    PAR: "sv04",
    PAF: "sv04.5",
    TEF: "sv05",
    TWM: "sv06",
    SFA: "sv06.5",
    SCR: "sv07",
    SSP: "sv08",
    PRE: "sv08.5",
    JTG: "sv09",
    DRI: "sv10",
    WHT: "sv10.5w",
    BLK: "sv10.5b",
    MEG: "me01",
    PFL: "me02",
    ASC: "me2.5",
    POR: "me03",
    CRI: "me04",
    PBL: "me05"
};

// Ora puoi scrivere le tue staples usando I CODICI DEL SET UFFICIALI (es. "ASC-142")
const staples = [
    "SFA-038",
    "ASC-196",
    "POR-062", 
    "TWM-095", 
    "MEG-119",
    "MEG-114",
    "MEG-131",
    "POR-081",
    "MEG-125",
    "DRI-176"
    
];

const useful = [
    "JTG-056",
    "ASC-039",
    "JTG-120",
    "TEF-129",
    "TEF-144",
    "SVI-186",
    "ASC-181",
    "DRI-010",
    "PFL-087",
    "WHT-084",
    "ASC-196",
    "CRI-082",
    "SCR-133",
    "TWM-165"

]

// Funzione che converte automaticamente i tuoi codici nel formato TCGdex
function getTcgdexId(cardInput) {
    if (!cardInput || typeof cardInput !== "string") return null;

    const parts = cardInput.split("-");
    if (parts.length !== 2) return cardInput.toLowerCase(); // Se è già un id valido

    const rawSet = parts[0].toUpperCase();
    const cardNumber = parts[1];

    // Se il set è presente nella tua mappa usa la conversione, altrimenti lascia quello originale
    const tcgdexSet = setMap[rawSet] || parts[0].toLowerCase();

    return `${tcgdexSet}-${cardNumber}`;
}