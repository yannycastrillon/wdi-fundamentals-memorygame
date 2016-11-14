console.log("JS file is connected to HTML! Woo!")

var gameBoard = document.getElementById("game-board");
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

createCards(cards);


function isMatch(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("Wow!, You found a match");
	}else{
		alert("Sorry!, You did not find a match");
	}
}

function isTwoCards(){

	// pushes card to the array of cards in play
	cardsInPlay.push(this.getAttribute("data-card"));
	console.log(this.getAttribute('data-card'));
	
	if (this.getAttribute("data-card") === "queen"){

		this.innerHtml = "<img src='img/king_img.png'>";	
		
	}
	else{
		this.innerHtml = "<img src='img/king_img.png'>";	
	}
	
	if(cardsInPlay.length == 2){
		// pass the cardsInPlay as an argument to isMatch function
	    isMatch(cardsInPlay);
	    // clear cards in play array for next try
	    cardsInPlay = [];
	}

}

function createCards(cards){
	// get the node of game board.
	var card;

	for (var i =0; i<cards.length; i++) {
		// create card node.
		card = document.createElement("div");
		// add a Class attribute to the card Node.
		card.className = "card";
		// set attribute to the card Node.
		card.setAttribute("data-card",cards[i]);
		// appends card to the game board node
		gameBoard.appendChild(card);
		// when a card is clicked the function isTwoCards will be executed
    	card.addEventListener('click', isTwoCards);
	}
	
}




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