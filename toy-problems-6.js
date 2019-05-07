// Create 2 Classes a 'Ninja' and 'Wizard class'.

// The Ninja class should have the following properties: health (200), isAlive(true), and attack power(user passes). The Ninja class should have a method called 'meditate' that restores the instances health to full and halfs it's own attack power. It should also have a method called 'backstab' that takes in an enemy and does damage to it equal to half of the ninja's attack power.


// The Wizard class should have the following properties: health (100), isAlive(true), and attack power(user passes). The Wizard class should have a method called 'fireball' that takes another object and deals damage to it equal to the wizards attack power. It should also have a method called 'healAura' that takes in *any* number of objects and restores 5 health to each one.

// Stretch:
// Add a burn effect to the wizard's fireball that does an additional 3 damage a second.

class Ninja {
    constructor(attackPower) {
        this.health = 200;
        this.isAlive = true;
        this.attackPower = attackPower;
    }

    meditate () {
        this.health = 200;
        this.attackPower /= 2;
    }

    backstab (enemy) {
        enemy.health -= this.attackPower / 2

        // check if enemy is still alive
        if (enemy.health <= 0) {
            enemy.isAlive = false;
        }
    }
}

class Wizard {
    constructor (attackPower) {
        this.health = 100;
        this.isAlive = true;
        this.attackPower = attackPower;
    }

    fireball (enemy) {
        enemy.health -= this.attackPower

        // check if enemy is still alive
        if (enemy.health <= 0) {
            enemy.isAlive = false;
        }
    }

    healAura (...objs) {
        for (let obj of objs) {
            obj.health += 5;
        }
    }
}