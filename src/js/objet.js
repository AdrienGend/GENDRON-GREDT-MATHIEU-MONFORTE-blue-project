class Item {
  constructor(name, description, price , effect, image) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.effect = effect;
    this.image = image;
  }
    use(player) {
        this.effect(player);
    }
}

// Création des objets

// Objet 1 : augmente l'or de base du joueur lorsqu'il est utilisé.
const item1 = new Item("Amulette de richesse", "Augmente l'or du joueur", 0, () => {player.changeGold(10)}, "./image/amulettederichesse.png");

// Objet 2 : augmente le niveau de foi de base du joueur.
const item2 = new Item("Relique sacrée", "Augmente la foi du joueur", 0, () => {player.changeFaith(10)},"./image/artefactsacree.png");

// Objet 3 : augmente légèrement l'or et le niveau de foi de base du joueur.
const item3 = new Item("Talisman béni", "Augmente légèrement l'or et la foi du joueur", 0, () => {
    player.changeGold(5);
    player.changeFaith(5)},"./image/talismanbeni.png");

// Objet 4 : Talisman de Prospérité
const item4 = new Item("Talisman de Prospérité", "Évite la banqueroute en maintenant l'or du joueur à 1 lorsque le joueur atteint 0 d'or.", 0, () => {
    if (player.gold === 0) {player.changeGold(1)}},"./image/talismandeprosperité.png");

// Objet 5 : L'Épée de la Vertu
const item5 = new Item("L'Épée de la Vertu", "Ajoute de la puissance militaire", 0, () => {
    player.changePopulation(10)},"./image/epeevertu.png");


// Objet 6 : Amulette de l'Évasion
const item6 = new Item("Amulette de l'Évasion", "Permet au joueur de passer un évènement en cours de jeu, évitant ainsi ses conséquences. L'amulette est détruite après utilisation.", 0, () => {
    // TODO
},"./image/amuletteevasion.png")

// Objet 7 : Corne de l'Abondance
const item7 = new Item("Corne de l'Abondance", "Permet au joueur d'augmenter l'or et la puissance militaire", 1, () => {
    player.changeGold(10); player.changePopulation(10)},"./image/corned_abondance.png")

// Objet 8 : Bouclier Divin
const item8 = new Item("Bouclier Divin", "Augmente le pouvoir militaire de 10.", 2, () => { player.changeArmy(10);},"./image/bouclier.png")

