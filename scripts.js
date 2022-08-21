let playerScore=0;
let ComputerScore=0;
let roundNum=0;

function getComputerChoice() {
    let randomNum=Math.random()
    let ComputerChoice;
    if (randomNum < 1/3)
    {
        ComputerChoice ='Rock';
    } else if (randomNum <2/3 )
    {
        ComputerChoice = 'Paper';
    } else {
        ComputerChoice ='Scissors';
    }
    return ComputerChoice;
}

function reloadMygame()
{
    window.location.reload();
}

function playAgain(winner)
{
    let change=document.querySelector(".threeoptions");
    change.innerHTML=`
        <p>The winner is ${winner}</p> 
        <button class="play_again" onclick=window.location.reload();> Play Again </button>`;
    
    change.classList.add('play_again');

    // let newScript=document.createElement("script");
    // let inlineScript=document.createTextNode(`
    // document.querySelector('button').addEventListener('click',reloadMygame)`);
    // newScript.appendChild(inlineScript);
    // change.appendChild(newScript);
}

function playRound(playerSelection, computerSelection) {

    roundNum +=1;
    let outcome; 
    if ( playerSelection === computerSelection )
    {

        outcome = `The game is tied.`;
    }
    else if ( playerSelection === "Scissors" && computerSelection === "Paper" )
    {
        playerScore = playerScore +1;
        outcome = `You win`;
    }
    else if ( playerSelection === "Rock" && computerSelection === "Scissors")
    {
        playerScore = playerScore +1;
        outcome = `You win`;
    }
    else if ( playerSelection === "Paper" && computerSelection === "Rock")
    {
        playerScore = playerScore +1;
        outcome = `You win`;
    }
    else 
    {
        ComputerScore = ComputerScore+1;
        outcome = `You lose`;
    }
    let output= outcome+` in Round ${roundNum}. Your selection is ${playerSelection} while the Computer's selection is ${computerSelection}`;
    
    document.querySelector('.player_score').textContent=playerScore;
    document.querySelector('.computer_score').textContent=ComputerScore;
    if(outcome === `You win`)
    {
        document.querySelector('.info').classList.remove('tie');
        document.querySelector('.info').classList.remove('lose');
        document.querySelector('.info').classList.add('win');
    }
    else if (outcome === `You lose`)
    {

        document.querySelector('.info').classList.remove('tie');
        document.querySelector('.info').classList.remove('win');
        document.querySelector('.info').classList.add('lose');
    } else {
        document.querySelector('.info').classList.remove('lose');
        document.querySelector('.info').classList.remove('win');
        document.querySelector('.info').classList.add('tie');
    }
        
    document.querySelector('.info').textContent = output;

    if(playerScore === 5 || ComputerScore ===5)
    {
        let winner;
        if(playerScore === 5)
            winner="Player";
        else
            winner="Computer";
        playAgain(winner);
    }
  }

function submitplayerchoice (e)
{
    const playerSelection=this.getAttribute('class');
    const computerSelection=getComputerChoice();
    playRound(playerSelection, computerSelection);

}

const mySelections= document.querySelectorAll('.threeoptions button');
mySelections.forEach(
    selection=>selection.addEventListener('click',submitplayerchoice)
)
