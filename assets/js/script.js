/*Color variables*/
:root{
    --primary: #004869; 
    --secondary:#1e70a3; 
    --tertiary: #236e8c;
    --accent1: #ce156b;
    --accent2: #d84f8f;
    --bg: #c9d8e0; 
}
/*Universal Styling*/
*{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

header{
    padding: 50px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg);
}

main{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    background-color: var(--bg);
}


.container{
    width: 800px;
    max-width: 80%;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px;
}

.btn-grid{
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
    margin-top: 20px;
}

.btn, .option{
    background-color: var(--primary);
    border-radius: 5px;
    padding: 5px 10px;
    color: white;
    outline: none;
    font-size: 20px; 
}

.btn:hover{
    background-color: var(--secondary);
}

#next-btn{
    background-color: var(--tertiary);var currentQuestion = 0;
    var timeLeft = 60;
    
    var mainContainerEl = document.getElementById("main-container");
    var startScreenEl = document.getElementById("start-screen");
    var startBtnEl = document.getElementById("start-btn");
    var timerEl = document.getElementById("countdown");
    var quizEl = document.getElementById("quiz");
    var endScreenEl = document.getElementById("end-screen");
    var scoreEl = document.getElementById("your-score");
    var initalBoxEl = document.getElementById("initial-box");
    var saveBtnEl = document.getElementById("save-score");
    
    var questionEl = document.getElementById("question");
    var optn1El = document.getElementById("optn1");
    var optn2El = document.getElementById("optn2");
    var optn3El = document.getElementById("optn3");
    var optn4El = document.getElementById("optn4");
    var nextBtnEl = document.getElementById("next-btn");
    var alertEl = document.getElementById("alert-msg");
    
    var scoresEl = document.getElementById("scores");
    var hiScoreBtnEl = document.getElementById("high-scores");
    var scoreScreenEl = document.getElementById("score-screen");
    var backBtnEl = document.getElementById("back-btn");
    var clearBtnEl = document.getElementById("clear-btn");
    var initalSpan = document.querySelector("#initial-span");
    var scoreSpan = document.querySelector("#score-span");
    
    
    var score = 0;
    
    //Question assignment
    var questionArray = [
        {
            question:"What are variables used for in JavaScript Programs?",
            option1: "Storing numbers, dates, or other values",
            option2: "Booleans",
            option3: "Alerts",
            option4: "Causing high-school algebra flashbacks",
            correct: "1"
        },
        {
            question: "The condition in an if/else statement is enclosed within",
            option1: "Quotes",
            option2: "Curly Brackets",
            option3: "Parenthesis",
            option4: "Square Brackets",
            correct: "2"
        },
        {
            question: "Arrays in Javascript can be used to store",
            option1: "Numbers and strings",
            option2: "Other Arrays",
            option3: "Booleans",
            option4: "All of the above",
            correct: "4"
        },
        {
            question: "String values must be enclosed within____. When being assigned to variables",
            option1: "Commas",
            option2: "Curly Brackets",
            option3: "Quotes",
            option4: "Parenthesis",
            correct: "4"
        },
        {
            question: "A very useful tool used during development and debugging for printing content to the debugger is",
            option1: "Javascript",
            option2: "Terminal/Bash",
            option3: "For Loops",
            option4: "Console.log",
            correct: "4"
        }
    ];
    
    
    function newScreen(){
        currentQuestion = 0;
        score = 0;
        startScreenEl.style.display = "flex";
        quizEl.style.display = "none";
        endScreenEl.style.display = "none";
        scoreScreenEl.style.display = "none";
        loadScores();
        loadQuestion(currentQuestion);
    }
    
    function startHandler(){
        var countdown = timeLeft;
        startScreenEl.style.display = "none";
        quizEl.style.display = "block";
        var timeInterval = setInterval(function () {
            timerEl.textContent = "Time: " + countdown + " seconds";
            countdown--;
            if (countdown === 0 || currentQuestion === questionArray.length) {
                if(countdown === 0){
                    score = 0;
                }else{
                    score += countdown;
                }
                clearInterval(timeInterval);
                loadEndScreen();
            }
        
          }, 1000);
    }
    
    
    function loadQuestion(questionIndex){
        var q = questionArray[questionIndex];
        questionEl.textContent = (questionIndex + 1) + ". " + q.question;
        optn1El.textContent = q.option1;
        optn2El.textContent = q.option2;
        optn3El.textContent = q.option3;
        optn4El.textContent = q.option4;
    }
    
    function loadNextQuestion(){
        var selectedOption = document.querySelector("input[type=radio]:checked");
        if (!selectedOption) {
            alert("Please select your answer!");
            return;
    
        }
        var answer = selectedOption.value;
        console.log(answer);
        if(questionArray[currentQuestion].correct == answer) {
            alertEl.textContent = "Correct!";
        }else{
            alertEl.textContent = "Incorrect!";
        }
        selectedOption.checked = false;
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
    
    function loadEndScreen(){
        quizEl.style.display = "none";
        endScreenEl.style.display = "flex";
        scoreEl.textContent = "Score: " + score;
        timerEl.textContent = "";
        saveBtnEl.addEventListener("click", function(event){
            event.preventDefault();
            var playerName = document.querySelector("input[name='initials']").value;
            if(playerName === ""){
                alert("Enter initials");
            }else{
                localStorage.setItem("initial", playerName);
                localStorage.setItem("score", score);
                loadScores();
                newScreen();
            }
        });
    }
    
    function loadScores(){
        var playerName = localStorage.getItem("initial");
        var playerScore = localStorage.getItem("score");
        if(playerName && playerScore === null){
            return;
        }
        initalSpan.textContent = playerName;
        scoreSpan.textContent = playerScore;
    }
    
    function hiScoreHandler(){
        scoreScreenEl.style.display = "block";
        hiScoreBtnEl.style.display = "none";
        mainContainerEl.style.display = "none";
        loadScores();
        backBtnEl.addEventListener("click", backHandler);
        clearBtnEl.addEventListener("click", clearHandler);
    }
    
    function backHandler(){
        mainContainerEl.style.display = "block";
        hiScoreBtnEl.style.display = "block";
        scoreScreenEl.style.display = "none";
    }
    
    function clearHandler(){
        initalSpan.remove();
        scoreSpan.remove();
    }
    
    
    newScreen();
    startBtnEl.addEventListener("click", startHandler);
    nextBtnEl.addEventListener("click", loadNextQuestion);
    hiScoreBtnEl.addEventListener("click", hiScoreHandler);
}

#next-btn:hover{
    background-color: var(--accent2);
}

#high-scores{
    background-color: var(--accent1);
}

#high-scores:hover{
    background-color: var(--secondary);
}

#start-screen{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

#end-screen{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#save-score, #start-btn{
    margin: 10px;
    padding: 10px 20px;
    font-size: 20px;
}

#score-screen{
    width: 800px;
    max-width: 80%;
    background-color: white;
    padding: 10px 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px;
    margin: 10px;
    font-size: 20px;
}

#scorelist{
    padding: 20px;
}