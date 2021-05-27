let button = document.querySelector('#buttons')
button.addEventListener('click', playRound);


function playerSelection(event){
    const target = event.target;
        if (target.tagName != 'BUTTON') return;
      return target.id
}

function computerPlay() {
   let array = ['Rock', 'Paper', 'Scissors'];

    random = Math.floor(Math.random() * array.length);
    return (random, array[random]);
}


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
   let result = ' ';
        if ((playerSelection.target.id == "Rock" && computerSelection == "Scissors") ||
            (playerSelection.target.id == "Scissors" && computerSelection == "Paper") ||
            (playerSelection.target.id == "Paper" && computerSelection == "Rock")){
                 result = 'You win!';
        }else if ((playerSelection.target.id == "Rock" && computerSelection =='Paper')||
                  (playerSelection.target.id == "Scissors" && computerSelection == "Rock") ||
                  (playerSelection.target.id == "Paper" && computerSelection == "Scissors")){
                     result = 'You lose!';
        }else{
             result = "Nobody win";
        }
        console.log(playerSelection.target.id);
        console.log(computerSelection); 
 console.log(result);

        if (result == 'You win!'){
            alert ('you win')
        }
}  


