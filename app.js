let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

userScorePara = document.querySelector("#user-score");
compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const ranIdx = Math.floor(Math.random() * 3 );
    return options[ranIdx];
}


const drawGame = (userWin, userChoice, compChoice) => {
    console.log("Match was Draw");
    msg.innerText = `Match DRAW. You Both Chose ${compChoice}`;
    msg.style.backgroundColor = "black";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {

        userScore++;
        userScorePara.innerText = userScore;


        console.log("You WIN!");
        msg.innerText = `You WIN! Your Choice was ${userChoice} and Computer's Choice was ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {

        compScore++;
        compScorePara.innerText= compScore;


        console.log("You LOSE!");
        msg.innerText = `You LOSE. Your Choice was ${userChoice} and Computer's Choice was ${compChoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userChoise) => {
    console.log("USER CHOICE", userChoise);

    const compChoice = genCompChoice();
    console.log("COMPUTER CHOICE", compChoice);

    if(userChoise === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoise === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoise==="paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;

        }

        showWinner(userWin, userChoise, compChoice);
    }



}

choices.forEach((choice) => {

    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoise = choice.getAttribute("Id");
        // console.log("Clicked", userChoise);
        playGame(userChoise);

       


    })
})

