let userScore = 0;
let compScore =0;

const choices=document.querySelectorAll(".CHOICE");
const msg = document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genComputerChoice = ()=>{
    const options = ["CHOICE1","CHOICE2","CHOICE3"];
    const randonIdx = Math.floor(Math.random()*3);
    return options[randonIdx];
};

const drawGame = () =>{
    console.log("game is draw");
    msg.innerText="Draw, play again";
    msg.style.backgroundColor="#081b31";

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`U WIN ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green"

    }else{
        compScore++;
        compScorePara.innerText= compScore;
        msg.innerText=`U LOSE ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }


    };


const playGame = (userChoice) =>{
    console.log("user choice", userChoice);
    //generate computer choice
    const compChoice = genComputerChoice();
    console.log("comp choice ", compChoice);

    if(userChoice === compChoice){
        //draw
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==="CHOICE2"){
            //scissors,paper
            userWin= compChoice ==="CHOICE1"?false:true;
        }else if (userChoice ==="CHOICE1"){
            //ROCKS,SCISSORS
            userWin = compChoice==="CHOICE3"? false:true;
        }else{
            //rock,paper
            userWin = compChoice==="CHOICE2"? false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((CHOICE) =>{
    console.log(CHOICE)
    CHOICE.addEventListener("click" ,() =>{
        const userChoice = CHOICE.getAttribute("id");

        console.log("choice was clicked", userChoice);
        playGame(userChoice);

        

        
    });
});
