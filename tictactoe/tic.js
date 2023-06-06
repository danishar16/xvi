let pvp = document.getElementById("pvp")
let pvb = document.getElementById("pvb")
let spaces = 9

pvp.onclick = function (){
    document.getElementById("play-board").style.display = "flex"
    document.getElementById("before-board").style.display = "none"
    document.getElementById("after-board").style.display = "none"

    function X(){

        document.getElementById("box1").onclick = function (){
            flipX(1)
        }
        document.getElementById("box2").onclick = function (){
            flipX(2)
        }
        document.getElementById("box3").onclick = function (){
            flipX(3)
        }
        document.getElementById("box4").onclick = function (){
            flipX(4)
        }
        document.getElementById("box5").onclick = function (){
            flipX(5)
        }
        document.getElementById("box6").onclick = function (){
            flipX(6)
        }
        document.getElementById("box7").onclick = function (){
            flipX(7)
        }
        document.getElementById("box8").onclick = function (){
            flipX(8)
        }
        document.getElementById("box9").onclick = function (){
            flipX(9)
        }

    }

        function O(){
        document.getElementById("box1").onclick = function (){
            flipO(1)
        }
        document.getElementById("box2").onclick = function (){
            flipO(2)
        }
        document.getElementById("box3").onclick = function (){
            flipO(3)
        }
        document.getElementById("box4").onclick = function (){
            flipO(4)
        }
        document.getElementById("box5").onclick = function (){
            flipO(5)
        }
        document.getElementById("box6").onclick = function (){
            flipO(6)
        }
        document.getElementById("box7").onclick = function (){
            flipO(7)
        }
        document.getElementById("box8").onclick = function (){
            flipO(8)
        }
        document.getElementById("box9").onclick = function (){
            flipO(9)
        }
    }
    function flipX(evt) {
        if(document.getElementById("box" + evt).innerHTML != "X" &&  document.getElementById("box" + evt).innerHTML != "O"){
            document.getElementById("box" + evt).style.color = "rgb(137, 200, 222)"
            document.getElementById("box" + evt).innerHTML = "X"
            O()
            draw()
            check()
        }
    }
    function flipO(evt) {
        if(document.getElementById("box" + evt).innerHTML != "X" &&  document.getElementById("box" + evt).innerHTML != "O"){
            document.getElementById("box" + evt).style.color = "rgb(241, 80, 80)"
            document.getElementById("box" + evt).innerHTML = "O"
            X()
            draw()
            check()
        }
    }
X()
}


pvb.onclick = function (){
    document.getElementById("play-board").style.display = "flex"
    document.getElementById("before-board").style.display = "none"
    document.getElementById("after-board").style.display = "none"

    function X(){

        document.getElementById("box1").onclick = function (){
            flipX(1)
        }
        document.getElementById("box2").onclick = function (){
            flipX(2)
        }
        document.getElementById("box3").onclick = function (){
            flipX(3)
        }
        document.getElementById("box4").onclick = function (){
            flipX(4)
        }
        document.getElementById("box5").onclick = function (){
            flipX(5)
        }
        document.getElementById("box6").onclick = function (){
            flipX(6)
        }
        document.getElementById("box7").onclick = function (){
            flipX(7)
        }
        document.getElementById("box8").onclick = function (){
            flipX(8)
        }
        document.getElementById("box9").onclick = function (){
            flipX(9)
        }

    }
    function Xawal(){
    if(spaces == 9){
        document.getElementById("box1").onclick = function (){
            flipX(1)
        }
        document.getElementById("box2").onclick = function (){
            flipX(2)
        }
        document.getElementById("box3").onclick = function (){
            flipX(3)
        }
        document.getElementById("box4").onclick = function (){
            flipX(4)
        }
        document.getElementById("box5").onclick = function (){
            flipX(5)
        }
        document.getElementById("box6").onclick = function (){
            flipX(6)
        }
        document.getElementById("box7").onclick = function (){
            flipX(7)
        }
        document.getElementById("box8").onclick = function (){
            flipX(8)
        }
        document.getElementById("box9").onclick = function (){
            flipX(9)
        }
    }
    }

    function flipX(evt) {
        if(document.getElementById("box" + evt).innerHTML != "X" &&  document.getElementById("box" + evt).innerHTML != "O"){
            document.getElementById("box" + evt).style.color = "rgb(137, 200, 222)"
            document.getElementById("box" + evt).innerHTML = "X"
            flipO()
            check()
            spaces -= 1
        }
    }
    function flipO() {
        if(spaces != 1){
            let tile = Math.floor(Math.random() * 9)
            if(tile != 0){
                if(document.getElementById("box" + tile).innerHTML != "X" &&  document.getElementById("box" + tile).innerHTML != "O"){
                    document.getElementById("box" + tile).style.color = "rgb(241, 80, 80)"
                    document.getElementById("box" + tile).innerHTML = "O"
                    X()
                    draw()
                    check()
                    spaces -= 1
                } else {
                    flipO()
                    draw()
                    check()
                }
            } else {
                flipO()
            }
        } else {
            draw()
        }
    }
Xawal()
}




function check(){
        //check X
        if(document.getElementById("box1").innerHTML == "X" && document.getElementById("box" + 2).innerHTML == "X" && document.getElementById("box" + 3).innerHTML == "X"){
            finish("X")
        }
        if(document.getElementById("box4").innerHTML == "X" && document.getElementById("box" + 5).innerHTML == "X" && document.getElementById("box" + 6).innerHTML == "X"){
            finish("X")
        }
        if(document.getElementById("box7").innerHTML == "X" && document.getElementById("box" + 8).innerHTML == "X" && document.getElementById("box" + 9).innerHTML == "X"){
            finish("X")
        }
        if(document.getElementById("box"+1).innerHTML == "X" && document.getElementById("box" + 4).innerHTML == "X" && document.getElementById("box" + 7).innerHTML == "X"){
            finish("X")
        }
        if(document.getElementById("box"+2).innerHTML == "X" && document.getElementById("box" + 5).innerHTML == "X" && document.getElementById("box" + 8).innerHTML == "X"){
            finish("X")
        }
        if(document.getElementById("box"+3).innerHTML == "X" && document.getElementById("box" + 6).innerHTML == "X" && document.getElementById("box" + 9).innerHTML == "X"){
            finish("X")
        }
        if(document.getElementById("box"+1).innerHTML == "X" && document.getElementById("box" + 5).innerHTML == "X" && document.getElementById("box" + 9).innerHTML == "X"){
            finish("X")
        }
        if(document.getElementById("box"+3).innerHTML == "X" && document.getElementById("box" + 5).innerHTML == "X" && document.getElementById("box" + 7).innerHTML == "X"){
            finish("X")
        }
        
        
        //check O
        if(document.getElementById("box1").innerHTML == "O" && document.getElementById("box" + 2).innerHTML == "O" && document.getElementById("box" + 3).innerHTML == "O"){
            finish("O")
        }
        if(document.getElementById("box4").innerHTML == "O" && document.getElementById("box" + 5).innerHTML == "O" && document.getElementById("box" + 6).innerHTML == "O"){
            finish("O")
        }
        if(document.getElementById("box7").innerHTML == "O" && document.getElementById("box" + 8).innerHTML == "O" && document.getElementById("box" + 9).innerHTML == "O"){
            finish("O")
        }
        if(document.getElementById("box"+1).innerHTML == "O" && document.getElementById("box" + 4).innerHTML == "O" && document.getElementById("box" + 7).innerHTML == "O"){
            finish("O")
        }
        if(document.getElementById("box"+2).innerHTML == "O" && document.getElementById("box" + 5).innerHTML == "O" && document.getElementById("box" + 8).innerHTML == "O"){
            finish("O")
        }
        if(document.getElementById("box"+3).innerHTML == "O" && document.getElementById("box" + 6).innerHTML == "O" && document.getElementById("box" + 9).innerHTML == "O"){
            finish("O")
        }
        if(document.getElementById("box"+1).innerHTML == "O" && document.getElementById("box" + 5).innerHTML == "O" && document.getElementById("box" + 9).innerHTML == "O"){
            finish("O")
        }
        if(document.getElementById("box"+3).innerHTML == "O" && document.getElementById("box" + 5).innerHTML == "O" && document.getElementById("box" + 7).innerHTML == "O"){
            finish("O")
        }

}

function finish(winner){
    document.getElementById("play-board").style.display = "none"
    document.getElementById("before-board").style.display = "none"
    document.getElementById("after-board").style.display = "flex"
    document.getElementById("final"). innerHTML = "The Winner is ("+winner+")"
}

document.getElementById("restart").onclick = function(){
    location.reload();
    return false
}

function draw() {
    let space = 9
    for(let i = 1; i<=9; i++){
        if(document.getElementById("box" + i).innerHTML == "O" || document.getElementById("box" + i).innerHTML == "X"){
            space -=1
        }
    }
    
    if(space==0){
        document.getElementById("play-board").style.display = "none"
        document.getElementById("before-board").style.display = "none"
        document.getElementById("after-board").style.display = "flex"
        document.getElementById("final"). innerHTML = "Draw"
    }
}