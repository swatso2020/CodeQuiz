
var currentQuestion=0;
var currentScore=0;
var currentTime=45;
var interval;
var questionContainer=document.getElementById("container")
document.innerHTML = "work"



function showHighScores() {
    //Retrieve high scores
    //Display high scores
}

function finishQuiz() {
    clearInterval(interval);
    //Display the score
    //Store in the high scores if higher than previous score
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
    questionContainer.innerHTML="hello";

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

function startQuiz() {
    showCurrentQuestion();
    // Set the interval to run every  second
    // - Update the time counter
    // - Check if the time ran out
    // - If the time ran out finishQuiz()
}
