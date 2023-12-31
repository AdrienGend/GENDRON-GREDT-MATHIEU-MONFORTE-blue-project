class Events {
    constructor(bool, title, description, choice1,choice2,effect1,effect2, personnage) {
        this.bool = bool;
        this.title = title;
        this.description = description;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.effect1 = effect1;
        this.effect2 = effect2;
        this.personnage = personnage;
    }
    //getters
    get bool() {
        return this._bool;
    }
    get title() {
        return this._title;
    }
    get description() {
        return this._description;
    }
    get choice1() {
        return this._choice1;
    }
    get choice2() {
        return this._choice2;
    }
    get effect1() {
        return this._effect1;
    }
    get effect2() {
        return this._effect2;
    }
    get personnage() {
        return this._personnage;
    }
    //setters
    set bool(bool) {
        this._bool = bool;
    }
    set title(title) {
        this._title = title;
    }
    set description(description) {
        this._description = description;
    }
    set choice1(choice1) {
        this._choice1 = choice1;
    }
    set choice2(choice2) {
        this._choice2 = choice2;
    }
    set effect1(effect1) {
        this._effect1 = effect1;
    }
    set effect2(effect2) {
        this._effect2 = effect2;
    }
    set personnage(personnage) {
        this._personnage = personnage;
    }

    //methods
    useEffect1(player) {
        this.effect1(player);
        this.bool = true;
    }
    useEffect2(player) {
        this.effect2(player);
        this.bool = true;
    }


}

const event1 = new Events(false,"L'Epidémie Mortelle", "Une épidémie mortelle sévit dans le village.", "Le Pape bénit le village pour guérir la maladie", "Le Conseiller organise une quarantaine stricte",() => {player.changeFaith(25),player.changePopulation(-30)},() => {player.changeArmy(20),player.changePopulation(-30)} , "pape");
const event2 = new Events(false,"La Révolte des Paysans", "Les paysans se révoltent contre les conditions de vie difficiles.", "Le Capitaine des soldats réprime violemment la révolte", "Le Mage utilise des sorts pour calmer les paysans",() => {player.changeArmy(20),player.changePopulation(-30)},() => {player.changeFaith(25),player.changePopulation(-10)} , "capitaine");
const event3 = new Events(false,"Le Mariage Royal", "Un mariage royal est prévu dans le royaume.", "Le Chevalier organise un somptueux mariage", "Le Bouffon anime la fête avec humour",() => {player.changeGold(-15),player.changePopulation(10)},() => {player.changeGold(-7),player.changePopulation(15)} , "bouffon");
const event4 = new Events(false,"La Quête du Graal", "Le Graal est recherché pour apporter la gloire au royaume.", "Le Chevalier part à la recherche du Graal", "Le Conseiller investit dans la recherche du Graal",() => {player.changeGold(10),player.changeArmy(-5)},() => {player.changeGold(-15),player.changePopulation(10)} , "chevalier");
const event5 = new Events(false,"La Peste Noire", "La peste noire menace le royaume.", "Le Pape organise des processions religieuses pour lutter contre la peste", "Le Mage concocte un remède coûteux",() => {player.changeFaith(25),player.changePopulation(-20)},() => {player.changeGold(-25),player.changePopulation(-15)} , "pape");
const event6 = new Events(false,"La Révolte des Soldats", "Les soldats se révoltent pour de meilleures conditions.", "Le Capitaine des soldats apaise les soldats en leur offrant des primes", "Le Conseiller négocie avec les soldats pour éviter la révolte",() => {player.changeGold(-20),player.changeArmy(30)},() => {player.changeGold(-25),player.changePopulation(30)} , "conseiller");
const event7 = new Events(false,"L'Invasion Barbare", "Le royaume est menacé par une invasion barbare.", "Le Capitaine des soldats mobilise l'armée pour défendre le royaume", "Le Marchand vend des armes défectueuses aux envahisseurs en échange de trésors",() => {player.changeArmy(25),player.changeGold(-20)},() => {player.changeGold(25),player.changeArmy(-15)} , "capitaine");
const event8 = new Events(false,"La Famine", "Le royaume souffre de la famine.", "Le Chasseur fournit de la viande pour nourrir le peuple affamé", "Le Capitaine des soldats réquisitionne les réserves pour l'armée",() => {player.changeArmy(-25),player.changePopulation(25)},() => {player.changePopulation(-25),player.changeArmy(25)} , "archer");
const event9 = new Events(false,"Le Schisme Religieux", "Le royaume est en proie à un schisme religieux.", "Le Pape travaille à réconcilier les factions religieuses", "Le Mage profite du schisme pour gagner en influence",() => {player.changePopulation(30),player.changeFaith(-20)},() => {player.changePopulation(-20),player.changeFaith(20)} , "pape");
const event10 = new Events(false,"La Guerre avec le Royaume Voisin", "Le royaume est en guerre avec un royaume voisin.", "Le Capitaine des soldats prépare l'armée à la guerre", "Le Marchand vend des fournitures aux deux côtés",() => {player.changeArmy(35),player.changeGold(-20)},() => {player.changeGold(40),player.changeArmy(-30)} , "capitaine");
const event11 = new Events(false,"La Révolte des Réfugiés", "Les réfugiés cherchent refuge dans le royaume.", "Le Conseiller accueille les réfugiés et les intègre dans la société", "Le Capitaine des soldats chasse les réfugiés pour préserver la sécurité",() => {player.changePopulation(10),player.changeArmy(-5)},() => {player.changeArmy(10),player.changePopulation(-5)} , "conseiller");
const event12 = new Events(false,"Le Duel du Chevalier", "Le Chevalier se lance dans un duel pour gagner en renommée.", "Le Chevalier remporte un duel et gagne en renommée", "Le Chevalier perd le duel, ce qui diminue sa réputation",() => {player.changeGold(-5),player.changeArmy(10)},() => {player.changeArmy(-10),player.changePopulation(10)} , "chevalier");
const event13 = new Events(false,"La Quête du Savoir", "Le Mage souhaite entreprendre une quête pour obtenir des connaissances magiques.", "Vous acceptez sa requête", "Vous demandez au Conseiller d'investir dans l'éducation du peuple",() => {player.changeGold(-15),player.changeFaith(10)},() => {player.changePopulation(15),player.changeFaith(-10)} , "mage");
const event14 = new Events(false,"La Conquête des Terres Lointaines", "Le royaume cherche à conquérir de nouvelles terres lointaines.", "Le Capitaine des soldats lance une expédition pour conquérir de nouvelles terres", "Le Marchand investit dans le commerce avec des terres éloignées",() => {player.changeArmy(20),player.changeGold(-30)},() => {player.changeGold(35),player.changePopulation(-25)} , "capitaine");