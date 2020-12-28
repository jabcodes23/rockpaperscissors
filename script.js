let playerScore = 0;
let cpuScore = 0;
let result;

document.getElementById('rock').onclick = playRound;
document.getElementById('paper').onclick = playRound;
document.getElementById('scissors').onclick = playRound;

function computerPlay() {
    const objectThrown = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * objectThrown.length);
    return objectThrown[random];
}

function playRound() {
    player = this.id;
    cpu = computerPlay();

    if ((player == "rock" && cpu == "paper") || 
        (player == "paper" && cpu == "scissors") || 
        (player == "scissors" && cpu == "rock")) {
        cpuScore++;
        result = `Sorry, you lose, ${cpu} beats ${player}.`;
    } else if (player == cpu) {
        result = `Both players threw ${player}. Trying again...`;
    } else {
        playerScore++;
        result = `You win, ${player} beats ${cpu}!`;
    }

    document.getElementById("round_update").innerHTML = `You threw ${player}.<br>CPU threw ${cpu}.<br><br>${result}`; 

    document.getElementById("player_score").innerHTML = playerScore;
    document.getElementById("cpu_score").innerHTML = cpuScore;

    if(playerScore == 5 || cpuScore == 5) {
        let winner = (playerScore > cpuScore) ? "Player" : "Computer";
        document.getElementById("round_update").innerHTML = `You threw ${player}. CPU threw ${cpu}.<br>The final score is Player: ${playerScore}, Computer: ${cpuScore} so the winner is ${winner}!<br>Click a piece to play again.`;
        document.getElementById("player_score").innerHTML = '';
        document.getElementById("cpu_score").innerHTML = '';
        playerScore = 0;
        cpuScore = 0;
    }
}




