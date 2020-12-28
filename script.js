let playerScore = 0;
let cpuScore = 0;

let rockImg = 'https://images.homedepot-static.com/productImages/23d91e85-aa47-4200-91d5-5fe314e0da98/svn/backyard-x-scapes-fake-rocks-knt-rb1-c3_1000.jpg';
let paperImg = 'https://media.istockphoto.com/vectors/crumpled-paper-texture-white-battered-paper-background-white-empty-vector-id960504202?k=6&m=960504202&s=612x612&w=0&h=Zjt5u788AtgEPWDVct5pe5DKSxFPzJtAzKmP5DATa1Q=';
let scissorsImg = 'https://www.ikea.com/us/en/images/products/sy-scissors__0112301_PE263788_S5.JPG?f=sg';

// console.log(game());

document.getElementById("rock").onclick = function() {
  console.log('rock tapped')
  document.getElementById("player_piece").src = 'https://images.homedepot-static.com/productImages/23d91e85-aa47-4200-91d5-5fe314e0da98/svn/backyard-x-scapes-fake-rocks-knt-rb1-c3_1000.jpg';
};


function throwPaper() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function throwScissors() {
  document.getElementById("demo").innerHTML = "Hello World";
}

function game() {
    while(playerScore + cpuScore < 5) {
        console.log(playRound(prompt("Rock, paper, or scissors?", ""), computerPlay()));
    }

    let winner = (playerScore > cpuScore) ? "Player" : "Computer";
    return `The final score is Player: ${playerScore}, Computer: ${cpuScore}....so the winner is ${winner}!`;
}

function computerPlay () {
    const objectThrown = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * objectThrown.length);
    return objectThrown[random];
}

function playRound (player, cpu) {
    player = player.toLowerCase();
    cpu = cpu.toLowerCase();

    if ((player == "rock" && cpu == "paper") || 
        (player == "paper" && cpu == "scissors") || 
        (player == "scissors" && cpu == "rock")) {
        cpuScore++;
        return `Sorry, you lose, ${cpu} beats ${player}. Score: Player - ${playerScore}, Computer - ${cpuScore}`;
    } else if (player == cpu) {
        return `Both players threw ${player}. Trying again...`;
    } else {
        playerScore++;
        return `You win, ${player} beats ${cpu}! Score: Player - ${playerScore}, Computer - ${cpuScore}`;
    }
}




