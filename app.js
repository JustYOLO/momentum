const age = parseInt(prompt("How old are you"));

if(isNaN(age) || age < 0) {
    console.log("Please write a real number");
} else if(age < 18) {
    console.log("You can't buy alcohol");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink alcohol");
} else if(age === 100) {
    console.log("wow you're wise");
} else if(age > 80) {
    console.log("You can do whatever you want");
}


else {
    console.log("You should exercise");
}

const player = {
    printName: function(playerName) {
        console.log("Greetings, " + playerName)
    },
}

player.printName("lee")

function sayHello(playerName) {
    console.log("Hello, " + playerName)
}

sayHello("lee")