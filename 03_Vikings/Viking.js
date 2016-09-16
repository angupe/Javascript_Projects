
var Viking = function(name) {
    this.name = name;
    this.health = Math.floor((Math.random() * 100) + 1);
    this.strength = Math.floor((Math.random() * 100) + 1);

    this.attack = function() {
        return this.strength;
    }
};


var Pit = function(viking1, viking2) {
    this.viking1 = viking1;
    this.viking2 = viking2;

    this.fight = function() {

        while (viking1.strength < viking2.health && viking2.strength < viking1.health)  {
            viking2.health = viking2.health - viking1.attack();
            viking1.health = viking1.health - viking2.attack();
            //console.log(viking1.name + " Health is " + viking1.health + " and " + viking2.name + " Health is " + viking2.health);

        }
        if (viking1.health > viking2.health) {
            console.log(viking1.name + " and " + viking2.name + " are fighting... Stop! " + viking2.name + " is close to death.\n");
        } else {
            console.log(viking1.name + " and " + viking2.name + " are fighting... Stop! " + viking1.name + " is close to death.\n");

        }
    }
};


var Saxon = function() {
    this.health = Math.floor((Math.random() * 50) + 1);
    this.strength = Math.floor((Math.random() * 50) + 1);

    this.attack = function() {
        return this.strength;
    }
};


var Assault = function(viking, saxon) {
    this.viking = viking;
    this.saxon = saxon;

    this.theBattle = function() {

        console.log("Wait! Vikings are crying out...\n");
        console.log("... We are EVERLASTING!!!\n");
        console.log("... We are FEARLESS!!!\n");


            while (viking.health >= 0 && saxon.health >= 0)  {
                viking.health = viking.health - saxon.attack();
                saxon.health = saxon.health - viking.attack();
            }
            if (viking.health > saxon.health) {
                console.log("The Vikings win! They are powerful and mighty!\n");
            } else {
                console.log("The Saxons win! They fought back and conquered!\n");
            }
    }
};


var viking1 = new Viking("Joe");
var viking2 = new Viking("Mike");
var viking3 = new Viking("Luke");
var viking4 = new Viking("Greg");
var viking5 = new Viking("Carl");
var viking6 = new Viking("Tim");
var viking7 = new Viking("Ron");
var viking8 = new Viking("Dave");
var viking9 = new Viking("Ken");
var viking10 = new Viking("Paul");


var saxon1 = new Saxon();
var saxon2 = new Saxon();
var saxon3 = new Saxon();
var saxon4 = new Saxon();
var saxon5 = new Saxon();
var saxon6 = new Saxon();
var saxon7 = new Saxon();
var saxon8 = new Saxon();
var saxon9 = new Saxon();
var saxon10 = new Saxon();


console.log("\nA fight between vikings begins...\n");

var arrayVikings = [viking1, viking2, viking3, viking4, viking5, viking6, viking7, viking8, viking9, viking10];
var vikingFight =  new Pit(arrayVikings[Math.floor((Math.random() * 9) + 0)],arrayVikings[Math.floor((Math.random() * 9) + 0)]);
vikingFight.fight();

var assaultSaxons = new Assault(viking1,saxon1);
assaultSaxons.theBattle();



