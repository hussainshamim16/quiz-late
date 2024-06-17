       // student form data 
       var form = document.getElementsByTagName("form")[0]
    //    console.log(form.style.background= "red")
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
            
            rollNumbererror.className = "hide";
            stdLogin.style.display = "none"
            // startbtn.style.display = "block"
            console.log("solve")
            
            
           localStorage.setItem("student Name", stdName.value)
            localStorage.setItem("student Roll Number", stdRollNumber.value)
                stdName.value = ""
                stdRollNumber.value = ""
                form.action ="/index.html"
        }
    }