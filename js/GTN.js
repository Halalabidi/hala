var randomnumber = -1;
var numguess = 0;
function generate() {

	randomnumber= Math.floor(Math.random() * 1000 + 1);
	console.log(randomnumber);
	document.querySelector('.GuessingField').value = "";
	document.getElementById("rightorwrong").innerhtml = "";
    document.getElementById("highorlow").innerhtml = "";
    numguess = 0;

}

function GTN(){
	var numtyped = parseInt (document.querySelector('GuessingField').value);
	numguess++;
	document.querySelector('GuessingField').value = "";
	   if (numtyped == -1){

	   	document.getElementById('rightorwrong').innerhtml = "Wrong Answer"
	   	document.getElementById('rightorwrong').style.backgroundColor = "lightblue";
	   	document.getElementById('highorlow').innerhtml = "Press the button to generate a number.";

	   }

else if (numtyped < randomnumber) {

	document.getElementById('rightorwrong').innerhtml = "Wrong Answer"
	document.getElementById('rightorwrong').style.backgroundColor = "lightblue";
	document.getElementById('highorlow').innerhtml = "Low, Enter a Number Again.";
}

else if (numtyped > randomnumber) {

	document.getElementById('rightorwrong').innerhtml = "Wrong Answer"
	document.getElementById('rightorwrong').style.backgroundColor = "lightblue";
	document.getElementById('highorlow').innerhtml = "High, Enter a Number Again.";
}

else if (numtyped > randomnumber) {

	document.getElementById('rightorwrong').innerhtml = "Right Answer"
	document.getElementById('rightorwrong').style.backgroundColor = "lightblue";
	document.getElementById('highorlow').innerhtml = " The number was " + randomnumber + ". It took you "+ numguess + "attempts.";
}

else{

	document.getElementById('rightorwrong').innerhtml = "Wrong Answer"
	document.getElementById('rightorwrong').style.backgroundColor = "red";
	document.getElementById('highorlow').innerhtml = "Invalid number guessed, Try Again.";
}


}


