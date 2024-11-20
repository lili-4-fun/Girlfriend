//board
let board;
let boardWidth = 1000;
let boardHeight = 400;
let context;

//dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;
let selectedCharacter = "img/dino.png"; // Default character

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight
}

//cactus
let cactusArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 60;

let cactusHeight = 80;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

//cloud
let cloudArray = [];
let cloudWidth = 100;
let cloudHeight = 75;
let cloudX = boardWidth;
let cloudY = 50;
let cloudImg;

//physics
let velocityX = -8; //cactus moving left speed
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d"); //used for drawing on the board

    //draw initial dinosaur
    // context.fillStyle="green";
    // context.fillRect(dino.x, dino.y, dino.width, dino.height);

    loadCharacter(selectedCharacter);

    cactus1Img = new Image();
    cactus1Img.src = "img/cactus1.png";

    cactus2Img = new Image();
    cactus2Img.src = "img/cactus2.png";

    cactus3Img = new Image();
    cactus3Img.src = "img/cactus3.png";

    cloudImg = new Image();
    cloudImg.src = "img/cloud.png";

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000); //1000 milliseconds = 1 second
    setInterval(placeCloud, 3000); //3000 milliseconds = 3 seconds
    document.addEventListener("keydown", moveDino);
}

function loadCharacter(src) {
    dinoImg = new Image();
    dinoImg.onload = function() {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
        console.log("Image loaded and drawn on canvas.");
    };
    dinoImg.onerror = function() {
        console.log("Failed to load image at " + src);
    };
    dinoImg.src = src;
}


function selectCharacter(src) {
    selectedCharacter = src;
    loadCharacter(selectedCharacter);

    // Highlight selected character
    document.querySelectorAll('.character-option').forEach(option => {
        option.classList.remove('selected');
    });
    document.querySelector(`img[src='${src}']`).classList.add('selected');
}


function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //dino
    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY); //apply gravity to current dino.y, making sure it doesn't exceed the ground
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    //cactus
    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        cactus.x += velocityX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);

        if (detectCollision(dino, cactus)) {
            gameOver = true;
            dinoImg.src = "img/dino2.png";
            dinoImg.onload = function() {
                context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
                showRestartMessage(); // Show restart message and button when game is over
            }
        }
    }

    //clouds
    for (let i = 0; i < cloudArray.length; i++) {
        let cloud = cloudArray[i];
        cloud.x += velocityX / 2; // clouds move slower than cacti
        context.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
    }

    //score
    context.fillStyle="black";
    context.font="20px courier";
    score++;
    context.fillText(score, 5, 20);
}

function moveDino(e) {
    if (gameOver) {
        return;
    }

    if ((e.code == "Space" || e.code == "ArrowUp") && dino.y == dinoY) {
        //jump
        velocityY = -10;
    }
    else if (e.code == "ArrowDown" && dino.y == dinoY) {
        //duck
    }

}

function placeCactus() {
    if (gameOver) {
        return;
    }

    //place cactus
    let cactus = {
        img : null,
        x : cactusX,
        y : cactusY,
        width : null,
        height: cactusHeight
    }

    let placeCactusChance = Math.random(); //0 - 0.9999...

    if (placeCactusChance > .90) { //10% you get cactus3
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .70) { //30% you get cactus2
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .50) { //50% you get cactus1
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus);
    }

    if (cactusArray.length > 5) {
        cactusArray.shift(); //remove the first element from the array so that the array doesn't constantly grow
    }
}

function placeCloud() {
    if (gameOver) {
        return;
    }

    //place cloud
    let cloud = {
        img: cloudImg,
        x: cloudX,
        y: Math.random() * (boardHeight / 2), // random height in the upper half of the board
        width: cloudWidth,
        height: cloudHeight
    };

    cloudArray.push(cloud);

    if (cloudArray.length > 5) {
        cloudArray.shift(); // remove the first element from the array so that the array doesn't constantly grow
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&   //a's top left corner doesn't reach b's top right corner
           a.x + a.width > b.x &&   //a's top right corner passes b's top left corner
           a.y < b.y + b.height &&  //a's top left corner doesn't reach b's bottom left corner
           a.y + a.height > b.y;    //a's bottom left corner passes b's top left corner
}

function showRestartMessage() {
    let messageDiv = document.createElement("div");
    messageDiv.style.position = "absolute";
    messageDiv.style.top = "50%";
    messageDiv.style.left = "50%";
    messageDiv.style.transform = "translate(-50%, 18%)";
    messageDiv.style.textAlign = "center";
    messageDiv.style.fontSize = "20px";
    messageDiv.style.color = "#86469C";
    messageDiv.style.fontWeight = "bold";
    messageDiv.style.backgroundColor = "white";
    messageDiv.style.padding = "20px";
    messageDiv.style.border = "2px solid #86469C";
    messageDiv.style.borderRadius = "10px";
    messageDiv.style.width = "800px"; // Set width to 1000px
    messageDiv.style.maxWidth = "100%"; // Ensures responsiveness


    let message = document.createElement("p");
    message.innerText = "Good job my baby <3 you can play again by clicking here:";
    messageDiv.appendChild(message);

    let button = document.createElement("button");
    button.innerHTML = "Restart";
    button.style.marginTop = "10px";
    button.style.padding = "10px 20px";
    button.style.fontSize = "20px";
    button.style.backgroundColor = "#DCBFFF";
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    messageDiv.appendChild(button);
    document.body.appendChild(messageDiv);

    button.addEventListener("click", function() {
        location.reload(); // Refresh the page
    });
}