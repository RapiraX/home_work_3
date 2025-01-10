const bankCards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"];

let visaCardsCount = 0;

for (let bankCard of bankCards) {
    if (bankCard[0] === "4") {
        visaCardsCount++;
    } 
} 

console.log(`Карт VISA ${visaCardsCount} из ${bankCards.length}`);



