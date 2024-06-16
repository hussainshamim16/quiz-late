// variable section
var stdLogin = document.getElementById("stdLogin")
var stdName = document.getElementById("stdName")
var stdRollNumber = document.getElementById("stdRollNumber")
var nameError = document.getElementById("nameError")
var rollNumbererror = document.getElementById("rollNumbererror")
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

    }

}

// fnc section

