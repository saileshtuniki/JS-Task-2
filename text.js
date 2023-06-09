let trids = [];

let userdetails = [
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
      name: "Chris",
      gender: "male",
      email: "Chris@gmail.com",
      city: "Delhi",
      phone: 99999999,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
      image:
        "https://cdn4.vectorstock.com/i/1000x1000/95/28/cartoon-male-teacher-vector-16659528.jpg",
      name: "Adam",
      gender: "male",
      email: "adam@gmail.com",
      city: "Mumbai",
      phone: 888888888,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
      image:
        "https://i.pinimg.com/originals/7f/68/fc/7f68fc74675dc2234ba931f826263cd3.jpg",
      name: "Swapna",
      gender: "female",
      email: "swapna@gmail.com",
      city: "Banglore",
      phone: 98989765431,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
      image: "https://wallpapercave.com/wp/wp7141936.jpg",
      name: "zoya",
      gender: "female",
      email: "zoya@gmail.com",
      city: "Hyderabad",
      phone: 98989876543,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
      name: "Raj",
      gender: "male",
      email: "Raj@gmail.com",
      city: "Bhopal",
      phone: 99999999,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
      image:
        "https://cdn4.vectorstock.com/i/1000x1000/95/28/cartoon-male-teacher-vector-16659528.jpg",
      name: "Sri",
      gender: "male",
      email: "Sri@gmail.com",
      city: "Vizag",
      phone: 888888888,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
      image:
        "https://i.pinimg.com/originals/7f/68/fc/7f68fc74675dc2234ba931f826263cd3.jpg",
      name: "Rajshree",
      gender: "female",
      email: "Rajshree@gmail.com",
      city: "Gurugram",
      phone: 98989765431,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
    {
      image: "https://wallpapercave.com/wp/wp7141936.jpg",
      name: "Raziya",
      gender: "female",
      email: "Raziya@gmail.com",
      city: "Hyderabad",
      phone: 98989876543,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
    },
  ];

let tempdata = userdetails;

function filterdata(data){  

      trids.forEach(function(ele){
      document.getElementById(ele).remove();
      });
      trids = [];
      
      if(data === 'male'){
        tempdata = userdetails.filter(function(ele){
          console.log("male")
          return ele.gender === 'male';
        })
      }
      else if(data === 'female'){
        tempdata = userdetails.filter(function(ele){
          console.log("female")
          return ele.gender === 'female';
        })
      } else {
        console.log("all")
        tempdata = userdetails;
      }

     
      showtable();
}


function showtable(){
    let tablerow = document.getElementById("row")
    let radiobuttonrow = document.getElementById("radiorow")
    let showbutton = document.getElementById("btn-show")
    let hidebutton = document.getElementById("btn-hide")
    let tablebody = document.getElementById("tbodyref")

   tempdata.map(function(element, index){
        //create the row
        let tr = document.createElement("tr")  

        tr.id = "tr" + (index + 1) //tr1,tr2,tr3....tr8//
        trids.push(tr.id)
        console.log(trids);

        let td0 = document.createElement("td")   
        let td1 = document.createElement("td")   
        let td2 = document.createElement("td")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        let td5 = document.createElement("td")
        let img = document.createElement("img")

        img.src= element.image
        img.width = 50
        img.height = 50

        //adding index number//
        td0.innerText = index + 1
        td1.appendChild(img)
        td2.innerText = element.name
        td3.innerText = element.gender
        td4.innerText = element.email
        td5.innerText = element.city

        tr.appendChild(td0)
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)

       tablebody.appendChild(tr)
       
    })

    radiobuttonrow.style.display = "block"
    radiobuttonrow.removeAttribute("style");
    tablerow.style.display = "block"
    hidebutton.disabled = false;
    showbutton.disabled = true;


    }

   


    function hidetable(){
      let tablerow = document.getElementById("row");
      let radiobuttonrow = document.getElementById("radiorow");
      let hidebutton = document.getElementById("btn-hide");
      let showbutton = document.getElementById("btn-show");

     
    

    //  trids.map(function(ele){
     trids.forEach(function(ele){
        document.getElementById(ele).remove()
     });


     tablerow.style.display = "none";
     radiobuttonrow.style.display = "none";
      hidebutton.disabled = true;
      showbutton.disabled = false;

      trids = [];

    }

    

// function hidetable(){
//     let hidebutton = document.getElementById("btn-hide")
//     let tablerow = document.getElementById("row")
//     let showbutton = document.getElementById("btn-show")
    
//    tablerow.style.display = "none"
//    hidebutton.disabled = true;
//    showbutton.disabled = false; 

// }



function getinputdata(){
    let inputdata = document.getElementById("exampleInput")
    let h2Ref = document.getElementById("h2ref")

    let inputvalue = inputdata.value
    h2Ref.innerText = inputvalue

    //It clears the data in text box 
    inputdata.value = ""
}

// CREATING HTML Elements dynamically Using DOM //

    let olref = document.createElement("ol")
    function displaylist(){
    let inputref1 = document.getElementById("Inputref")
    // let h2ref2 = document.getElementById("h2id")
    // h2ref2.remove()
    
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