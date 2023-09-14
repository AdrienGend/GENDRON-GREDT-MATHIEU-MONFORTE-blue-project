

let end = localStorage.getItem("end");

var background = document.getElementsByClassName("background")[0];
var p = document.querySelector('p');
function loadEnd(){

if (end == 0){  
    
}
if (end == 1){
    document.querySelector('p').textContent = 'Des sectes se sont formées et ont pris le pouvoir. Vous avez été emprisonné';
    background.style.backgroundImage = "url('./image/fin-fin-foi0.png')";
}

if (end == 2){
    document.querySelector('p').textContent = 'Vous êtes ruiné.';
    background.style.backgroundImage = "url('./image/fin-or0.png')";
}

if (end == 3){
    document.querySelector('p').textContent = 'Votre peuple a faim, ils vous a renverser et trucidé.';
    background.style.backgroundImage = "url('./image/fin-bonheur0.png')";
}

if (end == 4){
    document.querySelector('p').textContent = 'Votre armée est trop faible pour faire respecter la loi. Des bandits font la loi dans votre royaume.';
    background.style.backgroundImage = "url('./image/fin-militaire0.png')";
}

if (end == 5){
    document.querySelector('p').textContent = 'La religion a pris le pouvoir.';
    background.style.backgroundImage = "url('./image/fin-foi100.png')", width="1920px",height = "1080px";
    p.style.color = "white";
}

if (end == 6){
    document.querySelector('p').textContent = 'Vous êtes devenu riche. Les royaumes voisins ont décidé de vous envahir.';
    background.style.backgroundImage = "url('./image/fin-or100.png')";
}

if (end == 7){
    document.querySelector('p').textContent = 'Lors de la fête du royaume, vous avez été empoisonnée.';
    background.style.backgroundImage = "url('./image/fin-bonheur100.png')";
}

if (end == 8){
    document.querySelector('p').textContent = "Vous subissez un coup d'état de l'armée. Vous êtes exécuté.";
    background.style.backgroundImage = "url('./image/fin-militaire100.png')";
}
displayStats();
}



loadEnd();