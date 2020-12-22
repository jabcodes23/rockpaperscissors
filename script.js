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
        return `Sorry, you lose, ${cpu} beats ${player}.`;
    } else if (player == cpu) {
        return `Both players threw ${player}. Try again.`;
    } else {
        return `You win, ${player} beats ${cpu}!`;
    }
}
const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
