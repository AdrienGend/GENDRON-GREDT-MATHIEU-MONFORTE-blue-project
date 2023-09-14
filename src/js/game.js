let pseudo = document.querySelector("#pseudo");
let army = document.querySelector("#military");
let gold = document.querySelector("#gold");
let faith = document.querySelector("#faith");
let population = document.querySelector("#population");
let itemStockage = document.querySelector(".Item");
let background = document.querySelector(".WithOutHeader");
let playerinfo = getPlayer();
let player = new Player(playerinfo._name, playerinfo._gold, playerinfo._faith, playerinfo._army, playerinfo._population, playerinfo._inventory);




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
    console.log(item);
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
    console.log(player);
    let inventory = player.inventory;
    console.log(inventory);
    for (let i = 0; i < inventory.length; i++) {
        itemImage = inventory[i].image;
        itemDescription = inventory[i].description; // Ajout de la description
        console.log(itemImage);
        itemStockage.innerHTML += `
            <div class="inventory-item">
                <img src="${itemImage}" alt="item">
                <div class="description">
                    <p>${itemDescription}</p>
                </div>
            </div>
        `;
    }
}



function displayStats() {
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
    leftButton.innerHTML = "";
    leftButton.textContent = buttonLeftText;
    leftButton.classList.add("buttonLeft");
    leftDiv.appendChild(leftButton);

    // Ajouter un bouton dans la div "Right"
    let rightDiv = document.querySelector(".Right");
    let rightButton = document.createElement("button");
    rightButton.innerHTML = "";
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
    console.log("displayPersoAvatar");
    character = event._personnage;
    console.log(character);
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
    console.log(player);
}
  
  function lancerEvenementAleatoire() {
  // Générer un nombre aléatoire entre 1 et 15
  const randomNombre = Math.floor(Math.random() * 15) + 1;
    console.log(`Nombre aléatoire généré : ${randomNombre}`);

  // Déclencher l'événement correspondant au nombre aléatoire
  switch (randomNombre) {
    case 1: displayPersoAvatar(event1),displayAndUseEvent(event1);  break;
    case 2: displayPersoAvatar(event2),displayAndUseEvent(event2) ; break;
    case 3: displayPersoAvatar(event3),displayAndUseEvent(event3); break;
    case 4: displayPersoAvatar(event4),displayAndUseEvent(event4); break;
    case 5: displayPersoAvatar(event5),displayAndUseEvent(event5); break;
    case 6: displayPersoAvatar(event6),displayAndUseEvent(event6); break;
    case 7: displayPersoAvatar(event7),displayAndUseEvent(event7); break;
    case 8: displayPersoAvatar(event8),displayAndUseEvent(event8); break;
    case 9: displayPersoAvatar(event9),displayAndUseEvent(event9); break;
    case 10: displayPersoAvatar(event10),displayAndUseEvent(event10); break;
    case 11: displayPersoAvatar(event11),displayAndUseEvent(event11); break;
    case 12: displayPersoAvatar(event12),displayAndUseEvent(event12); break;
    case 13: displayPersoAvatar(event13),displayAndUseEvent(event13); break;
    case 14: displayPersoAvatar(event14),displayAndUseEvent(event14); break;
    case 15: displayPersoAvatar(event15),displayAndUseEvent(event15); break;
    default: console.log("Nombre aléatoire invalide.");
  }

}



// Vous devrez ajouter des écouteurs d'événements pour chaque événement individuel (1 à 15)
for (let i = 1; i <= 15; i++) {
  const evenementId = `evenement${i}`;
  document.addEventListener(evenementId, function () {
    console.log(`Événement ${evenementId} déclenché.`);
    // Ajoutez ici le code que vous souhaitez exécuter lorsque l'événement est déclenché.
  });
}

function endGame() {
    console.log("endGame");
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
player.addItem(item1);
displayInventory();

