let commputerScore = 0;
let humanScore = 0
let round = 0;
function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;
    let result = ['Rock', 'Paper', 'Scissors'];
    console.log(result[num - 1])
    return result[num - 1];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() != computerSelection.toLowerCase()) {
        return 0;
    } else {
        return 1;
    }
}
function game(playerSelection) {
    if (round <= 15) {
        let computerResult = computerPlay();
        let message = '';
        //let playerSelection = prompt("Please Enter Your Weapon!");
        let result = playRound(playerSelection, computerResult);
        if (result === 0) {
            message = "You Lose! Computer beats " + computerResult;
            commputerScore += 1;
        }
        if (result === 1) {
            message = "You Win! Congratulation";
            humanScore += 1;
        }
        round += 1;
        document.getElementById('resultId').innerHTML = message;
        document.getElementById('commputerSelectionId').innerHTML = "Commputer:" + computerResult;
        document.getElementById('manSelectionId').innerHTML = "Human:" + playerSelection;
        document.getElementById('humanScoreId').innerHTML = "Human Score:" + commputerScore;
        document.getElementById('commputerScoreId').innerHTML = "Commputer Score:" + humanScore;
        console.log(message)
    }
    else {
        document.getElementById('gameOverId').innerHTML = "Game Over try again";
    }
}