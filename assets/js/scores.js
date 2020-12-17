var highscores = document.querySelector("#highscores")
var clearButton = document.querySelector("#clear")

var score = document.createElement("li")

if (localStorage.getItem("score") !== null) {
score.appendChild(document.createTextNode(localStorage.getItem("Initials") + ": " + localStorage.getItem("score")))
highscores.appendChild(score)
}
function clear(){
localStorage.removeItem("score");
localStorage.removeItem("Initials");
}
clearButton.addEventListener("click", clear())