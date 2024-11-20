document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    
    const messages = {
        "Reasons why I love you": [
            "You always know how to make me feel safe, loved and understood",
            "You make me feel cared for",
            "You make me feel like eternity exists, if it's by your side",
            "You are strong",
            "You are resiliant",
            "You make every moment more beautiful just by being there",
            "You never give up, even when things get tough",
            "You listen to me in ways no one else does",
            "You accept me just as I am",
            "You always find the perfect words to comfort me when I'm down",
            "You are the brightest part of my day, no matter how dark the rest is",
            "You love in a way that makes me feel like the luckiest person alive",
            "You inspire me to have strength and courage to face anything"
        ],
        "Things I love about you": [
            "Your beautiful forest green eyes",
            "Your kindness",
            "Your adorable laugh that can make me smile any day, any second",
            "Your perfect little round face",
            "How much you care. About people, about animals, about nature, about causes that matter to you",
            "The lines under your eyes that you had since you are a baby",
            "Your passion for the things that you love",
            "How excited you get at the smallest little things, and how high your voice gets when you talk about them",
            "Your baby voice",
            "When you get all cuddly and needy for me",
            "The fact that you kept the same face since you were a baby",
            "The way you act all babyy when you talk about something you love",
            "Your sweet and soft small hands that I am dreaming to hold",
            "The way you smile, with your eyes closed",
            "Your adorable little hickups",
            "Your little wiggle wiggle dance when you're happy",
            "When you clap your hands cause you are all excited",
            "Your cute little sneezes",
            
        ],
        "What you are amazing at": [
            "Loving someone",
            "Making people laugh",
            "Creativity", "art", "poetry", "songwriting", "cooking", "dancing",
            "Finding beauty in everything",
            "Listening with all your heart",
            "Being patient and calm in stressful situations",
            "Understanding emotions",
            "Feeling empathy",
            "Helping people",
            "Inpiring me to become my best self",
            "Accepting people as they are",
            "Raising, helping, loving children",
            "Working hard to acheive something you put your mind to",
            "Making me feel like the most special person in the world"
        ]
    };

    
    sections.forEach(section => {
        const addButton = section.querySelector('.add-button');
        const messagesContainer = section.querySelector('.messages-container');
        const category = section.querySelector('h2').textContent;
        let messageIndex = 0;

        addButton.addEventListener('click', () => {
            if (messageIndex < messages[category].length) {
                const message = document.createElement('div');
                message.classList.add('message');
                message.textContent = messages[category][messageIndex];
                messagesContainer.appendChild(message);
                messageIndex++;
            }
        });
    });

     // Add floating hearts
     function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createFloatingHeart, 1000);

    // Add click effect for add buttons
    document.querySelectorAll('.add-button').forEach(button => {
        button.addEventListener('click', () => {
            const heart = document.createElement('div');
            heart.classList.add('floating-heart');
            heart.style.left = `${button.offsetLeft + button.offsetWidth / 2}px`;
            heart.style.top = `${button.offsetTop + button.offsetHeight / 2}px`;
            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 1000);
        });
    });
});