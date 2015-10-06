/**
 * Created by session2 on 10/6/15.
 */
var yourName = prompt("what is your name?");
var game = prompt("It is time for lift-off would you like to abort or lift-off.  Your mission is to land on mars and find water on mars");
var random = Math.floor((Math.random() * 10) + 1);



switch (game) {
    case 'abort':
        alert("you failed your mission " + yourName);
        break;

    case'lift-off':
        var orbit= prompt( yourName + ".rov" +  " , you are now in orbit how long would you like to engage your thrusters  (between 1 and 10 minutes?)");
        if (orbit <=5) {
            confirm ( yourName + ", the engagement was too little and died as a result.");

        }


        else {
            var mars1 = confirm("You are orbiting mars, it is time to land.");

            if (mars1 === true);

            var landing= prompt("You've landed on Mars, where would you like to explore? North, South, West, or in blackness?").toLowerCase();
            switch(landing){
                case'north':
                    var north = prompt("You've entered the North zone. Where there are deadly bumble bees and will attack you at any instance. Would you like to attack them? [Yes or No].").toLowerCase();
                    if (north === "yes"){
                        confirm ("Unfortunately, you've died because bumble bees are strongly than you.");

                    }
                    else if( north ==="no"){
                        confirm ("Good choice!");
                    }
                    else {
                        confirm("Your answer was incorrect. GAME OVER.");
                    }
                    break;
                case'south':
                    var south = prompt ("This land needs major help. You find a dead ape, would you like to collect for scientific research? Or, snap a pic and leave it alone?[collect or pic]").toLowerCase();
                    if (south === "collect"){
                        confirm ("You've infected yourself when you grabbed the monkey, and have stopped working since. GAME OVER.");n                                                        }
                    else if(south === "pic"){
                        confirm ("You did the right thing, " + yourName);
                    }
                    else {
                        confirm ("Your answer was incorrect. GAME OVER.");
                    }


                    break;
                case 'west':
                    var west= prompt ("You've discovered water on this side. Some of it is ice and some of it is in gas form. There's a voice that comes from the gas it mentions 'Will you intake my soul?'What do you do? Intake the gas or absorb the solid form of water? [Intake or absorb]").toLowerCase();
                    if(west === "intake"){
                        confirm ("You've inhaled the spirit of a dead martian and have 24 hrs to live.");
                    }
                    else if( west === "absorb"){
                        confirm("You just absorbed Digoxin and have as a result. GAME OVER. ");
                    }
                    else{
                        confirm("Your answer was incorrect. GAME OVER.");
                    }
                    break;
                case 'blackness':
                    var blackness = prompt ("You've entered a place where nothing exist but your imagination. There's nothing and gravity starts to compress against the metal. What are you going to do? Continue your exploration or abort the mission? [abort or explore").toLowerCase();
                    if (blackness === "abort") {
                        console.log("Good choice, you have made the right choice and found                                                                   water!");
                        confirm("You have finished the game. Congratulations!");
                    }
                    else if (blackness === "explore") {
                        console.log("You have been squished by gravity.");
                        confirm("GAME OVER.")
                    }
                    else {
                        confirm("GAME OVER. You have made an awful choice.");
                    }
                    break;


            }

        }
}

 