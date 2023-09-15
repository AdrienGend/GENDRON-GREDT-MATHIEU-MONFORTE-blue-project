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
    const messages = [
        "Des sectes se sont formées et ont pris le pouvoir. Vous avez été emprisonné.",
        "Vous êtes ruiné. Votre économie s'éffondre.",
        "Votre peuple a faim, ils vous ont renversé et trucidé.",
        "Votre armée est trop faible pour faire respecter la loi. Des bandits font la loi dans votre royaume.",
        "La religion a pris le pouvoir.",
        "Vous êtes devenu riche. Les royaumes voisins ont décidé de vous envahir.",
        "Lors de la fête du royaume, vous avez été empoisonné.",
        "Vous subissez un coup d'État de l'armée. Vous êtes exécuté."
    ];

    if (end > 0 && end < messages.length) {
        fin.innerHTML = messages[end-1];
    
        const backgroundImageUrls = [
            "./image/fin-foi0.png",
            "./image/fin-or0.png",
            "./image/fin-bonheur0.png",
            "./image/fin-militaire0.png",
            "./image/fin-foi100.png",
            "./image/fin-or100.png",
            "./image/fin-bonheur100.png",
            "./image/fin-militaire100.png"
        ];
    
        if (end > 0 && end < backgroundImageUrls.length) {
            background.style.backgroundImage = `url('${backgroundImageUrls[end-1]}')`;
        }
    
        if (end === 4) {
            background.style.width = "1920px";
            background.style.height = "1080px";
            p.style.color = "white";
        }
    
        gold.innerHTML = player._gold;
        faith.innerHTML = player._faith;
        army.innerHTML = player._army;
        population.innerHTML = player._population;
    
    } else {
        localStorage.setItem("end", 0);
        gold.innerHTML = player._gold;
        faith.innerHTML = player._faith;
        army.innerHTML = player._army;
        population.innerHTML = player._population;
    }
}

loadEnd();