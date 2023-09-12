class Player {
    constructor(name, gold, faith, army, population, inventary) {
        this.name = name;
        this.gold = gold;
        this.faith = faith;
        this.army = army;
        this.population = population;
        this.inventary = inventary;
    }
    //methods
    changeGold(amount) {
        this.gold += amount;
    }
    changeFaith(amount) {
        this.faith += amount;
    }
    changeArmy(amount) {
        this.army += amount;
    }
    changePopulation(amount) {
        this.population += amount;
    }
    changeName(name) {
        this.name = name;
    }
    addItem(item) {
        this.inventary.push(item);
    }

}

const player = new Player('Player', 100, 100, 100, 100, []);



// Print player stats
function printPlayerStats() {
    console.log(player.name);
    console.log(player.gold);
    console.log(player.faith);
    console.log(player.army);
    console.log(player.population);
}



