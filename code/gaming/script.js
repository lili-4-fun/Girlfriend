document.addEventListener('DOMContentLoaded', () => {
    const gameItems = document.querySelectorAll('.game-item');
    const gameLinks = document.querySelectorAll('.game-link');
    let currentIndex = 0;

    // Initially focus the first game item
    gameItems[currentIndex].focus();

    // Handle keydown events for navigating
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            // Move down in the list
            if (currentIndex < gameItems.length - 1) {
                currentIndex++;
                gameItems[currentIndex].focus();
            }
            e.preventDefault();
        } else if (e.key === 'ArrowUp') {
            // Move up in the list
            if (currentIndex > 0) {
                currentIndex--;
                gameItems[currentIndex].focus();
            }
            e.preventDefault();
        } else if (e.key === 'Enter') {
            // Simulate a click to navigate to the game page
            gameLinks[currentIndex].click();
        }
    });

    // Add focus/blur styles to game items
    gameItems.forEach(item => {
        item.addEventListener('focus', () => {
            item.classList.add('focused');
        });
        item.addEventListener('blur', () => {
            item.classList.remove('focused');
        });
    });
});


document.addEventListener('keydown', (e) => {
    const instructionText = document.querySelector('.instructions');
    
    if (e.key === 'ArrowDown') {
        if (currentIndex < gameItems.length - 1) {
            currentIndex++;
            gameItems[currentIndex].focus();
        }
        instructionText.innerHTML = 'Press Down to move down'; // Update instructions dynamically
        e.preventDefault();
    } else if (e.key === 'ArrowUp') {
        if (currentIndex > 0) {
            currentIndex--;
            gameItems[currentIndex].focus();
        }
        instructionText.innerHTML = 'Press Up to move up'; // Update instructions dynamically
        e.preventDefault();
    } else if (e.key === 'Enter') {
        alert(`You selected ${gameItems[currentIndex].innerText.trim()}`);
        instructionText.innerHTML = 'Press Enter to select'; // Update instructions dynamically
    }
});
