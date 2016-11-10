console.log("JS file is connected to HTML! Woo!")

var cardOne ="queen";
var cardTwo ="queen";
var cardThree ="king";
var cardFour ="king";

if(cardOne === cardTwo){
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
}