const rockP = document.querySelector('#rockP');
const paperP = document.querySelector('#paperP');
const scissorsP = document.querySelector('#scissorsP');

const rockC = document.querySelector('#rockC');
const paperC = document.querySelector('#paperC');
const scissorsC = document.querySelector('#scissorsC');

const matchWinner = document.querySelector('.matchWinner');
const gameResult = document.querySelector('.gameResult');

const playerScoreText = document.querySelector('.playerScore');
const compScoreText = document.querySelector('.computerScore');

const images = document.querySelectorAll('img');

const resetbtn = document.querySelector('.reset');

let playerScore=0;
let computerScore=0;

function computerPlay(){
    let gameChoices = [
        'rock',
        'paper',
        'scissors'
    ];
    return gameChoices[Math.floor(Math.random()*gameChoices.length)];
}

function removeClass(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('selection');
  }

function determineWinner(){
    if(playerScore===5){
        gameResult.textContent='';
        matchWinner.textContent='Player wins the game!';
    }
    else{
        gameResult.textContent='';
        matchWinner.textContent='Computer wins the game!';
    }
}
function resetGame(){
    playerScore=0;
    computerScore=0; 
    playerScoreText.textContent='0';
    compScoreText.textContent='0';
    matchWinner.textContent='';
    gameResult.textContent='';
}
function startGame(){
    images.forEach(img => img.addEventListener('transitionend', removeClass));
    rockP.addEventListener('click', () =>{
        if(playerScore < 5 && computerScore <5){
            game('r');
        }
        if(playerScore===5 || computerScore===5){
            determineWinner();
        }
    });
    scissorsP.addEventListener('click', () =>{
        if(playerScore < 5 && computerScore <5){
            game('s');
        }
        if(playerScore===5 || computerScore===5){
            determineWinner();
        }
    });
    paperP.addEventListener('click',()=>{
        if(playerScore < 5 && computerScore <5){
            game('p');
        }
        if(playerScore===5 || computerScore===5){
            determineWinner();
        }
    });
}

function addClass(selection){
    selection.classList.add('selection');
}

function playerWins(pPick, cPick){
    addClass(pPick);
    addClass(cPick);
    playerScore++;
    playerScoreText.textContent = playerScore;
    gameResult.textContent='Player wins';
}

function computerWins(pPick, cPick){
    addClass(pPick);
    addClass(cPick);
    computerScore++;
    compScoreText.textContent = computerScore;
    gameResult.textContent='Computer wins';
}

function draw (pPick, cPick){
    addClass(pPick);
    addClass(cPick);
    gameResult.textContent='It\'s a draw';
}

function game(pPick) {

    let cPick = computerPlay();

    if(pPick==='r'){
        if(cPick==='rock'){
           draw(rockP, rockC);
        }
        else if(cPick==='scissors'){
            playerWins(rockP, scissorsC);
        }
        else{
           computerWins(rockP, paperC);
        }
    }   
    if(pPick==='s'){
        if(cPick==='scissors'){
            draw(scissorsP, scissorsC);
        }
        else if(cPick==='rock'){
            computerWins(scissorsP, rockC);
        }
        else{
            playerWins(scissorsP, paperC);  
        }
    }
    if(pPick==='p'){
        if(cPick==='paper'){
            draw(paperP, paperC);
        }
        else if(cPick==='rock'){
            playerWins(paperP, rockC);
        }
        else{
            computerWins(paperP, scissorsC);    
        }
    }
}

startGame();
resetbtn.addEventListener('click', resetGame);
