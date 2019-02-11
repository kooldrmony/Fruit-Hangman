document.onkeyup = function(event) {
	  letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	    updatePage(letterGuessed);
}

const words = ["orange", "apple", "pineapple", "cherry", "strawberry"]

let currentWord = null;

let lettersOfWord = [];

const guessedWord = [];

let letterGuessed = [];

let correctLetterGuessed = [];



function game() {

const random = words[Math.floor(Math.random() * words.length)];

currentWord = random;

lettersOfWord = currentWord.split("");

console.log(lettersOfWord);

// const seperate = random.split("");

// this.seperate

// seperate.push(letterGuessed);

// for(var i = 0; i < seperate.length; i++){
// 	if(seperate[i] === "g") {
// 		console.log("there is a g in this word");
// 		break;
// 	} else {
// 		console.log(seperate[i]);
// 	}
// }
wordView();
}

game();

function wordView() {
	let wordBuild = "";

	for(let i = 0; i < lettersOfWord.length; i++){
		  if (letterGuessed.indexOf(lettersOfWord[i]) !== -1) {
		  		 wordBuild += lettersOfWord[i];
	} else {
		wordBuild += "&nbsp;_&nbsp;";
	}

	document.getElementById("view").innerHTML = wordBuild;

}
}

function matchedLetter(letter) {
	for(let i = 0; i < lettersOfWord.length; i++) {
		if((letter === lettersOfWord[i])  && (correctLetterGuessed.indexOf(letter) === -1)){
			correctLetterGuessed.push(letter);
		}
	}
}

const updatePage = (letter) => {
		matchedLetter(letter);
		wordView();
}
// function noun() {
// 	if(random === "orange") {
// 		console.log("The word is orange");
// 		const brand = guessedWord.push("orange");

// 	} else {
// 		console.log("The word is not orange")
// 	}


// }

// noun();
// console.log(guessedWord);