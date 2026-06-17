let choice = document.querySelectorAll('.choice');
let computerChoice = document.getElementById ('computer-choice');
let computer=0;
let playerScore = document.getElementById ('player-score');
let computerScore = document.getElementById ('computer-score');
let playerValue = 0;
let computerValue = 0;



for(let i = 0 ; i < choice.length; i++){
    choice[i].addEventListener ('click', function(){
        let computerChoice = getComputerSelection();
        let userChoice = choice[i].id;
        console.log(` ${userChoice} |||| ${computerChoice}`);
        let gameWinner = checkWinner(userChoice, computerChoice);
        console.log(gameWinner);
 });
}
function getComputerSelection(){ 
    let computerChoices = ['rock', 'paper', 'scissors'];
    let getComputerSelectedIndex = parseInt(Math.random() * 3);
    return computerChoices [getComputerSelectedIndex];  

}

function checkWinner (player, computer){
if(player == computer){
    return "It's Draw";
}
else if(player == 'rock' && computer == 'scissors' || player == 'scissors' && computer =='paper' || player =='paper' && computer == 'rock'){
    playerScore.innerHTML = ++playerValue;
    return 'Player Win';
}
else{
    computerScore.innerHTML = ++computerValue;
    return 'Computer Win';
}
}