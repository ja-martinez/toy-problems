// Create a human class that has the following properties: health (defaults to 100), isAlive(true), and attack power(5). Add a method called 'rest' that restores 5 health.

// Then create two additional classes Ninja and Wizard. These classes should inherit from the human class.

// The Ninja class should have the following properties: health (200), isAlive(true), and attack power(user passes). The Ninja class should have a method called 'meditate' that restores the instances health to full and halfs it's own attack power. It should also have a method called 'backstab' that takes in an enemy and does damage to it equal to half of the ninja's attack power.


// The Wizard class should have the following properties: health (100), isAlive(true), and attack power(user passes). The Wizard class should have a method called 'fireball' that takes another object and deals damage to it equal to the wizards attack power. It should also have a method called 'healAura' that takes in *any* number of objects and restores 5 health to each one.

// Stretch:
// Add a burn effect to the wizard's fireball that does an additional 3 damage a second until the enemy is dead.
// Stretch 2:
// Refactor using the ES5 Constructor Pattern discussed in yesterday's breakout. HINT: Use call!

function Human () {
    this.health = 100;
    this.isAlive = true;
    this.attackPower = 5;
    this.rest = function () {
        this.health += 5;
    }
}

function Ninja (attackPower) {
    Human.call(this);

    this.health = 200;
    this.attackPower = attackPower;

    this.meditate = function () {
        this.health = 200;
        this.attackPower /= 2;
    }

    this.backstab = function (enemy) {
        enemy.health -= this.attackPower / 2;
    }
}

function Wizard (attackPower) {
    Human.call(this);

    this.attackPower = attackPower;

    this.healAura = function (...allies) {
        for (ally of allies) {
            ally.health += 5;
        }
    }

    this.fireball = function (enemy) {
        enemy.health -= this.attackPower;
    }
}

jose = new Ninja(100);
console.log(jose);
jose.rest();
console.log(jose);

