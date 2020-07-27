//Declare Variables
var currentQuestion=0;
var currentScore=0;
var currentTime=10;
var nextBtn =document.getElementById("next")
var questionContainer=document.getElementById("QuestionContainer");
var startBtn = document.getElementById("start")
var stopBtn =document.getElementById("finish")
var interval;
var checkAnswer = document.getElementById("check")
var currScore = document.getElementById("currScore")
var highScore = document.getElementById("highScore")
var person = prompt("Enter your initials")


startBtn.addEventListener("click",startQuiz)
nextBtn.addEventListener("click",showNextQuestion)
stopBtn.addEventListener("click",finishQuiz)


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
        
        if(currentQuestion>=questions.length) {
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
}


 function hideBeforeTestBegins(){
    checkAnswer.style.display ='none';

 }
function hideAfterTestBegins(){
startBtn.style.display = 'none';

 }
 function showHidden(){
checkAnswer.style.display ='block';
 }
function finishQuiz() {
    //Display the score
    //Store in the high scores if higher than previous score
    highScore.innerText = localStorage.getItem("highscore");
    localStorage.setItem ("highscore", currentScore);
    input
    
  
}

var questions=[
    {
        question:"What is your name?",
        options:["john doe","jack sparrow"],
        answer:"john doe"
    },
    {
        question:"What is your lastname?",
        options:["something","something else"],
        answer:"something"
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
        time.innerText = "time out"
       
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
