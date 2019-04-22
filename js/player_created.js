function playerCreated(){
	document.getElementById("diff").innerHTML = localStorage.getItem("diff");
	document.getElementById("name").innerHTML = localStorage.getItem("name");
	document.getElementById("pilot").innerHTML = localStorage.getItem("pilot");
	document.getElementById("fighter").innerHTML = localStorage.getItem("fighter");
	document.getElementById("trader").innerHTML = localStorage.getItem("trader");
	document.getElementById("engineer").innerHTML = localStorage.getItem("engineer");
	document.getElementById("score").innerHTML = localStorage.getItem("score");
	document.getElementById("ship").innerHTML = localStorage.getItem("ship");
}
