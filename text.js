function getinputdata(){
    let inputdata = document.getElementById("exampleInputEmail1")
    let h2Ref = document.getElementById("h2ref")

    let inputvalue = inputdata.value
    h2Ref.innerText = inputvalue

    //It clears the data in text box 
    inputdata.value = ""
}


//TASK - 2 SHOW / HIDE Pwd //

function showpassword(){
    
    let inputpassword = document.getElementById("Inputpwd")
    // inputpassword.type = "text"
    let showbutton = document.getElementById("show-hide")
    // showbutton.textContent = " hide "


    if(inputpassword.type === "password"){
        inputpassword.type = "text"
        showbutton.innerText = "hide"
    } else{
        inputpassword.type === "password"
        inputpassword.type = "password"
        showbutton.innerText = "show"
    }

}