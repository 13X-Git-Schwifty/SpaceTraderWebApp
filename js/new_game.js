function createPlayer() {
	var name = document.getElementById("playerName").value;
	var diff = document.getElementById("difficultySelection").value;
	var pilot = document.getElementById("pilotId").value;
	var trader = document.getElementById("traderId").value;
	var fighter = document.getElementById("fighterId").value;
	var engineer = document.getElementById("engineerId").value;
	var score = 1000;
	var ship = "Gnat"
	localStorage.setItem("name",name);
	localStorage.setItem("diff",diff);
	localStorage.setItem("pilot",pilot);
	localStorage.setItem("trader",trader);
	localStorage.setItem("fighter",fighter);
	localStorage.setItem("engineer",engineer);
	localStorage.setItem("score", score);
	localStorage.setItem("ship", ship);
	document.location.href = 'player_created.html';
    }



