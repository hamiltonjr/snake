// cria elemento que irá rodar o jogo
let canvas = document.getElementById('snake'); 
let context = canvas.getContext('2d');
let box = 32;

// declara cobrinha como lista, já que ela vai ser uma 
// série de coordenadas, que quando pintadas, criam os 
// quadradinhos
let snake = []; 

// inicializa conrinha
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

// direção inicial da cobrinha
let direction = 'right';

// posição inicial da comida
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

// cria o campo e a cabeça da cobrinha
function criarBG() {

    context.fillStyle = 'lightgreen';

    //desenha o retângulo usando x e y e a largura e altura setadas
    context.fillRect(0, 0, 16*box, 16*box);

}


// renderiza a cobrinha no canvas
function criarCobrinha () {

    for (i = 0; i < snake.length; i++) {
        context.fillStyle = 'green';
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}


// renderiza a comida no canvas
function drawFood() {

    context.fillStyle = 'red';
    context.fillRect(food.x, food.y, box, box);

}


// quando um evento acontece, detecta e chama uma função
document.addEventListener('keydown', update);


// atualiza direção da cobrinha
function update(event) {

    if (event.keyCode == 37 && direction != 'right')
        direction = 'left';
    if (event.keyCode == 38 && direction != 'down')
        direction = 'up';
    if (event.keyCode == 39 && direction != 'left')
        direction = 'right';
    if (event.keyCode == 40 && direction != 'up')
        direction = 'down';

}


// inicia jogo
function iniciarJogo() {

    for (i = 1; i < snake.length; i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    if(snake[0].x > 15*box && direction == "right") 
        snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') 
        snake[0].x = 15*box;
    if(snake[0].y > 15*box && direction == "down") 
        snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') 
        snake[0].y = 15*box;

    criarBG();
    criarCobrinha();
    drawFood();

    // seta direções
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // controla direções e movimento
    if (direction == 'right') 
        snakeX += box;
    if (direction == 'left') 
        snakeX -= box;
    if (direction == 'up') 
        snakeY -= box;
    if (direction == 'down') 
        snakeY += box;
    
    // verifica se cobrinha trombou com o seu próprio corpo
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop(); //pop tira o último elemento da lista
    } else {
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    // atualiza posição da cabeça da cobrinha
    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);

}


// controla velocidade do jogo
let jogo = setInterval(iniciarJogo, 100);
