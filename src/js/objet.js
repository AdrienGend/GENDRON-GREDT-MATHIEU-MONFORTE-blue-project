class Item {
  constructor(name, description, price , effect) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.effect = effect;
  }
}

// Création des objets

// Objet 1 : augmente l'or de base du joueur.
const item1 = new Item("Amulette de richesse", "Augmente l'or de base du joueur", 0, { goldIncrease: 15 });

// Objet 2 : augmente le niveau de foi de base du joueur.
const item2 = new Item("Relique sacrée", "Augmente le niveau de foi de base du joueur", 0, { faithIncrease: 10 });

// Objet 3 : augmente légèrement l'or et le niveau de foi de base du joueur.
const item3 = new Item("Talisman béni", "Augmente légèrement l'or et le niveau de foi de base du joueur", 0, { goldIncrease: 15, faithIncrease: 5 });

// Objet 4 : Talisman de Prospérité
const item4 = new Item("Talisman de Prospérité", "Évite la banqueroute en maintenant l'or du joueur à 1 lorsque le joueur atteint 0 d'or.", 0, { preventBankruptcy: true });

// Objet 5 : L'Épée de la Vertu
const item5 = new Item("L'Épée de la Vertu", "Ajoute +10 de foi.", 0, { faithIncrease: 10 });

// Objet 6 : Amulette de l'Évasion
const item6 = new Item("Amulette de l'Évasion", "Permet au joueur de passer un évènement en cours de jeu, évitant ainsi ses conséquences. L'amulette est détruite après utilisation.", 0, { evadeEvent: true });

// Objet 7 : Corne de l'Abondance
const item7 = new Item("Corne de l'Abondance", "Permet au joueur d'augmenter son stock d'or une fois par période de jeu.", 1, { goldIncrease: true });

// Objet 8 : Bouclier Divin
const item8 = new Item("Bouclier Divin", "Augmente le pouvoir militaire de 10.", 2, { militaryIncrease: 10 });


console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);
console.log(item5);
console.log(item6);
console.log(item7);
console.log(item8);



