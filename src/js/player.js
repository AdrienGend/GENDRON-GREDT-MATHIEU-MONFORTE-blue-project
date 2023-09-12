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

    printPlayerStats() {
    console.log(this.name);
    console.log(this.gold);
    console.log(this.faith);
    console.log(this.army);
    console.log(this.population);
    }
    //setters
    set name(name) {
        this._name = name;
    }
    //getters
    get name() {
        return this._name;
    }
}







