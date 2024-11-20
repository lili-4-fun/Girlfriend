const countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const interval = setInterval(() => {
  const now = new Date().getTime();
  const duration = countDownDate - now;
  
  if (duration < 0) {
    clearInterval(interval);
    updateDuration(0);
    return;
  }
  
  updateDuration(duration);
  }, 1000);

  function updateDuration(duration)  {
    const remainingDays = Math.floor(duration / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((duration % (1000 * 60)) / 1000);
    
    // Update the DOM elements
    days.innerHTML = remainingDays;
    hours.innerHTML = remainingHours;
    minutes.innerHTML = remainingMinutes;
    seconds.innerHTML = remainingSeconds;
  }


  window.onload = function() {
    const music = document.getElementById('background-music');
    const playButton = document.getElementById('play-music-button');
    const soundIcon = document.getElementById('sound-icon');

    let isPlaying = false; // Track whether the music is playing

    playButton.addEventListener('click', function() {
        if (!isPlaying) {
            music.play().then(() => {
                isPlaying = true;
                soundIcon.classList.remove('fa-volume-up');
                soundIcon.classList.add('fa-volume-mute');  // Change icon to mute symbol
            }).catch(error => {
                console.log("Autoplay blocked, user interaction needed", error);
            });
        } else {
            music.pause();
            isPlaying = false;
            soundIcon.classList.remove('fa-volume-mute');
            soundIcon.classList.add('fa-volume-up');  // Change icon back to volume-up symbol
        }
    });
};




  