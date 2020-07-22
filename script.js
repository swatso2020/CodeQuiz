//declare the variable and set it equal to HTML api. This will be linked to the html element with the matching id found between the ""
var startBtn = document.getElementById("start");
var endBtn =document.getElementById("end");
var pauseBtn = document.getElementById("Pause");
var nxt = document.getElementById("Next");
var prv = document.getElementById("previous");
var questContainer = document.getElementById("container");
var questTitle = document.createElement("h2");//Create the header element
var questList = document.createElement("ul");//list for questions
var listItem = document.createElement("li"); //creates entries for list
var testOps = document.getElementById("quiz");

var currentQuestion = 0//plqce holder for array positioning
var count = 0

//Delcare Quiz array with Questions, Options and Answers
var testQuestions=[{
    question:"question 1",
    options:["option 1","Opton 2"],
    answer:"answer 1"},{
    question:"question 2",
    options:"option 1,Opton 2",
    answer:"answer 2"},{
    question:"question 3",
    options:"option 1,Opton 2",
    answer:"answer 3"},{
    question:"question 4",
    options:"option 1,Opton 2",
    answer:"answer 4"}]




currentQuestion ++;//counter for position in the array
questTitle.innerHTML = testQuestions[currentQuestion].question// Set the title variable to be the result of the question oject in the test questions array
questContainer.appendChild(questTitle)// attach the questitle header tag variable to the div html
questTitle.appendChild(questList)//attaches the list tag to the header variable

//for(var i=0; i<testQuestions.options.length; i++){
listItem.innerHTML = testQuestions[currentQuestion].options[currentQuestion]
questList.appendChild(listItem)
 //   }




//document.getElementById("quiz") =testQuestions.questions[0]





    //add event listener to delcared variable. This will run a function when a button is clicked
startBtn.addEventListener("click",function(){
    count++;
})


//document.getElementById("test").value =testQuestions





//document.getElementById("title").innerHTML = 


function startButton(){
    alert("you hit the start button");
}


//var start = document.addEventListener("click")("start").onclick =


var end =  document.getElementById("End").onclick =
function endQuiz(){
    alert("you ended the quiz")

}
console.log(questContainer)
console.log(testQuestions.options.length)
console.log(questTitle)
console.log(currentQuestion)
//console.log(testQuestions[currentQuestion].options[0])
