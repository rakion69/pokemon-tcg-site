const setMap = {
    SVI: "sv01",
    PAL: "sv02",
    OBF: "sv03",
    MEW: "sv03.05",
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
    ASC: "me02.5",
    POR: "me03",
    CRI: "me04",
    PBL: "me05"
};

// Ora puoi scrivere le tue staples usando I CODICI DEL SET UFFICIALI (es. "ASC-142")
const staples = [
    "SFA-038", // 1 Fezandipiti ex
    "POR-062", // 2 Meowth ex
    "TWM-095", // 3 Munkidori
    "MEG-119", // 4 Lillie's Determination
    "MEG-114", // 5 Boss's Orders
    "MEG-131", // 6 Ultra Ball
    "POR-081", // 7 Poké Pad
    "MEG-125", // 8 Rare Candy
    "DRI-176" // 9 Team Rocket's Petrel
    
];

const useful = [
    "JTG-056", //1 Lillie's Clefairy ex
    "ASC-039", //2
    "JTG-120", //3 Dunsparce
    "TEF-129", //4 Dudunsparce
    "TEF-144", //5 Buddy-Buddy Poffin
    "SVI-186", //6 Pokégear 3.0
    "BLK-079", //7 Air Balloon ^
    "DRI-010", //8 Shaymin
    "PFL-087", //9 Dawn
    "WHT-084", //10 Hilda
    "ASC-196", //11
    "CRI-082", //12 Special Red Card
    "SCR-133", //13 Crispin
    "TWM-165" //14 Unfair Stamp

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