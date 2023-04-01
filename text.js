// function getinputdata(){
//     let inputdata = document.getElementById("exampleInput")
//     let h2Ref = document.getElementById("h2ref")

//     let inputvalue = inputdata.value
//     h2Ref.innerText = inputvalue

//     //It clears the data in text box 
//     inputdata.value = ""
// }

// CREATING HTML Elements dynamically Using DOM //

    let olref = document.createElement("ol")
    function displaylist(){
    let inputref1 = document.getElementById("Inputref")
    
    let userdata = inputref1.value 
    
    // let olref = document.createElement("ol")

    let liref = document.createElement("li")

    liref.innerText = userdata

    olref.appendChild(liref) 
  
    document.getElementById("inputdiv1").appendChild(olref)
    //It clears the data in text box 
    inputref1.value = " "
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

//Darkmode Function//

function theamChange(){
    let darktheam = document.getElementById("check-btn")
    let divdark = document.getElementById("cardhead")
    let title = document.getElementById("modetitle")
    let texttheam = document.getElementById("textcolor")
    let profilebutton = document.getElementById("profile-btn")
    // let checkbutton = document.querySelector("#check-btn")
     
    if(darktheam.checked ){
        //If checked
        console.log("checked")
        divdark.style.backgroundColor= "black"
        texttheam.style.color = "white"   
        title.style.color = "white"
        profilebutton.style.backgroundColor = "Orange"   
         
    }else{
        //If unCheck
        console.log("not checked")
        divdark.style.backgroundColor = "white"
        texttheam.style.color = "black"
        title.style.color = "black"
        profilebutton.style.backgroundColor = "white" 
    }


}