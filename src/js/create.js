let nameValue = document.querySelector("#name"); 
let button = document.querySelector("#button");
let form = document.querySelector("#choice");
let choice = document.querySelector("#choice input:checked").value;

function launchGame() {
    window.location.href = "game.html";
    console.log("launchGame");
}

function initialize() {
    console.log("initialize");
    let playerName = nameValue.value; 
    let player = new Player(playerName, 50, 50, 50, 50, []);

    console.log(item1);
    console.log(choice);
    if (choice === "item1") {
        player.addItem(item1);
    } else if (choice === "item2") {
        player.addItem(item2);
    } else if (choice === "item3") {
        player.addItem(item3);
    }
    console.log(player);
    player = JSON.stringify(player);
    console.log(player);
    localStorage.setItem("player", player);
    launchGame();
    
}

function isChecked() {
    choice = document.querySelector("#choice input:checked").value;
    console.log(choice);
}
form.addEventListener("change", isChecked);
button.addEventListener("click", initialize);
