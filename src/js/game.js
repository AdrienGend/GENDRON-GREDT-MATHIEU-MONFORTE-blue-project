let pseudo = document.querySelector("#pseudo");
let army = document.querySelector("#military");
let gold = document.querySelector("#gold");
let faith = document.querySelector("#faith");
let population = document.querySelector("#population");
let itemStockage = document.querySelector(".Item");


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

//affichage informations joueur
function displayPseudo() {
    let player = getPlayer();
    pseudo.innerHTML = player._name;
}

function displayGold() {
    let player = getPlayer();
    gold.innerHTML = player._gold;
}

function displayFaith() {
    let player = getPlayer();
    faith.innerHTML = player._faith;
}

function displayArmy() {
    let player = getPlayer();
    army.innerHTML = player._army;
}

function displayPopulation() {
    let player = getPlayer();
    population.innerHTML = player._population;
}

function displayInventory() {
    let player = getPlayer();
    itemStockage.innerHTML = "";
    let inventory = player.inventory;
    for (let i = 0; i < inventory.length ; i++) {
        itemImage = inventory[i].image;
        console.log(itemImage);
        itemStockage.innerHTML += `<img src="${itemImage}" alt="item">`
    }
}


displayPseudo();
displayGold();
displayFaith();
displayArmy();
displayPopulation();
displayInventory();
