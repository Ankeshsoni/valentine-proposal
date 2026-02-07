function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function evade(e) {
    if (e && e.type === 'touchstart') e.preventDefault(); // Only prevent default on touch

    console.log("Evade triggered!");
    const noBtn = document.getElementById('noBtn');

    // Ensure button stays on top
    noBtn.style.zIndex = "1000";

    // Calculate new position
    // Stay within window bounds but move significantly
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.position = 'fixed';
    noBtn.style.left = Math.max(20, x) + 'px';
    noBtn.style.top = Math.max(20, y) + 'px';
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.getElementById('noBtn');
    if (noBtn) {
        console.log("No button found, attaching listeners");
        noBtn.addEventListener('mouseenter', evade); // Fires when mouse enters element
        noBtn.addEventListener('mouseover', evade);  // Backup
        noBtn.addEventListener('touchstart', evade); // For mobile
        noBtn.addEventListener('click', evade);      // Click fallback
    }
});

function acceptProposal() {
    window.location.href = "/gallery";
}

// Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';

    document.querySelector('.hearts-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
