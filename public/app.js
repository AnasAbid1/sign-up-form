function darkMode(e){
    var mainBody = document.getElementById("mainBody")
    mainBody.style.backgroundColor = "#040D21"

    if(e.innerHTML === "DARK MODE"){
        e.innerHTML = "LIGHT MODE"
        mainBody.style.backgroundColor = "#040D21"
        mainBody.style.color = "#040D21"
        
    }else{
        e.innerHTML = "DARK MODE"
        mainBody.style.backgroundColor = "white"
        
    }}

function showPass(e){
    var passInput= document.getElementById("password");
    console.log(e.className)
    if(e.className === "far fa-eye-slash"){
        e.className = "far fa-eye" 
        passInput.type = "text" 
    }else{
        e.className = "far fa-eye-slash"
        passInput.type = "password  " 

    }
}