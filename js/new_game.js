function createPlayer() {
	var name = document.getElementById("playerName").value;
	var diff = document.getElementById("difficultySelection").value;
	localStorage.setItem("name",name);
	localStorage.setItem("diff",diff);
	document.location.href = 'player_created.html';
    }



