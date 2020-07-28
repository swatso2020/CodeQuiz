//Declare Variables
var currentQuestion=0;
var currentScore=0;
var currentTime=5;
var nextBtn =document.getElementById("next")
var questionContainer=document.getElementById("QuestionContainer");
var startBtn = document.getElementById("start")
var stopBtn =document.getElementById("Submit")
var interval;
var checkAnswer = document.getElementById("check")
var currScore = document.getElementById("currScore")
var highScore = document.getElementById("highScore")
var userInitals = document.getElementById("sInitals")
var statsCont = document.getElementById("stats-container")
var userInput = document.getElementById("userInput")





startBtn.addEventListener("click",startQuiz)



questionContainer.addEventListener("click",function(event) {
    if(event.target.matches("li")) {
        var answer=event.target.innerText;

        var question=questions[currentQuestion];

        if(answer===question.answer) {
            currentScore++;
            checkAnswer.innerText ="Correct!"
            showHidden();
            console.log(currentScore)
        } else {
            currentTime=currentTime-5;
            checkAnswer.innerText ="Incorrect"
            showHidden();
        }
        currentQuestion++;
        
        if(currentQuestion>=questions.length||currentTime>=0) {
            finishQuiz();
          
        } else {
            showCurrentQuestion();
        }       
        
    }
});


showHighScores();
hideBeforeTestBegins();
currScore.innerText=currentScore

function showHighScores() {
    //Retrieve high scores
    //Display high scores
    highScore.innerText = localStorage.getItem("highscore");  
    userInitals.innerText = localStorage.getItem("initals");    
}


 function hideBeforeTestBegins(){
    checkAnswer.style.display ='none';//hides the correct or incorrect status until the check is done
   
userInput.style.display = "none"

 }
function hideAfterTestBegins(){
startBtn.style.display = 'none';//hides the start button when the test begins
statsCont.style.display = 'none';//hides the stats when the test test begins
userInput.style.display = "none";
}

function showAfterTestFinishes(){
    userInput.style.display = "block";
}

function hideAftertest(){
    questionContainer.style.display = "none";

}

 
 function showHidden(){
checkAnswer.style.display ='block';//shows if the answer is correct or incorrect if when the user chooses the answer
 }


var questions=[
    {
        question:"Commonly used data types DO NOT inclue:?",
        options:["1.strings","2.booleans","3.alerts","4.Numbers"],
        answer:"3.alerts"
    },
    {
        question:"Arrays in JavaScript can be used to store",
        options:["1.Numbers and strings","2.other arrays","3.booleans","4.all of the above"],
        answer:"4.all of the above",
    },
    {
        question:"String values must be enclosed within________when being assigned to variables",
        options:["1.commas","2.curly brackets","3. quotes","4.parentheses"],
        answer:"3. quotes",
    },
    {
        question:"A very useful tool used during development and debugging for printing content to the debugger",
        options:["1.JavaScript","2.terminal/bash","3.for loops","4.console.log"],
        answer:"4.console.log",
    },
    {
        question:"Was this an awesome quiz?!?!",
        options:["1.Yes","2.absolutley","3.I have not seen a better quiz","4.all of the above"],
        answer:"4.all of the above",
    }
];



function showCurrentQuestion() {
    
    var question=questions[currentQuestion];
    questionContainer.innerHTML="";

    var questionTitle=document.createElement("h1");
    questionTitle.innerText=question.question;
    questionContainer.appendChild(questionTitle);

    var optionsList=document.createElement("ul");

    for(var i=0;i<question.options.length;i++) {
        var questionLi=document.createElement("li");
        questionLi.innerText=question.options[i];
        optionsList.appendChild(questionLi);

    }
    questionContainer.appendChild(optionsList);
}
function showNextQuestion() {
    currentQuestion++
    var question=questions[currentQuestion];
    questionContainer.innerHTML="";

    var questionTitle=document.createElement("h1");
    questionTitle.innerText=question.question;
    questionContainer.appendChild(questionTitle);

    var optionsList=document.createElement("ul");

    for(var i=0;i<question.options.length;i++) {
        var questionLi=document.createElement("li");
        questionLi.innerText=question.options[i];
        optionsList.appendChild(questionLi);

    }
    questionContainer.appendChild(optionsList);
}


var time = document.getElementById("timer")




function timedCount() {
    time.innerText = currentTime
    if(currentTime>=0){
        currentTime--
    }else{
        time.innerText = "times Up"
        finishQuiz();
       
       
    }
} 


   // Set the interval to run every  second
    // - Update the time counter
    // - Check if the time ran out
    // - If the time ran out finishQuiz()

function startQuiz() {
   // Hide an element
  hideAfterTestBegins();
    showHighScores();
    showCurrentQuestion();
    timedCount();
    setInterval(timedCount,1000) 
}
function finishQuiz() {
    //Display the score
    //Store in the high scores if higher than previous score
    showAfterTestFinishes();
    hideAftertest();
    localStorage.setItem ("highscore", currentScore);
    localStorage.setItem ("initals", person);
    highScore.innerText = localStorage.getItem("highscore");
    userInitals.innerText = localStorage.getItem("initals");
    showHighScores() 
  
}
