//Call necessary classes/IDs and store them in variables for later use

//Make Start Quiz button hide the main menu elements and show the questions

//Add timer functionality, timer start linked to start quiz button

//Make questions detect right and wrong answers, wrong answers subtract time from the running timer, next question is shown after answer is submitted and user is notified of whether they were or were not correct

//Repeat for like 4 questions

//Quiz ends after all questions are finished or timer becomes 0

//Score is given and will prompt for initials to save the user's scores locally

var startButton = document.querySelector("#start")
var startScreen = document.querySelector("#start-screen")
var time = document.querySelector("#time")
var questions = document.querySelector("#questions")
var questionTitle = document.querySelector("#question-title")
var choices = document.querySelector("#choices")
var feedback = document.querySelector("#feedback")
var endScreen = document.querySelector("#end-screen")
var finalScore = document.querySelector("#final-score")

var choice1 = document.createElement("button")
var choice2 = document.createElement("button")
var choice3 = document.createElement("button")
var choice4 = document.createElement("button")

var timeLeft = 100

function startQuiz() {
startScreen.style.display = "none"
questions.style.display = "block"
questionTitle.textContent = "What is the"
choice1.innerHTML = "Answer"
choice2.innerHTML = "Answer"
choice3.innerHTML = "Answer"
choice4.innerHTML = "Answer"
choices.appendChild(choice1)
choices.appendChild(choice2)
choices.appendChild(choice3)
choices.appendChild(choice4)


choice1.addEventListener("click", function(){nextQuestion1()
wrongAnswer()})
choice2.addEventListener("click", function(){nextQuestion1()
rightAnswer()})
choice3.addEventListener("click", function(){nextQuestion1()
wrongAnswer()})
choice4.addEventListener("click", function(){nextQuestion1()
wrongAnswer()})
}

function nextQuestion1() {
choice1.innerHTML = "Answer2"
choice2.innerHTML = "Answer2"
choice3.innerHTML = "Answer2"
choice4.innerHTML = "Answer2"
choice1.removeEventListener("click", function(){nextQuestion1()
wrongAnswer()})
choice1.addEventListener("click", function(){nextQuestion2()
rightAnswer()})
choice2.removeEventListener("click", function(){nextQuestion1()
rightAnswer()})
choice2.addEventListener("click", function(){nextQuestion2()
wrongAnswer()})
choice3.removeEventListener("click", function(){nextQuestion1()
wrongAnswer()})
choice3.addEventListener("click", function(){nextQuestion2()
wrongAnswer()})
choice4.removeEventListener("click", function(){nextQuestion1()
wrongAnswer()})
choice4.addEventListener("click", function(){nextQuestion2()
wrongAnswer()
})
}


function nextQuestion2() {
choice1.innerHTML = "Answer3"
choice2.innerHTML = "Answer3"
choice3.innerHTML = "Answer3"
choice4.innerHTML = "Answer3"
choice1.removeEventListener("click", function(){nextQuestion2()
rightAnswer()})
choice1.addEventListener("click", function(){nextQuestion3()
wrongAnswer()})
choice2.removeEventListener("click", function(){nextQuestion2()
wrongAnswer()})
choice2.addEventListener("click", function(){nextQuestion3()
wrongAnswer()})
choice3.removeEventListener("click", function(){nextQuestion2()
wrongAnswer()})
choice3.addEventListener("click", function(){nextQuestion3()
wrongAnswer()})
choice4.removeEventListener("click", function(){nextQuestion2()
wrongAnswer()})
choice4.addEventListener("click", function(){nextQuestion3()
rightAnswer()
})
}
    
function nextQuestion3() {
choice1.innerHTML = "Answer4"
choice2.innerHTML = "Answer4"
choice3.innerHTML = "Answer4"
choice4.innerHTML = "Answer4"
choice1.removeEventListener("click", function(){nextQuestion3()
wrongAnswer()})
choice1.addEventListener("click", function(){rightAnswer()
endQuiz()
})
choice2.removeEventListener("click", function(){nextQuestion3()
wrongAnswer()})
choice2.addEventListener("click", function(){wrongAnswer()
endQuiz()
})
choice3.removeEventListener("click", function(){nextQuestion3()
wrongAnswer()})
choice3.addEventListener("click", function(){wrongAnswer()
endQuiz()
})
choice4.removeEventListener("click", function(){nextQuestion3()
rightAnswer()})
choice4.addEventListener("click", function(){wrongAnswer()
endQuiz()

})
}

function endQuiz() {
finalScore.textContent = timeLeft
endScreen.style.display = "block"
questions.style.display = "none"
}

function wrongAnswer() {
feedback.textContent = "incorrect"
feedback.style.display = "block"
timeLeft -= 10
}

function rightAnswer() {
    feedback.textContent = "correct"
    feedback.style.display = "block"
}

startButton.addEventListener("click", function(){startQuiz()});