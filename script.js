//declare the variable and set it equal to HTML api. This will be linked to the html element with the matching id found between the ""
var startBtn = document.getElementById("start")
var endBtn =document.getElementById("end")
var pauseBtn = document.getElementById("Pause")
var nxt = document.getElementById("Next")
var prv = document.getElementById("previous")
var count = 0

//add event listener to delcared variable. This will run a function when a button is clicked
startBtn.addEventListener("click",function(){
    count++;
})

var testQuestions=["what is the capital of Jamaica?","what is the capital of brazil","what is capital of florida"];
document.getElementById("test").value =testQuestions


function changeTestQuestion(){

}
function startButton(){
    alert("you hit the start button");
}


var start = document.addEventListener("click")("start").onclick =


var end =  document.getElementById("End").onclick =
function endQuiz(){
    alert("you ended the quiz")

}

console.log(testQuestions[0])

