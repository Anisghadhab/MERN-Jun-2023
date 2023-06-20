
class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`Name : ${this.name}| Strength : ${this.strength}| Speed : ${this.speed}| Health : ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        return this.health
    }

}
// const ninja1 = new Ninja("Hyabusa",100);
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom = 10) {
        super(name, health = 200, speed = 10, strength = 10)
        this.wisdom = wisdom
    }

    speakWisdom()  {
        super.drinkSake();
        const message = "What one programmer can do in one month, two programmers can do in two months."
        console.log(message)
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();