document.addEventListener("DOMContentLoaded", function() {
    const message = " Hii my princess, i made this little website just for you, this way, you can come here anyday to feel my love for you. Have fun, I love you <3";
    let i = 0;
    const speed = 10; // Speed of typing in milliseconds
    const caret = '|'; // Define the caret character
    const target = document.getElementById("welcomeMessage");
    target.style.visibility = 'hidden'; // Ensure it's hidden at start

    function typeWriter() {
        if (i === 0) target.style.visibility = 'visible'; // Make text visible when typing starts
        if (i < message.length) {
            target.textContent = message.substring(0, i + 1) + caret; // Add caret after the current character
            i++;
            setTimeout(typeWriter, speed); // Continue typing the next character
        } else {
            target.textContent = message; // Once done, remove the caret
            blinkCaret(); // Start blinking effect after typing finishes
        }
    }

    function blinkCaret() {
        let showCaret = true;
        setInterval(() => {
            if (showCaret) {
                target.textContent = message + caret;
            } else {
                target.textContent = message;
            }
            showCaret = !showCaret;
        }, 500); // Caret blinks every 500ms
    }

    typeWriter();
});