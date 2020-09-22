
//Criação do canvas
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;

//Criando a cobrinha
let snake = [];
snake[0]= {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

//Criação do canvas
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}
//Criando a cobrinha
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"; // uma cor verde
        context.fillRect(snake[i].x, snake[i].y, box, box); // o tamanho da cobrinha
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha()

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}
// passando um intervalo de 100 ml para iniciar o jogo e a cada 100 ml estará sendo renovada
let jogo = setInterval(iniciarJogo, 100);