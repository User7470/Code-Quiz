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
var timerH = setInterval(function() {
    timeLeft--
    time.textContent = timeLeft
    if (timeLeft === 0) {
        endQuiz() 
    }
}, 1000)

//question/answers 1
questionTitle.textContent = "Who is the creator of Javascript?"
choice1.innerHTML = "Will Smith"
choice2.innerHTML = "Brendan Eich"
choice3.innerHTML = "Steve Jobs"
choice4.innerHTML = "Donald Trump"
choices.appendChild(choice1)
choices.appendChild(choice2)
choices.appendChild(choice3)
choices.appendChild(choice4)


choice1.addEventListener("click", function(){timeRemove()
nextQuestion1()
wrongAnswer()
})
choice2.addEventListener("click", function(){nextQuestion1()
rightAnswer()})
choice3.addEventListener("click", function(){timeRemove()
nextQuestion1()
wrongAnswer()
})
choice4.addEventListener("click", function(){timeRemove()
nextQuestion1()
wrongAnswer()
})
function nextQuestion1() {
    //question/answers 2
    questionTitle.textContent = "Commonly used data types DO NOT include:"
    choice1.innerHTML = "alerts"
    choice2.innerHTML = "booleans"
    choice3.innerHTML = "strings"
    choice4.innerHTML = "numbers"
    choice1.addEventListener("click", function(){timeUndo()
    nextQuestion2()
    rightAnswer()
    })
    choice2.addEventListener("click", function(){timeRemove()
    nextQuestion2()
    wrongAnswer()})
    choice3.addEventListener("click", function(){
    nextQuestion2()
    wrongAnswer()})
    choice4.addEventListener("click", function(){nextQuestion2()
    wrongAnswer()
    })
    }
    
    
    function nextQuestion2() {
    //question/answers 3
    questionTitle.textContent = "Arrays in JavaScript can be used to store _________ "
    choice1.innerHTML = "numbers and strings"
    choice2.innerHTML = "other arrays"
    choice3.innerHTML = "booleans"
    choice4.innerHTML = "all of the above"
    choice1.addEventListener("click", function(){timeRemove()
    timeRemove2()
    nextQuestion3()
    wrongAnswer()
    })
    choice2.addEventListener("click", function(){timeUndo()
    nextQuestion3()
    wrongAnswer()})
    choice3.addEventListener("click", function(){
    nextQuestion3()
    wrongAnswer()})
    choice4.addEventListener("click", function(){timeUndo()
    nextQuestion3()
    rightAnswer()
    })
    }
        
    function nextQuestion3() {
    //question/answers 4
    questionTitle.textContent = "The condition in an if/else statement is enclosed within ________"
    choice1.innerHTML = "parentheses"
    choice2.innerHTML = "curly brackets"
    choice3.innerHTML = "quotes"
    choice4.innerHTML = "square brackets"
    choice1.addEventListener("click", function(){timeUndo()
    timeUndo2()
    timeUndo3()
    rightAnswer()
    nextQuestion4()
    })
    choice2.addEventListener("click", function(){timeRemove()
    wrongAnswer()
    nextQuestion4()
    })
    choice3.addEventListener("click", function(){
    wrongAnswer()
    nextQuestion4()
    })
    choice4.addEventListener("click", function(){timeRemove4()
    wrongAnswer()
    nextQuestion4()
    })
    }
    
    function nextQuestion4() {
     //question/answers 5
    questionTitle.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"
    choice1.innerHTML = "terminal/bash"
    choice2.innerHTML = "JavaScript"
    choice3.innerHTML = "console.log"
    choice4.innerHTML = "for loops"
    choice1.addEventListener("click", function(){timeRemove()
    timeRemove3()
    wrongAnswer()
    endQuiz()
    })
    choice2.addEventListener("click", function(){timeUndo()
    wrongAnswer()
    endQuiz()
    })
    choice3.addEventListener("click", function(){timeUndo()
    rightAnswer()
    endQuiz()
    })
    choice4.addEventListener("click", function(){timeUndo4()
    wrongAnswer()
    endQuiz()
    })
    }
    function endQuiz() {
        finalScore.textContent = timeLeft
        time.textContent = timeLeft
        clearInterval(timerH)
        endScreen.style.display = "block"
        questions.style.display = "none"
    }
}




function timeRemove() {
    timeLeft -= 10
}
function timeRemove2() {
    timeLeft -= 10
}
function timeRemove3() {
    timeLeft -= 70
}
function timeRemove4() {
    timeLeft -= 30
}
function timeUndo() {
    timeLeft += 10
}
function timeUndo2() {
    timeLeft += 10
}
function timeUndo3() {
    timeLeft += 20
}
function timeUndo4() {
    timeLeft += 60
}
function wrongAnswer() {
feedback.textContent = "incorrect"
feedback.style.display = "block"
}

function rightAnswer() {
    feedback.textContent = "correct"
    feedback.style.display = "block"
}

startButton.addEventListener("click", function(){startQuiz()});