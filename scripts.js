let playerScore=0;
let ComputerScore=0;

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

function standardizeInput(Selection)
{
    // Capitalize the first letter, and leave all the rest letters lowercase.
    // be careful in Scissors, I should only substitute the first letter, not the rest s.
    return Selection.toLowerCase().replace(Selection[0].toLowerCase(), Selection[0].toUpperCase() );
   // be careful of the Selection[0] in the above. Because selection[0] doesn't be changed by the toLowerCase permanently.
 
}

function playRound(playerSelection, computerSelection) {
    let std_playerSelection = standardizeInput(playerSelection);
    let std_computerSelection = standardizeInput(computerSelection);
    let outcome; 
    if ( std_playerSelection === std_computerSelection )
        outcome = "The game is tied in this round."
    else if ( std_playerSelection === "Scissors" && std_computerSelection === "Paper" )
    {
        playerScore = playerScore +1;
        outcome = `You Win in this round! ${std_playerSelection} beat ${std_computerSelection}`;
    }
    else if ( std_playerSelection === "Rock" && std_computerSelection === "Scissors")
    {
        playerScore = playerScore +1;
        outcome = `You Win in this round! ${std_playerSelection} beat ${std_computerSelection}`;
    }
    else if ( std_playerSelection === "Paper" && std_computerSelection === "Rock")
    {
        playerScore = playerScore +1;
        outcome = `You Win in this round! ${std_playerSelection} beat ${std_computerSelection}`;
    }
    else 
    {
        ComputerScore = ComputerScore+1;
        outcome = `You Lose in this round! ${std_computerSelection} beat ${std_playerSelection}`;
    }
    return outcome;
  }

function game()
{
    for (let i=0; i <5; i++)
    {
        let playerSelection=prompt(`Please input "Paper", "Rock", or "Scissors"`, "rock");
        let computerSelection=getComputerChoice();
        let std_playerSelection=standardizeInput(playerSelection);
        let std_computerSelection=standardizeInput(computerSelection);
        console.log(`Round ${i+1}, your selection is ${std_playerSelection} while the computer's selection is ${std_computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }

    if (playerScore === ComputerScore)
    {
        console.log(`You and the computer are tied up in this game. Your score is ${playerScore} while the computer's score is ${ComputerScore}`);
    } 
        else if (playerScore > ComputerScore)
    {
        console.log(`You win this game! Your score is ${playerScore} while the computer's score is ${ComputerScore}`);
    }  else {
        console.log(`You lose this game! Your score is ${playerScore} while the computer's score is ${ComputerScore}`)
    }
}

game();