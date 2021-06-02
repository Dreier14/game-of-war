const cardDecks = require('./createCardDeck.js');
// importing module

///edge cases needing handling, when war is called what if one player has less than cards for war
/*adding each value from 2 - 10 for nums, we will use 11 == Jacks, 12 == Queens, 13 == Kings and 14 == Aces. We can map these values to the value based in the object to 
our logging so the user sees it as a regular deck of cards*/

compareCards = (playerOneCard, playerTwoCard) =>{ 
     let cardOne = JSON.stringify(playerOneCard).split(":");
     let cardTwo = JSON.stringify(playerTwoCard).split(":");
     //splitting and converting the objects to strings
     let numValOne = parseInt(cardOne[1], 10);
     let numValTwo = parseInt(cardTwo[1], 10);
     //converting the strings to get int val
     if(numValOne > numValTwo){
        cardDecks.playerOneCards.unshift(playerTwoCard)
        cardDecks.playerOneCards.pop(playerOneCard)
        cardDecks.playerOneCards.unshift(playerOneCard)
        console.log("player One Wins with a " + `${Object.values(playerOneCard)}` + " and player two lost with a " +  `${Object.values(playerTwoCard)}`)
        cardDecks.playerTwoCards.splice(-1, 1)
        return runGameLogic()
        //using a helper function for checking the init case if Game is Over
    } else if(numValOne < numValTwo){
        cardDecks.playerTwoCards.unshift(playerOneCard)
        cardDecks.playerTwoCards.pop(playerTwoCard)
        cardDecks.playerTwoCards.unshift(playerTwoCard)
        console.log("player Two Wins with a " + `${Object.values(playerTwoCard)}` + " of " + `${cardOne[0].trimRight('"{')}` + " and player one lost with a " +  `${Object.values(playerOneCard)}` + " of " + `${cardTwo[0].trimRight('"{')}`)
        cardDecks.playerOneCards.splice(-1, 1)
        return runGameLogic()
        //using a helper function for checking the init case if Game is Over
    } else if(numValOne === numValTwo){
        handleWar(numValOne,numValTwo, playerOneCard, playerTwoCard);
        return;
    } else{
        console.log("Game Encountered an Error!!!")
        return;
    } 
}

handleWar = (numValOne, numValTwo, playerOneCard, playerTwoCard) =>{
    console.log("War!!!")
    //psuedo code for war function.
}

runGameLogic = () =>{
    if(cardDecks.playerTwoCards.length === 0 || cardDecks.playerTwoCards.length === 52){
        //base condition
     cardDecks.playerTwoCards.length === 52 ? console.log("Player Two Wins!") : console.log("Player One Wins!")
       return;
   } else{
      compareCards(cardDecks.playerOneCards[cardDecks.playerOneCards.length - 1], cardDecks.playerTwoCards[cardDecks.playerTwoCards.length - 1]);
   }
}

runGameLogic()

//Using console logs to write the output
console.log(cardDecks.playerOneCards, "DECK ONE");
console.log(cardDecks.playerTwoCards, "DECK TWO");
console.log("Player One Score: ", cardDecks.playerTwoCards.length);
console.log("Player Two Score: ", cardDecks.playerOneCards.length);
