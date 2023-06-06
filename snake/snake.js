var boxSize = 20
var rows = 20
var cols = 20

var snakeX = boxSize * 5
var snakeY = boxSize * 5

var foodX
var foodY 

var snakeBody = []

var speed = 1

var velo = 5

velocityX = 0
velocityY = 0

var screen;
var context;
var gameOver = false


window.onload = function load() {
    screen = document.getElementById("screen")
    screen.height = cols * boxSize
    screen.width = rows * boxSize
    context = screen.getContext("2d")

    document.addEventListener("keyup", movement)

    update()
    if (Number(document.getElementById("point").innerHTML) !=0 ){
        velo = 5 + (Number(document.getElementById("point").innerHTML) / 2)
    }

    setTimeout(load, 1000/velo)
}

function movement(e) {
    if (e.code == "ArrowUp" && velocityY != speed){
        velocityX = 0
        velocityY = -speed
    }
    else if (e.code == "ArrowDown" && velocityY != -speed){
        velocityX = 0
        velocityY = speed
    }
    else if (e.code == "ArrowRight" && velocityX != -speed){
        velocityX = speed
        velocityY = 0
    }
    else if (e.code == "ArrowLeft" && velocityX != speed){
        velocityX = -speed
        velocityY = 0
    }
}

function update() {
    if(gameOver){
        document.getElementById("gameover").style.display = "flex"
        
        return
    }
    context.fillStyle = "rgb(40, 40, 40)"
    context.fillRect(0, 0, screen.height, screen.width) 

    context.fillStyle = "rgb(241, 80, 80)"
    context.fillRect(foodX, foodY, boxSize, boxSize)
    
    eat()

    for(let i = snakeBody.length-1; i > 0; i--){
        snakeBody[i] = snakeBody[i-1]
    }
    
    if(snakeBody.length){
        snakeBody[0]= [snakeX, snakeY]
    }

    context.fillStyle = "rgb(137, 200, 222)"
    snakeX += velocityX * boxSize
    snakeY += velocityY * boxSize
    context.fillRect(snakeX, snakeY, boxSize, boxSize)
    for (let i =0; i < snakeBody.length; i++) {
        context.fillStyle = "rgba(137, 199, 222, 0.8)"
        context.fillRect(snakeBody[i][0], snakeBody[i][1], boxSize, boxSize)
    }

    if( snakeX < 0 || snakeX > cols * boxSize - boxSize|| snakeY < 0 || snakeY > rows * boxSize - boxSize){
        gameOver = true
        document.getElementById("final-score").innerHTML += Number(document.getElementById("point").innerHTML)
    }
    for(let i = 0; i < snakeBody.length; i++){
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]){
            gameOver = true
            document.getElementById("final-score").innerHTML += Number(document.getElementById("point").innerHTML)
        }
    }

}

function placeFood() {
    foodX = Math.floor(Math.random() * cols) * boxSize
    foodY = Math.floor(Math.random() * rows) * boxSize
}

function eat() {
    if(snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY])
        placeFood()
        document.getElementById("point").innerHTML = Number(document.getElementById("point").innerHTML) + 1
    }

}

placeFood()

document.getElementById("restart").onclick = function(){
    location.reload();
    return false
}