class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;

    }
    attack(target) {
        target.resilience -= this.power;
        //reduce target res by power
        console.log(unit2)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text
        this.stat = stat;
        this.magnitude = magnitude;
    }
    magic(target){
        if(this.stat == "resilience"){
            target.resilience += this.magnitude
        }
        else target.power += this.magnitude
        console.log(unit2)
        // console.log(unit1)
    }
        

}

const unit1 = new Unit("Red Belt Ninja", 3, 3, 4)
const unit2 = new Unit("Black Belt Ninja", 4, 5, 4)

const effect1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
const effect3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

effect2.magic(unit1)
effect3.magic(unit1)
unit1.attack(unit2)


