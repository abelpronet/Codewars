/*
Codewars Kata Details:

    - Title: Two fighters, one winner
    - Difficulty: 7 kyu
    - Link: https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
    - Language: Javascript

Description: 

    Create a function that returns the name of the winner in a fight between two fighters.

    Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

    Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

    Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Example:

    function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
    }
*/

// Solution

// Fight Object Instace

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function () {
        return this.name
    }
}

// Creating fighter

const fighter1 = new Fighter("Harald", 20, 5)

const fighter2 = new Fighter("Harry", 5, 4)

const firstAttacker = fighter1.toString()

// Fight function

function declareWinner(fighter1, fighter2, firstAttacker) {

    while (fighter1.health > 0 && fighter2.health > 0) {

        fighter1.health = fighter1.health - fighter2.damagePerAttack;
        console.log("health F1 = " + fighter1.health)

        fighter2.health = fighter2.health - fighter1.damagePerAttack;
        console.log("health F2 = " + fighter2.health)

    }

    if (fighter1.health <= 0 && fighter2.health <= 0) {
        console.log("The first attacker is " + firstAttacker)
        return firstAttacker


    } else if (fighter1.health <= 0) {
        console.log("The winner is " + fighter2.name)
        return fighter2.name


    } else {
        console.log("The winner is " + fighter1.name)
        return fighter1.name

    }

}

declareWinner(fighter1, fighter2, firstAttacker) // Harald