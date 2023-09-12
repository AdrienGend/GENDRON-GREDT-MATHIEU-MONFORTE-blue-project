// Créez une fonction pour gérer l'événement Marchand
function handleMerchantEvent(totalEvents) {
    if (shouldTriggerMerchantEvent(totalEvents)) {
        console.log("Un marchand itinérant apparaît !");
        console.log("Objets à vendre :");

        // Affichez les objets que le joueur peut acheter
        for (let i = 0; i < items.length; i++) {
            console.log(`${i + 1}. ${items[i].name} - Prix: ${items[i].price} pièces d'or`);
        }

        // Permettez au joueur d'acheter des objets
        const choixAchat = 0; // Remplacez cela par l'entrée du joueur

        if (choixAchat >= 0 && choixAchat < items.length) {
            const itemAchat = items[choixAchat];

            if (player.gold >= itemAchat.price) {
                console.log(`Vous avez acheté ${itemAchat.name} pour ${itemAchat.price} pièces d'or.`);
                player.gold -= itemAchat.price;
                player.addItem(itemAchat);
            } else {
                console.log("Vous n'avez pas assez d'or pour acheter cet objet.");
            }
        } else {
            console.log("Choix invalide.");
        }
    }
}

// Utilisez la fonction pour gérer l'événement Marchand
const totalEvents = 15; // Remplacez cela par le nombre total d'événements dans votre jeu
handleMerchantEvent(totalEvents);
