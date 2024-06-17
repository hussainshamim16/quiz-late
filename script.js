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
var tryAgain = document.getElementById("tryAgain")
// resultUI

var resultUI = document.getElementById("resultUI")
var persontage = document.getElementById("persontage")
var result = document.getElementById("result")
var fo = resultUI.getElementsByTagName("form")[0]
// variable section

// timing(console.log())
// fnc section



/// quiz section;

var quiestionQuiz = [
    {
        id: 1,
        quiestion: "What is JavaScript primarily used for ?",
        option: {
            a: "Server side scripting",
            b: "Adding interactivity to web pages",
            c: "Managing databases",
            d: "Creating static web pages",
        },
        answer: "Adding interactivity to web pages"
    },
    {
        id: 2,
        quiestion: "Which operator checks for both value and type equality",
        option: {
            a: "==",
            b: "=",
            c: "===",
            d: "==!",
        },
        answer: "==="
    },
    {
        id: 3,
        quiestion: "How do you declare a variable that cannot be reassigned in Javascript",
        option: {
            a: "const",
            b: "let",
            c: "static",
            d: "var",
        },
        answer: "const"
    },
    {
        id: 4,
        quiestion: "How do you access the property name of the object person",
        option: {
            a: "name.person",
            b: "person->name",
            c: "person[name]",
            d: "person.name",
        },
        answer: "person.name"
    },
    {
        id: 5,
        quiestion: "Where can a variable declared with let be accessed",
        option: {
            a: "Within the function it is declared",
            b: "Within the block it is declared",
            c: "Anywhere in the program",
            d: "Globally",
        },
        answer: "Within the block it is declared"
    },
    {
        id: 6,
        quiestion: "How do you write 'Hello, World!' in an alert box in JavaScript",
        option: {
            a: 'alertBox("Hello, World!");',
            b: 'alert("Hello, World!");',
            c: 'message("Hello, World!")',
            d: 'msg("Hello, World!");',
        },
        answer: 'alert("Hello, World!");'
    },
    {
        id: 7,
        quiestion: "Which data type is NOT a primitive type in JavaScript",
        option: {
            a: "String",
            b: "Object",
            c: "Boolean",
            d: "Number",
        },
        answer: "Object"
    },
    {
        id: 8,
        quiestion: "How do you create a variable in JavaScript",
        option: {
            a: "var",
            b: "let",
            c: "const",
            d: "All of the above",
        },
        answer: "All of the above"
    },
    {
        id: 9,
        quiestion: 'What is the result of the expression 5 + "5" in JavaScript',
        option: {
            a: "10",
            b: "'10'",
            c: "55",
            d: '"55"',
        },
        answer: '"55"'
    },
    {
        id: 10,
        quiestion: "How do you add a new element to the end of an array",
        option: {
            a: "add",
            b: "push",
            c: "append",
            d: "insert",
        },
        answer: "push"
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

// timer 
timerInterval = 0

const timerElement = quizTime;
var timeRemaining = 60;

function updateTimer() {
    timerElement.textContent = timeRemaining;
    timeRemaining--;

    if (timeRemaining < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = "Time's up!";
        quizContainer.innerHTML = "Time Up";
        

        // quizContainer.style.border = "1px solid red"
        quizContainer.style.fontSize = "2rem"
        quizContainer.style.color = "#fdbe34"
        quizContainer.style.fontWeight = "bold"
        quizContainer.style.textTransform = "uppercase"
        quizContainer.style.fontFamily = "'Jost', sans-serif";
        quizContainer.style.textAlign = "center"
        var button = document.createElement("a")
        button.style.width = "20%"
        button.style.fontSize = "18px"
        button.style.textDecoration = "none"
        button.style.color = "black"
        button.style.margin = "0px auto"
        button.style.backgroundColor = "#fdbe34"
        button.style.border = "none"
        button.style.padding = "10px 20px"
        button.style.borderRadius = "20px"
        button.style.cursor = "pointer"
        // button.setAttribute("onClick","ret(this)")
        button.href = "./same.html"
        button.innerHTML = "Return"
        quizContainer.appendChild(button)
        return
    }

}

// function ret(rate){
//     rate.
// }


var timerInterval = setInterval(updateTimer, 1000);

// timer --------------- 


// quiz header

nameOfStd.innerHTML = localStorage.getItem("student Name").toUpperCase()
rollNmuberOfStd.innerHTML = localStorage.getItem("student Roll Number")


// var quizTimer = 
// quiestion quiz
// quiestion.innerHTML = "Html is a good way"
// quizOptions.innerHTML = "red"
// footer


// var correct = 0;
// var wrong = 0;
// console.log(correct)
// console.log(wrong)
var emptyString = 0
total.innerHTML = quiestionQuiz.length

// key of object

// var optQuiz = quiestionQuiz[emptyString].option;
// console.log(optQuiz)



// START Quiz
/// start button
function quizStart() {
    // time = setInterval(en, 10);

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
  var correctAnsCount = 0
    var wrongAnsCount = 0
  
function next(eleme) {
    if (emptyString < quiestionQuiz.length - 1) {
        count.innerHTML++
        emptyString++

    } else {
        quizContainer.style.display = "none"
        resultUI.className = "show"

    }
    quizStart()
}

// console.log(correct) 
// console.log(wrong)   
function liHover(par) {

  
    // NEXT BUTTON

    nextbuttonup.className = "show";
    var listItem = quizLI.getElementsByTagName("li")
    var quizList = document.getElementById("quizList")
    var ans = quiestionQuiz[emptyString].answer;
    // console.log(ans)
    // console.log(quizList)

    if (par.innerHTML == ans) {
        // listItem.style.pointerEvents ="none"
        par.style.background = "#0004ff9f"
        // console.log("macth")
        correctAnsCount++
    } else {
        // par.style.pointerEvents = "none";
        par.style.backgroundColor = "#ff00009f"
        // console.log("no Macth")
        wrongAnsCount++
    }

    for (var par of listItem) {
        if (par.innerHTML == quiestionQuiz[emptyString].answer) {

            par.style.background = "#0004ff9f"
            // console.log("correct Answer" , quiestionQuiz[emptyString].answer)

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


    // console.log("correct", correctAnsCount, "wrong", wrongAnsCount)

    // quizList.style.backgroundColor ="blue"
    // console.log("correct",correctAnsCount +" "+"wrong",wrongAnsCount)
    if(correctAnsCount >= 7){
        persontage.innerHTML = "70%";
        result.innerText = 'PASS';
    }
    else{
        persontage.innerHTML = "30%";
        result.innerText = 'FAIL';
    }
    switch (correctAnsCount) {
        case 1:
            persontage.innerHTML = "10%";
            result.innerText = 'FAIL 😭';
            result.style.color = "red"
            break;
        case 2:
            persontage.innerHTML = "20%";
            result.innerText = 'FAIL 😫';
            result.style.color = "red"
            break;
        case 3:
            persontage.innerHTML = "30%";
            result.innerText = 'FAIL 😓';
            result.style.color = "red"
            break;
        case 4:
            persontage.innerHTML = "40%";
            result.innerText = 'FAIL 😥';
            result.style.color = "red"
            break;
        case 5:
            persontage.innerHTML = "50%";
            result.innerText = 'PASS 😊';
            result.style.color = "#fffddc"
            tryAgain.innerHtml = "blue"
            break;
        case 6:
            persontage.innerHTML = "60%";
            result.innerText = 'PASS 😚';
            result.style.color = "#fffddc"
            tryAgain.innerHtml = "blue"
            break;
        case 7:
            persontage.innerHTML = "70%";
            result.innerText = 'PASS NICE! 🙂';
            result.style.color = "#fffddc"
            tryAgain.innerText = "Return"
            break;
        case 8:
            persontage.innerHTML = "80%";
            result.innerText = 'PASS GOOD JOB 🤗';
            result.style.color = "#fffddc"
            tryAgain.innerText = "Return"
            break;
        case 9:
            persontage.innerHTML = "90%";
            result.innerText = 'PASS VERY GOOD 🤩';
            result.style.color = "#fffddc"
            tryAgain.innerText = "Return"
            break;
        case 10:
            persontage.innerHTML = "100%";
            result.innerText = 'PASS EXELLENT 😎';
            result.style.color = "#fffddc"
            tryAgain.innerText = "Return"
            break;
    
        default:
            break;
    }
 
}


// fnc section
// resultUI
resultUI.style.textAlign = "center"

function returnn() {
    // resultUI.className = "hide"
    // // console.log("show")
    // startbtn.style.display ="block"
    fo.action = "./same.html"
}