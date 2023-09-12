localStorage.setItem("foi", "100")
localStorage.setItem("or", "10")
localStorage.setItem("bonheur", "10")
localStorage.setItem("militaire", "10")

var foi = localStorage.getItem('foi');
var or = localStorage.getItem('or');
var bonheur = localStorage.getItem('bonheur');
var militaire = localStorage.getItem('militaire');

var background = document.getElementsByClassName("background")[0];
var p = document.querySelector('p');

if (foi == 0){
    document.querySelector('p').textContent = "Des sectes se sont formées et ont pris le pouvoir. Vous avez été emprisonné.";
    background.style.backgroundImage = "url('./image/fin-secte.png')";
}

if (or == 0){
    document.querySelector('p').textContent = 'Vous êtes ruiné.';
    background.style.backgroundImage = "url('./image/fin-ruine.png')";
}

if (bonheur == 0){
    document.querySelector('p').textContent = 'Votre peuple vous a renverser et trucidé.';
    background.style.backgroundImage = "url('./image/fin-famine.png')";
}

if (militaire == 0){
    document.querySelector('p').textContent = 'Votre armée est trop faible pour faire respecter la loi. Des bandits font la loi dans votre royaume.';
    background.style.backgroundImage = "url('./image/fin-bandit.png')";
    p.style.color = "white";
}

if (foi == 100){
    document.querySelector('p').textContent = 'La religion a pris le pouvoir.';
    background.style.backgroundImage = "url('./image/fin-religion.png')";
}

if (or == 100){
    document.querySelector('p').textContent = 'Vous êtes devenu riche. Les royaumes voisins ont décidé de vous envahir.';
    background.style.backgroundImage = "url('./image/fin-invasion.png')";
}

if (bonheur == 100){
    document.querySelector('p').textContent = 'Lors de la fête du royaume, une charette vous a écrasez.';
    background.style.backgroundImage = "url('./image/fin-charette.png')";
}

if (militaire == 100){
    document.querySelector('p').textContent = "Vous subissez un coup d'état de l'armée. Vous êtes exécuté.";
    background.style.backgroundImage = "url('./image/fin-armee.png')";
}