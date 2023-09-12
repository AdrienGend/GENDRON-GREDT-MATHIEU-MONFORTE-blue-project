let nameValue = document.querySelector("#name"); 
let button = document.querySelector("#button");
let form = document.querySelector("#choice");
let choice = document.querySelector("#choice input:checked").value;


function initialize() {
    console.log("initialize");
    let playerName = nameValue.value; 
    let player = new Player(playerName, 50, 50, 50, 50, []);

    console.log(choice);
    player.addItem(choice);
    console.log(player);
    player = JSON.stringify(player);
    console.log(player);
    localStorage.setItem("player", player);
    
}

function isChecked() {
    choice = document.querySelector("#choice input:checked").value;
    console.log(choice);
}
form.addEventListener("change", isChecked);
button.addEventListener("click", initialize);
