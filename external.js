function computerPlay() {
    let num = Math.floor(Math.random() * 3) + 1;
    let result = ['Rock', 'Paper', 'Scissors'];
    console.log(result[num - 1])
    return result[num - 1];
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() != computerSelection.toLowerCase()) {
        return "You Lose! Computer beats " + computerSelection
    } else {
        return "You Win! Congratulation"
    }
}
function game(playerSelection) {
    let computerResult = computerPlay();
    //let playerSelection = prompt("Please Enter Your Weapon!");
    let result = playRound(playerSelection, computerResult);
    console.log(result)
    document.getElementById('resultId').innerHTML = result;
    document.getElementById('commputerSelectionId').innerHTML = "Commputer:" + computerResult;
    document.getElementById('manSelectionId').innerHTML = "Human:" + playerSelection;

    // return result;
}