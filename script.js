// variable section
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

// fnc section

// student form data 
function stdSumbit(element) {
    if (!stdName.value) {
        console.log("error")
        nameError.className = "show"
        return
    } else {
        console.log("solve")
        nameError.className = "hide"
    }
    if (!stdRollNumber.value) {
        console.log("error")
        rollNumbererror.className = "show"
        return
    } else {
        localStorage.setItem("student Name", stdName.value)
        localStorage.setItem("student Roll Number", stdRollNumber.value)
        stdName.value = ""
        stdRollNumber.value = ""
        console.log("solve")
        rollNumbererror.className = "hide";
        stdLogin.style.display = "none"
        startbtn.className = "show"

    }

}
/// start button
function quizStart() {
    startbtn.style.display = "none"
}
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
            b: "black 3",
            c: "black 3",
            d: "black 3",
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


// quiz header
nameOfStd.innerHTML = localStorage.getItem("student Name")
rollNmuberOfStd.innerHTML = localStorage.getItem("student Roll Number")
quizTime.innerHTML = "01:00";
// quiestion quiz
// quiestion.innerHTML = "Html is a good way"
// quizOptions.innerHTML = "red"
// footer


var correct;
var wrong;
var emptyString = 0;
total.innerHTML = quiestionQuiz.length + 1

// console.log(quiestion)
// next Quiz
function start() {
    quiestion.innerHTML = quiestionQuiz[emptyString].quiestion;
    nextbuttonup.className = "hide"
    quizLI.innerHTML = ""

    for (var key in quiestionQuiz[emptyString].option) {

        // console.log(key ,quiestionQuiz[emptyString].quiestion)

        var optionsHtml = (quiestionQuiz[emptyString].option[key])
        quizLI.innerHTML += `<li onclick="liHover(this)" id="quizList">${optionsHtml}</li>`


    }

    // 
    // console.log(emptyString++)

}
function next(eleme) {
    if (emptyString < quiestionQuiz.length - 1) {
        emptyString++
        count.innerHTML = emptyString + 1

    } else {
        quizContainer.style.display = "none"

    }
    start()
}
function liHover(par) {
    nextbuttonup.className = "show";
    if (par.innerHTML == quiestionQuiz[emptyString].answer) {
        quizList.style.pointerEvents = "none"
        var quizList = document.getElementById("quizList")
        console.log("macth")
    } else {
        console.log("no Macth")
    }
    // console.log(quiestionQuiz[emptyString].answer)


}
// fnc section

