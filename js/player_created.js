function playerCreated(){
	document.getElementById("diff").innerHTML = localStorage.getItem("diff");
	document.getElementById("name").innerHTML = localStorage.getItem("name");
}
