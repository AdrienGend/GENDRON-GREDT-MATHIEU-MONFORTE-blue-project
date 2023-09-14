let pseudo = document.querySelector("#pseudo");
let army = document.querySelector("#military");
let gold = document.querySelector("#gold");
let faith = document.querySelector("#faith");
let population = document.querySelector("#population");
let itemStockage = document.querySelector(".Item");
let background = document.querySelector(".WithOutHeader");
let playerinfo = getPlayer();
let player = new Player(playerinfo._name, playerinfo._gold, playerinfo._faith, playerinfo._army, playerinfo._population, playerinfo._inventory);
let listEvent = [];
listEvent.push(event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, event13, event14);



document.addEventListener('DOMContentLoaded', function () {
    const backpack = document.getElementById('backpack');
    const dropdown = document.getElementById('dropdown');
    const closeButton = document.getElementById('closeButton');

    backpack.addEventListener('click', function () {
        // Affiche le dropdown et masque le sac à dos
        dropdown.style.display = 'block';
        backpack.style.display = 'none';
    });

    closeButton.addEventListener('click', function () {
        // Masque le dropdown et affiche à nouveau le sac à dos
        dropdown.style.display = 'none';
        backpack.style.display = 'block';
    });
});

//récupération des données du joueur
function getPlayer() {
    let player = localStorage.getItem("player");
    player = JSON.parse(player);
    return player;
    
}
function getNote() {
    let note = localStorage.getItem("note");
    note = JSON.parse(note);
    return note;
}

function startWithItem() {
    let item = localStorage.getItem("item");
    item = JSON.parse(item);
    if (item === 1) {
        player.addItem(item1);
    } else if (item === 2) {
        player.addItem(item2);
    } else if (item === 3) {
        player.addItem(item3);
    }
    displayInventory();
}



//affichage informations joueur
function displayBackground() {
    let note = getNote();
    if (note > 1) {
        background.style.backgroundImage = "url('./image/chateauGentil.jpg')";
    } else if (note < -1) {
        background.style.backgroundImage = "url('./image/chateauSombre.jpg')";
    } else {
        background.style.backgroundImage = "url('./image/SalleDuTrone.png')";
    }
}

function displayPseudo() {
    
    pseudo.innerHTML = player._name;
}

function displayGold() {
    
    gold.innerHTML = player._gold;
}

function displayFaith() {
   
    faith.innerHTML = player._faith;
}

function displayArmy() {
    
    army.innerHTML = player._army;
}

function displayPopulation() {
   
    population.innerHTML = player._population;
}

function displayInventory() {
    itemStockage.innerHTML = "";
    let inventory = player.inventory;
    for (let i = 0; i < inventory.length; i++) {
        itemImage = inventory[i].image;
        itemEffect = inventory[i].effect;
        itemRemove = inventory[i].remove;
        itemDescription = inventory[i].description; // Ajout de la description
        itemStockage.innerHTML += `
            <div class="inventory-item">
                <img src="${itemImage}" onclick="${itemEffect, displayStats}" alt="item">
                <div class="description"
                    <p>${itemDescription}</p>
                </div>
            </div>
        `;
    }
}



function displayStats() {
    console.log("displayStats");
    displayGold();
    displayFaith();
    displayArmy();
    displayPopulation();
}


function displayAvatar(imagePath, cssClass, dialogText, buttonLeftText, buttonRightText) {
    let center = document.querySelector(".center");
    center.innerHTML = "";

    // Créer une div pour le personnage et la bulle de dialogue
    let characterContainer = document.createElement("div");
    characterContainer.classList.add("character-container");

    // Créer l'image du personnage
    let characterImg = document.createElement("img");
    characterImg.src = imagePath;
    characterImg.classList.add(cssClass);

    // Créer la bulle de dialogue
    let dialogBox = document.createElement("div");
    dialogBox.classList.add("dialog-box");
    dialogBox.textContent = dialogText;

    // Ajouter l'image du personnage et la bulle de dialogue au conteneur
    characterContainer.appendChild(characterImg);
    characterContainer.appendChild(dialogBox);

    // Ajouter le conteneur du personnage et de la bulle de dialogue au centre
    center.appendChild(characterContainer);

    // Ajouter un bouton dans la div "Left"
    let leftDiv = document.querySelector(".Left");
    let leftButton = document.createElement("button");
    leftDiv.innerHTML = "";
    leftButton.textContent = buttonLeftText;
    leftButton.classList.add("buttonLeft");
    leftDiv.appendChild(leftButton);

    // Ajouter un bouton dans la div "Right"
    let rightDiv = document.querySelector(".up");
    let rightButton = document.createElement("button");
    rightDiv.innerHTML = "";
    rightButton.textContent = buttonRightText;
    rightButton.classList.add("buttonRight");
    rightDiv.appendChild(rightButton);
}

// Appeler la fonction pour afficher le Mage
function displayMageAvatar() {
    displayAvatar(
        "image/Personnage/Mage.png",
        "gauche",
        "Ceci est le texte de la bulle de dialogue du Mage.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}

// Appeler la fonction pour afficher l'Archer
function displayArcherAvatar() {
    displayAvatar(
        "image/Personnage/Archer.png",
        "droite",
        "Ceci est le texte de la bulle de dialogue de l'Archer.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}

//function affichage Paysan 
function displayPeasantAvatar() {
    displayAvatar(
        "image/Personnage/Paysan.png",
        "gauche",
        "Ceci est le texte de la bulle de dialogue du Paysan.",
        "Bouton Gauche",
        "Bouton Droite"
    );
    
}

//function affichage refugier
function displayRefugeeAvatar() {
    displayAvatar(
        "image/Personnage/Refugier.png",
        "droite",
        "Ceci est le texte de la bulle de dialogue du Refugier.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}

//function affichage Pape  
function displayPapeAvatar() {
    displayAvatar(
        "image/Personnage/Pape.png",
        "gauche",
        "Ceci est le texte de la bulle de dialogue du Pape.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}


//function affichage Bouffon
function displayJesterAvatar() {
    displayAvatar(
        "image/Personnage/Bouffon.png",
        "droite",
        "Ceci est le texte de la bulle de dialogue du Bouffon.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}

//function affichage Capitaine des soldats 
function displayCaptainAvatar() {
    displayAvatar(
        "image/Personnage/Capitaine.png",
        "gauche",
        "Ceci est le texte de la bulle de dialogue du Capitaine.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}

//function affichage Chevalier 
function displayKnightAvatar() {
    displayAvatar(
        "image/Personnage/Chevalier.png",
        "droite",
        "Ceci est le texte de la bulle de dialogue du Chevalier.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}

//function affichage conseiller 
function displayAdvisorAvatar() {
    displayAvatar(
        "image/Personnage/Conseiller.png",
        "gauche",
        "Ceci est le texte de la bulle de dialogue du Conseiller.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}



//function affichage Marchant
function displayMarchandAvatar() {
    displayAvatar(
        "image/Personnage/Marchand.png",
        "droite",
        "Ceci est le texte de la bulle de dialogue du Marchand.",
        "Bouton Gauche",
        "Bouton Droite"
    );
}

function Getfromjson() {
    // Chargement des événements à partir du fichier JSON (assurez-vous de charger le fichier JSON correctement)
    fetch('./json/event.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('La récupération du fichier a échoué');
            }
            return response.json(); // Convertir la réponse en JSON
        })
        .then(data => {
            // Utiliser les données JSON ici
            console.log(data);
        })
        .catch(error => {
            console.error('Une erreur s\'est produite :', error);
        });

}


//function affichage perso 
function displayPersoAvatar(event) {
    character = event._personnage;
    if (character === "conseiller") {
        displayAdvisorAvatar();
    } else if (character === "archer") {
        displayArcherAvatar();
    } else if (character === "capitaine") {
        displayCaptainAvatar();
    } else if (character === "chevalier") {
        displayKnightAvatar();
    } else if (character === "bouffon") {
        displayJesterAvatar();
    } else if (character === "mage") {
        displayMageAvatar();
    } else if (character === "marchand") {
        displayMarchandAvatar();
    } else if (character === "pape") {
        displayPapeAvatar();
    } else if (character === "paysan") {
        displayPeasantAvatar();
    } else if (character === "refugier") {
        displayRefugeeAvatar();
    }
}

function displayAndUseEvent(event) {
    let description = document.querySelector(".dialog-box");
    let buttonLeft = document.querySelector(".buttonLeft");
    let buttonRight = document.querySelector(".buttonRight");
    description.innerHTML = event._description;
    buttonLeft.innerHTML = event._choice1;
    buttonRight.innerHTML = event._choice2;
    buttonLeft.addEventListener("click", () => {event.effect1(player),displayStats(),endGame()});
    buttonRight.addEventListener("click", () => {event.effect2(player),displayStats(),endGame()});
}

  function lancerEvenementAleatoire() {
    if (listEvent.length === 0) {
        localStorage.setItem("end", 0);
        window.location.href = "end.html";
    }
    eventNumber = Math.floor(Math.random() * listEvent.length);
    displayPersoAvatar(listEvent[eventNumber]);
    displayAndUseEvent(listEvent[eventNumber]);
    //suppression de l'événement de la liste
    listEvent.splice(eventNumber, 1);

}

// Vous devrez ajouter des écouteurs d'événements pour chaque événement individuel (1 à 15)
for (let i = 1; i <= 15; i++) {
  const evenementId = `evenement${i}`;
  document.addEventListener(evenementId, function () {
    // Ajoutez ici le code que vous souhaitez exécuter lorsque l'événement est déclenché.
  });
}

function endGame() {
    let end
    if (player._faith <= 0){
        end = 1;
        localStorage.setItem("end", end);
        window.location.href = "end.html";
    }else if (player._gold <= 0){
        end = 2;
        localStorage.setItem("end", end);
        window.location.href = "end.html";
    }else if (player._population <= 0){
        end = 3;
        localStorage.setItem("end", end);
        window.location.href = "end.html";
    }else if (player._army <= 0){
        end = 4;
        localStorage.setItem("end", end);
        window.location.href = "end.html";
    }else if (player._faith >= 100){
        end = 5;
        localStorage.setItem("end", end);
        window.location.href = "end.html";

    }else if (player._gold >= 100){
        end = 6;
        localStorage.setItem("end", end);
        window.location.href = "end.html";
    }else if (player._population >= 100){
        end = 7;
        localStorage.setItem("end", end);
        window.location.href = "end.html";
    }else if (player._army >= 100){
        end = 8;
        localStorage.setItem("end", end);
        window.location.href = "end.html";
    }else{
        lancerEvenementAleatoire();
    }
}

  
//appel des fonctions*
displayPseudo();
displayBackground();
displayStats();
startWithItem();
lancerEvenementAleatoire();
displayInventory();

