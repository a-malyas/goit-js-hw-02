const calculateEngravingPrice = function (message, pricePerWord) {
    let messageSplit = message.split(' ');
    let wordAmount;
    let engravingPrice;    
     
    for (let i = 0; i < messageSplit.length; i++) {
        wordAmount = messageSplit.length;
        engravingPrice = wordAmount * pricePerWord;
    }
    return engravingPrice;
}
console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10));

