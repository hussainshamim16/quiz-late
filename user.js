       // student form data 
       var atag = document.getElementById("atag")
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
            atag.href="user.html"
            rollNumbererror.className = "hide";
            stdLogin.style.display = "none"
            // startbtn.style.display = "block"
            console.log("solve")
            
            
           localStorage.setItem("student Name", stdName.value)
            localStorage.setItem("student Roll Number", stdRollNumber.value)
                stdName.value = ""
                stdRollNumber.value = ""
        }
    }