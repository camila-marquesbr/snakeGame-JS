
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

criarBG();
criarCobrinha()