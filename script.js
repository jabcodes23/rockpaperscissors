let playerScore = 0;
let cpuScore = 0;

// console.log(game());

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




