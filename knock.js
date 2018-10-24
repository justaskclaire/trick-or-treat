document.addEventListener('DOMContentLoaded', function() {
	doorCrack('#door');
});

var enter = function() {
	// Open Door
	var door = document.querySelector('#jamb');
	var newdoor = door.cloneNode(true);
	document.querySelector('#door').classList.add('finishOpen');
	document.querySelector('#jamb').classList.add('spread');
	
	// Randomly assign trick or treat
	var random = Math.round(Math.random());	
	
	var reward = "";
	if (random == 0) 
		reward = "trick";
	else 
		reward = "treat";
	
	console.log("reward = " + reward);
		
	if (reward == "trick") {
		// Increment tricks
		var tricks = document.querySelector('#tricks');
		var currentTricks = tricks.textContent;
		console.log("Current Tricks = " + currentTricks);
		currentTricks = +currentTricks + +1;
		tricks.textContent = currentTricks;
	}
	else {
		// Increment treats
		var treats = document.querySelector('#treats');
		var currentTreats = treats.textContent;
		console.log("Current Treats = " + currentTreats);
		currentTreats = +currentTreats + +1;
		treats.textContent = currentTreats;
	}	

	setTimeout(function() {
			door.remove();
			document.body.appendChild(newdoor);
			doorCrack('#door');
	}, 500)
}

function doorCrack(selector) {
	var element = document.querySelector(selector);
	
	element.addEventListener('mouseenter', function() {
		this.classList.remove('closed');
		this.classList.add('cracked');
	})
	element.addEventListener('mouseleave', function() {
		this.classList.remove('cracked');
		this.classList.add('closed');		
	})
}