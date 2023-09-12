let nameValue = document.querySelector("#name"); 
let button = document.querySelector("#button");

function initialize() {
    console.log("initialize");
    let playerName = nameValue.value; 
    let player = new Player(playerName, 50, 50, 50, 50, []);
    player = JSON.stringify(player);
    localStorage.setItem("player", player);
    
}

button.addEventListener("click", initialize);
