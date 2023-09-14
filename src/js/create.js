let nameValue = document.querySelector("#name"); 
let button = document.querySelector("#button");
let form = document.querySelector("#choice");
let choice = document.querySelector("#choice input:checked").value;
const formulaire = document.getElementById('questionnaire');
const inputs = formulaire.querySelectorAll('input[type="radio"]:checked');


function launchGame() {
    window.location.href = "game.html";
    console.log("launchGame");
}

function initialize() {
    console.log("initialize");
    let playerName = nameValue.value; 
    if (playerName === "") {
        playerName = "Joueur";
    }
    let player = new Player(playerName, 50, 50, 50, 50, []);
    
    console.log(item1);
    console.log(choice);
    if (choice === "item1") {
        localStorage.setItem("item", 1);
    } else if (choice === "item2") {
        localStorage.setItem("item", 2);
    } else if (choice === "item3") {
        localStorage.setItem("item", 3);
    }
    console.log(player);
    player = JSON.stringify(player);
    console.log(player);
    localStorage.setItem("player", player);
    useNote();
    launchGame();
    
}

function isChecked() {
    choice = document.querySelector("#choice input:checked").value;
    console.log(choice);
}

function calculerNote() {
    const formulaire = document.getElementById('questionnaire');
    const inputs = formulaire.querySelectorAll('input[type="radio"]:checked');
    let note = 0;

    inputs.forEach(input => {
      note += parseInt(input.value);
    });

    // Assurez-vous que la note est comprise entre -3 et 3
    note = Math.min(3, Math.max(-3, note));
    return note;
}
function useNote(){
    let note = calculerNote();
    console.log(note);
    localStorage.setItem("note", note);
    
}

//Event listeners
form.addEventListener("change", isChecked);
button.addEventListener("click", initialize);
formulaire.addEventListener("change", calculerNote);

