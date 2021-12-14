//criar elemento que irá rodar o jogo
let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d");
let box = 32;

// criar cobrinha como lista, já que ela vai ser uma 
// série de coordenadas, que quando pintadas, criam os 
// quadradinhos
let snake = []; 
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = 'right';


function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box); //desenha o retângulo usando x e y e a largura e altura setadas
}


function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}


function iniciarJogo() {
    criarBG();
    criarCobrinha();

    // seta direções
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // controla direções e movimento
    if (direction == 'right') 
        snakeX += box;
    if (direction == 'left') 
        snakeX -= box;
    if (direction == 'up') 
        snakeY += box;
    if (direction == 'down') 
        snakeY += box;

    snake.pop();

    let newhead = {
        x: snameX,
        y: snakeY
    }

    snake.unshift();


}


let jogo = setInterval(iniciarJogo, 100);


