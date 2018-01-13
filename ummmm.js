//unfortunately I didn't do this correctly, so I made this as a placeholder until I make the actual liri.
function Lari(signIn, use, exit) {
    this.signIn = signIn;
    this.use = use;
    this.exit = exit;
    this.status = function () {
        console.log(`sign in by entering your name`);
        // console.log(`it should look something like ---> node ummmm.js billy bob, or just a firstname`);
        // console.log(`Do that to sign in!`);
        console.log(`-----------------------------`);
        // if (!process.argv[2]) {
        //     console.log(`enter name`);
        // }
        // else {
        //     this.welcome();       }
    };
    this.welcome = function () {
        console.log(`welcome to Lari, a placeholder for the original app. Although its functionality is limitied, hopefully
        it provides at least a mild bit of enterainment *this however is not guranteed*`);
    };
};
//the console logs above were in place before inquirer was installed to make it work in a similar fashion and I used a constructor variable to add expandablity and a pseudo data base type feel, however, not completely utilized.
var init = new Lari();

init.status();

// var firstName = process.argv[2];
// var lastName = process.argv[3];

var inquirer = require("inquirer");

inquirer
    .prompt([{
            type: "input",
            message: "What is your name?",
            name: "username",
            default: "Master coder"
        },
        {
            type: "list",
            message: "How bad is this assignment going to do?",
            choices: ["Really bad?", "Like, might as well have turned in nothing?", "like a high pity F?","like a G or something?", "At least not as bad as turning in nothing?"],
            name: "grade"
        },
        {
            type: "confirm",
            message: "is everything correct?",
            name: "confirm",
            default: true
        }

    ])
    .then(function (response) {
        if (response.confirm) {
            console.log(`\nWelcome ${response.username} I hope you can pity this fool of a creator, though he doesn't deserve it. Believe me, I know. 
            ████████████████████████████████████████
            ██████▀░░░░░░░░▀████████▀▀░░░░░░░▀██████
            ████▀░░░░░░░░░░░░▀████▀░░░░░░░░░░░░▀████
            ██▀░░░░░░░░░░░░░░░░▀▀░░░░░░░░░░░░░░░░▀██
            ██░░░░░░░░░░░░░░░░░░░▄▄░░░░░░░░░░░░░░░██
            ██░░░░░░░░░░░░░░░░░░█░█░░░░░░░░░░░░░░░██
            ██░░░░░░░░░░░░░░░░░▄▀░█░░░░░░░░░░░░░░░██
            ██░░░░░░░░░░████▄▄▄▀░░▀▀▀▀▄░░░░░░░░░░░██
            ██▄░░░░░░░░░████░░░░░░░░░░█░░░░░░░░░░▄██
            ████▄░░░░░░░████░░░░░░░░░░█░░░░░░░░▄████
            ██████▄░░░░░████▄▄▄░░░░░░░█░░░░░░▄██████
            ████████▄░░░▀▀▀▀░░░▀▀▀▀▀▀▀░░░░░▄████████
            ██████████▄░░░░░░░░░░░░░░░░░░▄██████████
            ████████████▄░░░░░░░░░░░░░░▄████████████
            ██████████████▄░░░░░░░░░░▄██████████████
            ████████████████▄░░░░░░▄████████████████
            ██████████████████▄▄▄▄██████████████████
            ████████████████████████████████████████
            ████████████████████████████████████████
            `);
            
        }else {
            console.log(`type something ya fool! (unless my code isn't working or you deem it unworthy of testing, then I understand.`);
        }

    });
    