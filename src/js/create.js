let nameValue = document.querySelector("#name"); 
let button = document.querySelector("#button");


function initialize() {
    console.log("initialize");
    let playerName = nameValue.value; 
    let player = new Player(playerName, 50, 50, 50, 50, []);
    console.log(player);
    player = JSON.stringify(player);
    console.log(player);
    localStorage.setItem("player", player);
    
}

button.addEventListener("click", initialize);
