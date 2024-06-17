// login section
var stdLogin = document.getElementById("stdLogin")
var stdName = document.getElementById("stdName")
var stdRollNumber = document.getElementById("stdRollNumber")
var nameError = document.getElementById("nameError")
var rollNumbererror = document.getElementById("rollNumbererror")
// btn start 
var startbtn = document.getElementById("startbtn")
// quiz Container
var quizContainer = document.getElementById("quizContainer")
var layout = document.getElementById("layout")
var quizSecStdDta = document.getElementById("quizSecStdDta")
var nameOfStd = document.getElementById("nameOfStd")
var rollNmuberOfStd = document.getElementById("rollNmuberOfStd")
var quizAndTime = document.getElementById("quizAndTime")
var quizTime = document.getElementById("quizTime")
var quizTimer;
var qiuzUI = document.getElementById("qiuzUI")
var Quizquiestion = document.getElementById("Quizquiestion")
var quiestion = document.getElementById("quiestion")
var quizOptions = document.getElementById("quizOptions")
var quizLI = document.getElementById("quizLI")
var footer = document.getElementById("footer")
var conter = document.getElementById("conter")
var count = document.getElementById("count")
var total = document.getElementById("total")
var nextBtn = document.getElementById("nextBtn")
var nextbuttonup = document.getElementById("nextbuttonup")


// variable section

// timing(console.log())
// fnc section



/// quiz section;

var quiestionQuiz = [
    {
        id: 1,
        quiestion: "who is dark color",
        option: {
            a: "yellow 1",
            b: "yellow 1",
            c: "yellow 1",
            d: "yellow 1",
        },
        answer: "yellow 1"
    },
    {
        id: 2,
        quiestion: "who is simple color",
        option: {
            a: "apple 2",
            b: "apple 2",
            c: "apple 2",
            d: "apple 2",
        },
        answer: "apple 2"
    },
    {
        id: 3,
        quiestion: "who is extra dark color",
        option: {
            a: "black 3",
            b: "black",
            c: "blak 3",
            d: "blck",
        },
        answer: "black 3"
    },
    {
        id: 4,
        quiestion: "who is sabz color",
        option: {
            a: "Banana 4",
            b: "Banana 4",
            c: "Banana 4",
            d: "Banana 4",
        },
        answer: "Banana 4"
    }
];

// console.log(quiestionQuiz)

// timing fnc
// var time;
// var timeCounter = 0;

// function en(){
//     timeCounter++
//     quizTime.innerHTML = timeCounter
// }
timerInterval = 0
// Get the element where the timer will be displayed
const timerElement = quizTime;

// Set the initial time (in seconds)
var timeRemaining = 59;

// Function to update the timer every second
function updateTimer() {
    // Display the current time
    timerElement.textContent = timeRemaining;

    // Decrease the time by 1
    timeRemaining--;

    // Check if time has run out
    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
    }
}

// Call the updateTimer function every 1 second (1000 milliseconds)


// quiz header

nameOfStd.innerHTML = localStorage.getItem("student Name")
rollNmuberOfStd.innerHTML = localStorage.getItem("student Roll Number")


// var quizTimer = 
// quiestion quiz
// quiestion.innerHTML = "Html is a good way"
// quizOptions.innerHTML = "red"
// footer


var correct;
var wrong;
var emptyString = 0
total.innerHTML = quiestionQuiz.length

// key of object

// var optQuiz = quiestionQuiz[emptyString].option;
// console.log(optQuiz)



// START Quiz
/// start button
function quizStart() {
    // time = setInterval(en, 10);
    var timerInterval = setInterval(updateTimer, 1000);
    startbtn.style.display = "none"
    quizContainer.className = "show"


    quiestion.innerHTML = quiestionQuiz[emptyString].quiestion;
    // console.log(emptyString)
    nextbuttonup.className = "hide"
    quizLI.innerHTML = ""

    for (var key in quiestionQuiz[emptyString].option) {

        // console.log(key ,quiestionQuiz[emptyString].quiestion)

        var optionsHtml = quiestionQuiz[emptyString].option[key]
        quizLI.innerHTML += `<li onclick="liHover(this)" id="quizList">${optionsHtml}</li>`


    }

    // 
    // console.log(emptyString++)

}

// NEXT BUTTON

function next(eleme) {
    if (emptyString < quiestionQuiz.length - 1) {
        count.innerHTML++
        emptyString++

    } else {
        quizContainer.style.display = "none"

    }
    quizStart()
}

function liHover(par) {



    nextbuttonup.className = "show";
    var listItem = quizLI.getElementsByTagName("li")
    var quizList = document.getElementById("quizList")
    // console.log(quizList)

    if (par.innerHTML == quiestionQuiz[emptyString].answer) {
        quizList.style.background = "green"
        // listItem.style.pointerEvents ="none"
        // console.log("macth")
    } else {
        // par.style.pointerEvents = "none";
        par.style.backgroundColor = "red"
        // console.log("no Macth")
    }

    for (var par of listItem) {
        if (par.innerHTML == quiestionQuiz[emptyString].answer) {
            quizList.style.background = "green"
            // console.log("correct Answer")

        }
    }
    for (var par of listItem) {
        // console.log(par)
        par.style.pointerEvents = "none"
        // li.style.cursor = "no-drop !important"
    }

    // show next Ques btn  the selection
    // nextQuesBtn.className = "show"

    // console.log(quiestionQuiz[emptyString].answer)


    // quizList.style.backgroundColor ="blue"
}
// fnc section

