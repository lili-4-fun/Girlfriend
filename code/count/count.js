let heartsEnabled = false;  // Start with hearts disabled by default

// Function to toggle hearts.js animation
function toggleHeartScript() {
  const button = document.getElementById('toggleHearts');
  
  if (heartsEnabled) {
    // Stop the hearts animation
    stopHearts();  // Call the stop function from hearts.js
  } else {
    // Start the hearts animation
    init();  // Reinitialize hearts
    animate();  // Start the animation loop
  }
  
  heartsEnabled = !heartsEnabled;  // Toggle the flag
}

// On page load, make sure hearts are disabled
window.onload = function() {
  const button = document.getElementById('toggleHearts');
  stopHearts();  // Ensure hearts are not animating on load
};


// Get the current date and time
const now = new Date();

// Define the anniversary date (January 23, 2024)
const anniversary = new Date('2024-01-23T00:00:00');

// Function to calculate the difference
function updateCounter() {
  const now = new Date();
  const difference = now - anniversary;

  // Calculate years, months, days, hours, minutes, and seconds
  const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25)); // approx. days in a year
  const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)); // approx. days in a month
  const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Update the HTML
  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

// Update the counter every second
setInterval(updateCounter, 1000);

// Initial update
updateCounter();

function toggleHeartScript() {
  const button = document.getElementById('toggleHearts');
  
  if (heartsEnabled) {
    stopHearts();  // Stop the hearts animation
    button.classList.remove('active');  // Remove the "active" class
  } else {
    init();  // Start the hearts animation
    animate();  // Begin the animation loop
    button.classList.add('active');  // Add the "active" class
  }
  
  heartsEnabled = !heartsEnabled;  // Toggle the flag
}

