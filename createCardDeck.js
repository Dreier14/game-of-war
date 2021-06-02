const shuffle = require('shuffle-array')

let playerOneCards = []
let playerTwoCards = []

createCardDeck = () => {
    let cardDeck = []
    createLoopForDeck(cardDeck)
    let finalDeck = shuffle(cardDeck.flat())
    //flatening the array to avoid multideminsonal array
    splitDecks(finalDeck, playerOneCards, playerTwoCards)
    //splitting or dealing the deck into player 1 and player 2
}

createLoopForDeck = (cardDeck) => {
    for(let i=2; i < 15; i++){
        //using a for loop to create the objects for each card type
        //adding each value from 2 - 10 for nums, we will use 11 == Jacks, 12 == Queens, 13 == Kings and 14 == Aces.
        let createDeck = [];
        createDeck[0] = {diamonds: i};
        createDeck[1] = {hearts: i};
        createDeck[2] = {spades: i};
        createDeck[3] = {cloves: i};
        cardDeck.push(createDeck)
        //pushing card into array which then is being 
    }
}

splitDecks = (param, playerOneCards, playerTwoCards) => {
    //dealing the cards, made it so that like a dealer each index in the array would be alternating
    for(let i=0; i < param.length ; i++){
        if(i % 2){
             playerOneCards.push(param[i])
        } else {
             playerTwoCards.push(param[i])
        }
    }
}

createCardDeck()
//invoking the function

exports.playerOneCards = playerOneCards;
exports.playerTwoCards = playerTwoCards;

//exporting the variables