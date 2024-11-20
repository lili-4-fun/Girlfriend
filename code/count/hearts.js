const canvas = document.getElementById('snowCanvas');  // You can use the same canvas element
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let heartsArray = [];
let animationFrameId;  // Store the requestAnimationFrame ID

// Create a heart particle class
class Heart {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 30 + 10; // Size of the hearts
    this.speedY = Math.random() * 2 + 1; // Falling speed (Y-axis)
    this.speedX = Math.random() * 1 - 0.5; // Horizontal drift (X-axis)
  }

  // Update heart's position
  update() {
    this.y += this.speedY;
    this.x += this.speedX;

    // If heart goes out of bounds, reset its position
    if (this.y > canvas.height) {
      this.y = 0 - this.size;
      this.x = Math.random() * canvas.width;
    }

    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }
  }

  // Draw the heart on canvas
  draw() {
    ctx.fillStyle = '#ff69b4';  // Pink color for hearts
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.bezierCurveTo(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y);
    ctx.fill();
    ctx.closePath();
  }
}

// Initialize hearts
function init() {
  heartsArray = [];
  let numberOfHearts = 150;  // Adjust the number of hearts
  for (let i = 0; i < numberOfHearts; i++) {
    heartsArray.push(new Heart());
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < heartsArray.length; i++) {
    heartsArray[i].update();
    heartsArray[i].draw();
  }
  animationFrameId = requestAnimationFrame(animate);
}

// Stop the hearts animation
function stopHearts() {
  cancelAnimationFrame(animationFrameId);  // Cancel the animation loop
  ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
}

// Resize event to keep canvas full-screen
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
