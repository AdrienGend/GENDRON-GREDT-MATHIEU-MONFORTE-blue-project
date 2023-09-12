// Récupérer les valeurs de fin du jeu (vous devez les obtenir à partir de votre jeu)
const or = /* Valeur de l'or */;
const foi = /* Valeur de la foi */;
const bonheur = /* Valeur du bonheur */;
const militaire = /* Valeur militaire */;

// Créer un tableau de conditions et de messages
const conditionsEtMessages = [
    { condition: or === 0, message: "Défaite : Vous avez perdu en raison d'un manque d'or." },
    { condition: foi === 0, message: "Défaite : Vous avez perdu en raison d'un manque de foi." },
    { condition: bonheur === 0, message: "Défaite : Vous avez perdu en raison d'un manque de bonheur." },
    { condition: militaire === 0, message: "Défaite : Vous avez perdu en raison d'un manque de puissance militaire." },
    { condition: or === 100, message: "Défaite : Vous avez perdu en raison d'une surabondance d'or." },
    { condition: foi === 100, message: "Défaite : Vous avez perdu en raison d'une surabondance de foi." },
    { condition: bonheur === 100, message: "Défaite : Vous avez perdu en raison d'une surabondance de bonheur." },
    { condition: militaire === 100, message: "Défaite : Vous avez perdu en raison d'une surabondance de puissance militaire." },
    {
        condition: or < 1 || foi < 1 || bonheur < 1 || militaire < 1 || or > 99 || foi > 99 || bonheur > 99 || militaire > 99,
        message: "Défaite : Les valeurs doivent rester entre 1 et 99."
    }
];

// Initialiser le message de fin par défaut
let finMessage = "La partie n'est pas encore terminée.";

// Vérifier les conditions de défaite
for (const conditionEtMessage of conditionsEtMessages) {
    if (conditionEtMessage.condition) {
        finMessage = conditionEtMessage.message;
        break; // Sortir de la boucle dès qu'une condition est satisfaite
    }
}

// Afficher le message de fin
console.log(finMessage);


// Afficher le récapitulatif
const recapDiv = document.getElementById("recap");
recapDiv.innerHTML = `
    <p>Quantité d'or : ${or}</p>
    <p>Quantité de foi : ${foi}</p>
    <p>Quantité de bonheur : ${bonheur}</p>
    <p>Quantité militaire : ${militaire}</p>
    <p>Raison de la défaite : ${raisonDeDefaite}</p>
`;
