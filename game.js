// print divs

// user and computer choices

var gestures = ["rock", "paper", "scissors", "lizard", "spock"];

var rules = {
    rock:     { scissors: "breaks",  lizard: "crushes"     },
    paper:    { rock:     "covers",  spock:  "disproves"   },
    scissors: { paper:    "cuts",    lizard: "decapitates" },
    lizard:   { paper:    "eats",    spock:  "poisons"     },
    spock:    { scissors: "smashes", rock:   "vaporizes"   }
};

function play(index) {
    var your = gestures[index];
    var mine = gestures[Math.floor(5 * Math.random())];
    if (your === mine) return alert("Draw. We both played " + your + ".");
    var win = rules[your].hasOwnProperty(mine);
    var result = win ? "win" : "lose";
    var a = win ? your : mine;
    var b = win ? mine : your;

    alert("You " + result + ": " + a + " " + rules[a][b] + " " + b + ".");

    if (result === "win") {
      userScore.value += 1;
    } else {
      computerScore.value += 1;
    }
}
