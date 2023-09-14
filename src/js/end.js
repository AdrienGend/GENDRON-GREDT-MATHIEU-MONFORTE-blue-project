function getPlayer() {
    let player = localStorage.getItem("player");
    player = JSON.parse(player);
    return player;
}

let player = getPlayer();
let end = localStorage.getItem("end");
let gold = document.querySelector('#gold');
let faith = document.querySelector('#faith');
let army = document.querySelector('#army');
let population = document.querySelector('#population');
let name = document.querySelector('#name');

var background = document.getElementsByClassName("background")[0];
var fin = document.querySelector('.fin');

function loadEnd() {

    if (end == 0) {
        gold.innerHTML = player._gold;
    }
    if (end == 1) {
        fin.innerHTML = 'Des sectes se sont formées et ont pris le pouvoir. Vous avez été emprisonné' + '';
        background.style.backgroundImage = "url('./image/fin-fin-foi0.png')";
    }

    if (end == 2) {
        fin.innerHTML = 'Vous êtes ruiné.';
        background.style.backgroundImage = "url('./image/fin-or0.png')";
    }

    if (end == 3) {
        fin.innerHTML = 'Votre peuple a faim, ils vous a renverser et trucidé.';
        background.style.backgroundImage = "url('./image/fin-bonheur0.png')";
    }

    if (end == 4) {
        fin.innerHTML = 'Votre armée est trop faible pour faire respecter la loi. Des bandits font la loi dans votre royaume.';
        background.style.backgroundImage = "url('./image/fin-militaire0.png')";
    }

    if (end == 5) {
        fin.innerHTML = 'La religion a pris le pouvoir.';
        background.style.backgroundImage = "url('./image/fin-foi100.png')", width = "1920px", height = "1080px";
        p.style.color = "white";
    }

    if (end == 6) {
        fin.innerHTML = 'Vous êtes devenu riche. Les royaumes voisins ont décidé de vous envahir.';
        background.style.backgroundImage = "url('./image/fin-or100.png')";
    }

    if (end == 7) {
        fin.innerHTML = 'Lors de la fête du royaume, vous avez été empoisonnée.';
        background.style.backgroundImage = "url('./image/fin-bonheur100.png')";
    }

    if (end == 8) {
        fin.innerHTML = "Vous subissez un coup d'état de l'armée. Vous êtes exécuté.";
        background.style.backgroundImage = "url('./image/fin-militaire100.png')";
    }
}



loadEnd();