let snake = document.querySelector(".snake")
let food = document.querySelector(".food")
let snakeLocationX = 0
let snakeLocationY = 0
let foodLocationX = 0
let foodLocationY = 0
let direction = "right"
let interval;
let score = 0;
document.addEventListener("DOMContentLoaded", foodLocation)
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") direction = "right"
    if (e.key == "ArrowLeft") direction = "left"
    if (e.key == "ArrowUp") direction = "up"
    if (e.key == "ArrowDown") direction = "down"
})
function randomLocation() {
    return Math.ceil(Math.random() * 20) * 20;

}
function snakeDirection() {
    if (direction == "right") snakeLocationX += 20
    if (direction == "left") snakeLocationX -= 20
    if (direction == "up") snakeLocationY -= 20
    if (direction == "down") snakeLocationY += 20
    gameOver()
    foodEat()
    snakeMove()
}
function snakeMove() {
    snake.style.left = `${snakeLocationX}px`
    snake.style.top = `${snakeLocationY}px`
}
function foodLocation() {
    foodLocationX = randomLocation()
    foodLocationY = randomLocation()
    if (foodLocationX != 400 && foodLocationY != 400) {
        food.style.left = `${foodLocationX}px`
        food.style.top = `${foodLocationY}px`
    } else {
        foodLocationX = 60
        foodLocationY = 60
        food.style.left = `${foodLocationX}px`
        food.style.top = `${foodLocationY}px`
    }

}
function foodEat() {
    if (snakeLocationX == foodLocationX && snakeLocationY == foodLocationY) {
        score++;
        foodLocation()
    }
}
function gameOver() {
    if (snakeLocationX == 400 || snakeLocationX == -20 || snakeLocationY == 400 || snakeLocationY == -20) {
        clearInterval(interval)
        alert(`Skorunuz ${score}`)
        restartGame()
    }
}
interval = setInterval(snakeDirection, 75)


