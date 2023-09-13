class Events {
    constructor(id, title, description, choice1,choice2,effect1,effect2, personnage) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.choice1 = choice1;
        this.choice2 = choice2;
        this.effect1 = effect1;
        this.effect2 = effect2;
        this.personnage = personnage;
    }
    //methods
    useEffect1(player) {
        this.effect1(player);
    }
    useEffect2(player) {
        this.effect2(player);
    }


}


event1 = new Events("L'Epidémie Mortelle", "Une épidémie mortelle sévit dans le village.", "Le Pape bénit le village pour guérir la maladie", "Le Conseiller organise une quarantaine stricte",() => {player.changeFaith(20),player.changePopulation(-10)},() => {player.changeArmy(20),player.changePopulation(-10)} , "Pape");
event2 = new Events("La Révolte des Paysans", "Les paysans se révoltent contre les conditions de vie difficiles.", "Le Capitaine des soldats réprime violemment la révolte", "Le Mage utilise des sorts pour calmer les paysans",() => {player.changeArmy(20),player.changePopulation(-10)},() => {player.changeFaith(20),player.changePopulation(-10)} , "Capitaine");
event3 = new Events("Le Mariage Royal", "Un mariage royal est prévu dans le royaume.", "Le Chevalier organise un somptueux mariage", "Le Bouffon anime la fête avec humour",() => {player.changeGold(-50),player.changePopulation(30)},() => {player.changeGold(-20),player.changePopulation(40)} , "Chevalier");
event4 = new Events("La Quête du Graal", "Le Graal est recherché pour apporter la gloire au royaume.", "Le Chevalier part à la recherche du Graal", "Le Conseiller investit dans la recherche du Graal",() => {player.changeGold(-30),player.changeFaith(20)},() => {player.changeGold(-40),player.changePopulation(20)} , "Chevalier");
event5 = new Events("La Peste Noire", "La peste noire menace le royaume.", "Le Pape organise des processions religieuses pour lutter contre la peste", "Le Mage concocte un remède coûteux",() => {player.changeFaith(30),player.changePopulation(-20)},() => {player.changeGold(-50),player.changePopulation(20)} , "Pape");
event6 = new Events("La Révolte des Soldats", "Les soldats se révoltent pour de meilleures conditions.", "Le Capitaine des soldats apaise les soldats en leur offrant des primes", "Le Conseiller négocie avec les soldats pour éviter la révolte",() => {player.changeGold(-40),player.changeArmy(20)},() => {player.changeGold(-30),player.changePopulation(20)} , "Capitaine");
event7 = new Events("L'Invasion Barbare", "Le royaume est menacé par une invasion barbare.", "Le Capitaine des soldats mobilise l'armée pour défendre le royaume", "Le Marchand vend des armes aux envahisseurs en échange de trésors",() => {player.changeArmy(-20),player.changeGold(40)},() => {player.changeGold(30),player.changeArmy(-20)} , "Capitaine");
event8 = new Events("La Quête du Saint Graal (suite)", "La quête du Saint Graal continue.", "Le Chevalier trouve le Graal et apporte la gloire au royaume", "Le Mage échoue dans sa quête, ce qui attriste le peuple",() => {player.changeFaith(20),player.changePopulation(30)},() => {player.changePopulation(-20),player.changeFaith(20)} , "Chevalier");
event9 = new Events("La Famine", "Le royaume souffre de la famine.", "Le Chasseur fournit de la viande pour nourrir le peuple affamé", "Le Capitaine des soldats réquisitionne les réserves pour l'armée",() => {player.changeGold(-30),player.changePopulation(20)},() => {player.changeGold(-20),player.changeArmy(20)} , "Chasseur");
event10 = new Events("Le Schisme Religieux", "Le royaume est en proie à un schisme religieux.", "Le Pape travaille à réconcilier les factions religieuses", "Le Mage profite du schisme pour gagner en influence",() => {player.changePopulation(20),player.changeFaith(-20)},() => {player.changePopulation(-20),player.changeFaith(30)} , "Pape");
event11 = new Events("La Guerre avec le Royaume Voisin", "Le royaume est en guerre avec un royaume voisin.", "Le Capitaine des soldats prépare l'armée à la guerre", "Le Marchand vend des fournitures aux deux côtés",() => {player.changeArmy(20),player.changeGold(-30)},() => {player.changeGold(30),player.changeArmy(-20)} , "Capitaine");
event12 = new Events("La Révolte des Réfugiés", "Les réfugiés cherchent refuge dans le royaume.", "Le Conseiller accueille les réfugiés et les intègre dans la société", "Le Capitaine des soldats chasse les réfugiés pour préserver la sécurité",() => {player.changePopulation(20),player.changeArmy(-20)},() => {player.changeArmy(20),player.changePopulation(-20)} , "Conseiller");
event13 = new Events("Le Duel du Chevalier", "Le Chevalier se lance dans un duel pour gagner en renommée.", "Le Chevalier remporte un duel et gagne en renommée", "Le Chevalier perd le duel, ce qui diminue sa réputation",() => {player.changeGold(-20),player.changeArmy(20)},() => {player.changeArmy(-20),player.changePopulation(20)} , "Chevalier");
event14 = new Events("La Quête du Savoir", "Le Mage entreprend une quête pour obtenir des connaissances magiques.", "Le Mage entreprend une quête pour obtenir des connaissances magiques", "Le Conseiller investit dans l'éducation du peuple",() => {player.changeGold(-30),player.changeFaith(20)},() => {player.changePopulation(20),player.changeFaith(-20)} , "Mage");
event15 = new Events("La Conquête des Terres Lointaines", "Le royaume cherche à conquérir de nouvelles terres lointaines.", "Le Capitaine des soldats lance une expédition pour conquérir de nouvelles terres", "Le Marchand investit dans le commerce avec des terres éloignées",() => {player.changeArmy(20),player.changeGold(-40)},() => {player.changeGold(40),player.changePopulation(-20)} , "Capitaine");









const events = [
    {
        title: "L'Épidémie Mortelle",
        description: "Une épidémie mortelle sévit dans le village.",
        choices: [
            {
                text: "Le Pape bénit le village pour guérir la maladie",
                effect: { Bonheur: -10, Religieux: 20 }
            },
            {
                text: "Le Conseiller organise une quarantaine stricte",
                effect: { Bonheur: -20, Militaires: 10 }
            }
        ]
    },
    {
        title: "La Révolte des Paysans",
        description: "Les paysans se révoltent contre les conditions de vie difficiles.",
        choices: [
            {
                text: "Le Capitaine des soldats réprime violemment la révolte",
                effect: { Bonheur: -30, Militaires: 20 }
            },
            {
                text: "Le Mage utilise des sorts pour calmer les paysans",
                effect: { Religieux: -10, Bonheur: 20 }
            }
        ]
    },
    {
        title: "Le Mariage Royal",
        description: "Un mariage royal est prévu dans le royaume.",
        choices: [
            {
                text: "Le Chevalier organise un somptueux mariage",
                effect: { Or: -50, Bonheur: 30 }
            },
            {
                text: "Le Bouffon anime la fête avec humour",
                effect: { Or: -20, Bonheur: 40 }
            }
        ]
    },
    {
        title: "La Quête du Graal",
        description: "Le Graal est recherché pour apporter la gloire au royaume.",
        choices: [
            {
                text: "Le Chevalier part à la recherche du Graal",
                effect: { Or: -30, Religieux: 20 }
            },
            {
                text: "Le Conseiller investit dans la recherche du Graal",
                effect: { Or: -40, Bonheur: 20 }
            }
        ]
    },
    {
        title: "La Peste Noire",
        description: "La peste noire menace le royaume.",
        choices: [
            {
                text: "Le Pape organise des processions religieuses pour lutter contre la peste",
                effect: { Bonheur: -20, Religieux: 30 }
            },
            {
                text: "Le Mage concocte un remède coûteux",
                effect: { Or: -50, Bonheur: 20 }
            }
        ]
    },
    {
        title: "La Révolte des Soldats",
        description: "Les soldats se révoltent pour de meilleures conditions.",
        choices: [
            {
                text: "Le Capitaine des soldats apaise les soldats en leur offrant des primes",
                effect: { Or: -40, Militaires: 20 }
            },
            {
                text: "Le Conseiller négocie avec les soldats pour éviter la révolte",
                effect: { Or: -30, Bonheur: 20 }
            }
        ]
    },
    {
        title: "L'Invasion Barbare",
        description: "Le royaume est menacé par une invasion barbare.",
        choices: [
            {
                text: "Le Capitaine des soldats mobilise l'armée pour défendre le royaume",
                effect: { Militaires: -20, Or: 40 }
            },
            {
                text: "Le Marchand vend des armes aux envahisseurs en échange de trésors",
                effect: { Or: 30, Militaires: -20 }
            }
        ]
    },
    {
        title: "La Quête du Saint Graal (suite)",
        description: "La quête du Saint Graal continue.",
        choices: [
            {
                text: "Le Chevalier trouve le Graal et apporte la gloire au royaume",
                effect: { Religieux: 20, Bonheur: 30 }
            },
            {
                text: "Le Mage échoue dans sa quête, ce qui attriste le peuple",
                effect: { Bonheur: -20, Religieux: 20 }
            }
        ]
    },
    {
        title: "La Famine",
        description: "Le royaume souffre de la famine.",
        choices: [
            {
                text: "Le Chasseur fournit de la viande pour nourrir le peuple affamé",
                effect: { Or: -30, Bonheur: 20 }
            },
            {
                text: "Le Capitaine des soldats réquisitionne les réserves pour l'armée",
                effect: { Or: -20, Militaires: 20 }
            }
        ]
    },
    {
        title: "Le Schisme Religieux",
        description: "Le royaume est en proie à un schisme religieux.",
        choices: [
            {
                text: "Le Pape travaille à réconcilier les factions religieuses",
                effect: { Religieux: -20, Bonheur: 20 }
            },
            {
                text: "Le Mage profite du schisme pour gagner en influence",
                effect: { Bonheur: -20, Religieux: 30 }
            }
        ]
    },
    {
        title: "La Guerre avec le Royaume Voisin",
        description: "Le royaume est en guerre avec un royaume voisin.",
        choices: [
            {
                text: "Le Capitaine des soldats prépare l'armée à la guerre",
                effect: { Militaires: 20, Or: -30 }
            },
            {
                text: "Le Marchand vend des fournitures aux deux côtés",
                effect: { Or: 30, Militaires: -20 }
            }
        ]
    },
    {
        title: "La Révolte des Réfugiés",
        description: "Les réfugiés cherchent refuge dans le royaume.",
        choices: [
            {
                text: "Le Conseiller accueille les réfugiés et les intègre dans la société",
                effect: { Bonheur: 20, Militaires: -20 }
            },
            {
                text: "Le Capitaine des soldats chasse les réfugiés pour préserver la sécurité",
                effect: { Militaires: 20, Bonheur: -20 }
            }
        ]
    },
    {
        title: "Le Duel du Chevalier",
        description: "Le Chevalier se lance dans un duel pour gagner en renommée.",
        choices: [
            {
                text: "Le Chevalier remporte un duel et gagne en renommée",
                effect: { Or: -20, Militaires: 20 }
            },
            {
                text: "Le Chevalier perd le duel, ce qui diminue sa réputation",
                effect: { Militaires: -20, Bonheur: 20 }
            }
        ]
    },
    {
        title: "La Quête du Savoir",
        description: "Le Mage entreprend une quête pour obtenir des connaissances magiques.",
        choices: [
            {
                text: "Le Mage entreprend une quête pour obtenir des connaissances magiques",
                effect: { Or: -30, Religieux: 20 }
            },
            {
                text: "Le Conseiller investit dans l'éducation du peuple",
                effect: { Bonheur: 20, Religieux: -20 }
            }
        ]
    },
    {
        title: "La Conquête des Terres Lointaines",
        description: "Le royaume cherche à conquérir de nouvelles terres lointaines.",
        choices: [
            {
                text: "Le Capitaine des soldats lance une expédition pour conquérir de nouvelles terres",
                effect: { Militaires: 20, Or: -40 }
            },
            {
                text: "Le Marchand investit dans le commerce avec des terres éloignées",
                effect: { Or: 40, Bonheur: -20 }
            }
        ]
    }
];

// Exemple d'accès aux informations d'un événement
const eventIndex = 15; // Remplacez par l'indice de l'événement que vous souhaitez gérer
const event = events[eventIndex];

console.log("Titre de l'événement :", event.title);
console.log("Description de l'événement :", event.description);
console.log("Choix possibles :");
event.choices.forEach((choice, index) => {
    console.log(`${index + 1}. ${choice.text}`);
});
