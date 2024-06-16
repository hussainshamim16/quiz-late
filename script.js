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
function quizStart(){
    startbtn.style.display = "none"
}
/// quiz section;
// quiz header
nameOfStd.innerHTML = localStorage.getItem("student Name")
rollNmuberOfStd.innerHTML = localStorage.getItem("student Roll Number")
quizTime.innerHTML = "01:00";
// quiestion quiz
quiestion.innerHTML = "Html is a good way"
// quizOptions.innerHTML = "red"
// footer
count.innerHTML = "1"
total.innerHTML = "7"
// next Quiz
function next(){
    console.log("red")
}
// fnc section

