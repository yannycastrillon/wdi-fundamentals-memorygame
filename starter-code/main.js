console.log("JS file is connected to HTML! Woo!")

function createCards(cards){
	// get the node of game board.
	var card;
	var gameBoard = document.getElementById("game-board");
	
	for (var i =0; i<cards.length; i++) {
		// create card node.
		card = document.createElement("div");
		// add a Class attribute to the card Node.
		card.className = "card";
		// appends card to the game board node
		gameBoard.appendChild(card);
	}
}


var cards = ["queen","queem","king","king"];
var cardsInPlay = [];
createCards(cards);

/*if(cardOne === cardTwo){
	alert("You found a match Quens");
}
if (cardThree === cardFour){
	alert("You found a match of Kings");
}
if (cardOne === cardThree){
	alert("Not match found");
}
if (cardOne === cardFour){
	alert("Not match found");
}
if (cardtwo === cardThree){
	alert("Not match found");
}
if (cardtwo === cardFour){
	alert("Not match found");
}*/