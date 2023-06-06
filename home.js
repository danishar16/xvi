const btn = document.getElementById("mode")
var check = btn.classList.contains("active")
const body = document.querySelector("body")
const darkicon = document.getElementById("dark")
const lighticon = document.getElementById("light")
let switchMode = localStorage.getItem("switch")

if(switchMode && switchMode === "dark"){
    body.classList.remove("darkmode")
    btn.classList.add("active")
    darkicon.classList.remove("muncul")
    lighticon.classList.add("muncul")
}

btn.onclick = function(){
    darkicon.classList.toggle("muncul")
    lighticon.classList.toggle("muncul")
    btn.classList.toggle("active")
    body.classList.toggle("darkmode")
    
    if(btn.classList.contains("active")){
        return localStorage.setItem("switch", "dark")
    } else {
        return localStorage.setItem("switch", null)        
    }   

}

