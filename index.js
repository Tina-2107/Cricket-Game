let scorestr=localStorage.getItem('Score');
        let score;
        resetScore(scorestr);

        function resetScore(scorestr){
                    //default operator
            score=scorestr?JSON.parse(scorestr):{
            win:0,
            lost:0,
            tie:0,
            };
            score.displayScore=function(){
                return ` SCORE:
                Won: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
            };
            showResult();
        }
        //generate no.ramdomly by computer between 0 to 3
    function generateComputerChoice() {
 //This will generate random number between 0 and 3
        let randomNumber = Math.random() * 3;
        if (randomNumber > 0 && randomNumber <= 1) {
        return 'Stone';
        }
        else if (randomNumber > 1 && randomNumber <= 2){
        return 'Paper';
        } 
        else {
        return 'Scissors';
        }
    }


//start comparing the choice of computer and yours
    function getResult(userMove,computerMove){
    if(userMove==='Stone'){

        if(computerMove==='Stone'){
        score.tie++;
            return`It's a Tie`;

        }

        else  if(computerMove==='Paper'){
        score.lost++;
            return'Computer has Won ';

        }

        else if(computerMove==='Scissors'){
        score.win++;
            return'User Won';

        }
    }

    else if(userMove==='Paper'){

        if(computerMove==='Stone'){
        score.win++;
            return'User Won';

        }

        else  if(computerMove==='Paper'){
        score.tie++;
            return`It's a Tie`;

        }

        else if(computerMove==='Scissors'){
        score.lost++;
            return'Computer has Won ';

        }
    }
    else if(userMove==='Scissors'){

        if(computerMove==='Stone'){
        score.lost++;
            return'Computer has Won ';

        }

        else  if(computerMove==='Paper'){
        score.win++;
            return'User Won';

        }

        else if(computerMove==='Scissors'){
        score.tie++;
            return`It's a Tie`;

        }
    }
    }

//to show result
    function showResult(userMove,computerMove,result){
        localStorage.setItem('Score',JSON.stringify(score));

        document.querySelector('#user-move').innerText = 
        userMove ? `You have chosen ${userMove}` : '';
    
    document.querySelector('#computer-move').innerText =
        computerMove ? `Computer choice is ${computerMove}` : '';
    
    document.querySelector('#result').innerText = result || '';

    document.querySelector('#score').innerText = score.displayScore();

    }