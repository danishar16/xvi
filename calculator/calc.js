let angka, hapus;

document.getElementById("btn-0").onclick = function(){
    Display(0)
}
document.getElementById("btn-9").onclick = function(){
    Display(9)
}
document.getElementById("btn-8").onclick = function(){
    Display(8)
}
document.getElementById("btn-7").onclick = function(){
    Display(7)
}
document.getElementById("btn-6").onclick = function(){
    Display(6)
}
document.getElementById("btn-5").onclick = function(){
    Display(5)
}
document.getElementById("btn-4").onclick = function(){
    Display(4)
}
document.getElementById("btn-3").onclick = function(){
    Display(3)
}
document.getElementById("btn-2").onclick = function(){
    Display(2)
}
document.getElementById("btn-1").onclick = function(){
    Display(1)
}
document.getElementById("btn-00").onclick = function(){
    document.getElementById("display").innerHTML += "00"
}
document.getElementById("btn-.").onclick = function(){
    Display('.')
}

document.getElementById("btn-reset").onclick = function(){
    document.getElementById("display").innerHTML = ""
}
document.getElementById("btn-delete").onclick = function(){
    hapus = document.getElementById("display").innerHTML 
    hapus = hapus.substring(0, hapus.length-1)
    document.getElementById("display").innerHTML = hapus
}

function Display(numb){   
        angka = document.getElementById("btn-" + numb).innerHTML
        document.getElementById("display").innerHTML += angka
}


document.getElementById("btn-+").onclick = function(){
    if(document.getElementById("display").innerHTML.length > 0 && document.getElementById("display").innerHTML.indexOf('+') < 0 && document.getElementById("display").innerHTML.indexOf('-') < 0 && document.getElementById("display").innerHTML.indexOf('x') < 0 && document.getElementById("display").innerHTML.indexOf('/') < 0){
        Display('+')
    }
}
document.getElementById("btn--").onclick = function(){
    if(document.getElementById("display").innerHTML.length > 0 && document.getElementById("display").innerHTML.indexOf('+') < 0 && document.getElementById("display").innerHTML.indexOf('-') < 0 && document.getElementById("display").innerHTML.indexOf('x') < 0 && document.getElementById("display").innerHTML.indexOf('/') < 0){
        Display('-')
    }
}
document.getElementById("btn-*").onclick = function(){
    if(document.getElementById("display").innerHTML.length > 0 && document.getElementById("display").innerHTML.indexOf('+') < 0 && document.getElementById("display").innerHTML.indexOf('-') < 0 && document.getElementById("display").innerHTML.indexOf('x') < 0 && document.getElementById("display").innerHTML.indexOf('/') < 0){
        Display('*')
    }
}
document.getElementById("btn-/").onclick = function(){
    if(document.getElementById("display").innerHTML.length > 0 && document.getElementById("display").innerHTML.indexOf('+') < 0 && document.getElementById("display").innerHTML.indexOf('-') < 0 && document.getElementById("display").innerHTML.indexOf('x') < 0 && document.getElementById("display").innerHTML.indexOf('/') < 0){
        Display('/')
    }
}

document.getElementById("btn-=").onclick = function(){
    if (document.getElementById("display").innerHTML.indexOf('+') > -1 || document.getElementById("display").innerHTML.indexOf('-') > -1 || document.getElementById("display").innerHTML.indexOf('x') > -1 || document.getElementById("display").innerHTML.indexOf('/') > -1) {
        
    text = document.getElementById("display").innerHTML

    if(document.getElementById("display").innerHTML.indexOf('+') > -1) {
        result = text.split("+")
        resultDisplay = Number(result[0]) + Number(result[1])
    }
    if(document.getElementById("display").innerHTML.indexOf('-') > -1) {
        result = text.split("-")
        resultDisplay = Number(result[0]) - Number(result[1])
    }
    if(document.getElementById("display").innerHTML.indexOf('x') > -1) {
        result = text.split("x")
        resultDisplay = Number(result[0]) * Number(result[1])
    }
    if(document.getElementById("display").innerHTML.indexOf('/') > -1) {
        result = text.split("/")
        resultDisplay = Number(result[0]) / Number(result[1])
    }

    document.getElementById("display").innerHTML = resultDisplay
}
}

function operasi() {
    operan1 = Number(document.getElementById("display").innerHTML)
}