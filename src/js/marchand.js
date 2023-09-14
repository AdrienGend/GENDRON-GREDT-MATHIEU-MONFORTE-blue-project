// Fonction pour gérer l'événement Marchand itinéraire
function evenementMarchandItineraire(totalEvents, player) {
    // Calcul de la fréquence
    const frequence = calculerFrequence(totalEvents);
  
    // Générer un nombre aléatoire entre 1 et 100 (pourcentage)
    const randomPourcentage = Math.random() * 100;
  
    // Vérifier si l'événement se produit en fonction de la fréquence
    if (randomPourcentage <= frequence) {
      // L'événement se produit, vous pouvez maintenant gérer la vente et l'achat d'objets ici
      // Vous devrez avoir une liste d'objets et un mécanisme pour effectuer des transactions.
  
      // Exemple d'achat d'objet (choisissez un objet aléatoire)
      const objetIndex = Math.floor(Math.random() * objetsDisponibles.length);
      acheterObjet(player, objetIndex);
  
      // Exemple de vente d'objet (choisissez un objet aléatoire de l'inventaire du joueur)
      if (player.inventory.length > 0) {
        const objetAVendreIndex = Math.floor(Math.random() * player.inventory.length);
        vendreObjet(player, objetAVendreIndex);
      }
    }
  }
  
  const objetsDisponibles = [
    item4,
    item5,
    item6,
    item7,
    item8,
  ];
  
  // Fonction pour acheter un objet
  function acheterObjet(player, objetIndex) {
    const objetAchete = objetsDisponibles[objetIndex];
    player=player;
    // Vérifier si le joueur a suffisamment d'argent pour acheter l'objet
    if (player.gold >= objetAchete.price) {
      // Déduire le prix de l'objet de l'argent du joueur
      player.gold -= objetAchete.price;
  
      // Ajouter l'objet à l'inventaire du joueur en utilisant sa méthode "use"
      objetAchete.use(player);
  
      console.log(`Vous avez acheté ${objetAchete.name} pour ${objetAchete.price} pièces d'or.`);
      return true; // L'achat a réussi
    } else {
      console.log("Vous n'avez pas assez d'argent pour acheter cet objet.");
      return false; // L'achat a échoué
    }
  }
  
  // Fonction pour vendre un objet
  function vendreObjet(player, objetIndex) {
    const objetAVendre = player.inventory[objetIndex];
   player=player;
    if (objetAVendre) {
      // Ajouter le prix de l'objet à l'argent du joueur
      player.gold += objetAVendre.price;
  
      // Retirer l'objet de l'inventaire du joueur
      player.inventory.splice(objetIndex, 1);
  
      console.log(`Vous avez vendu ${objetAVendre.name} pour ${objetAVendre.price} pièces d'or.`);
      return true; // La vente a réussi
    } else {
      console.log("Cet objet n'est pas présent dans votre inventaire.");
      return false; // La vente a échoué
    }
  }
  
  // Acheter un objet (par exemple, le premier objet de la liste)
  acheterObjet(player, 0);
  
  // Vendre un objet (par exemple, le premier objet de l'inventaire du joueur)
  if (player.inventory.length > 0) {
    vendreObjet(player, 0);
  }
  