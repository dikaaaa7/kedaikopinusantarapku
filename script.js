function openInvitation() {
    const flap = document.querySelector('.flap');
    flap.style.transform = 'rotateX(-180deg)';

    setTimeout(() => {
        document.querySelector('.envelope').classList.add('hidden');
        document.querySelector('#invitation-content').classList.remove('hidden');
    }, 600); // Wait for the flap animation to complete
}

// Countdown Timer
const countdownElement = document.getElementById('countdown');
const eventDate = new Date('September 20, 2024 18:00:00').getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} Day | ${hours} Hour | ${minutes} Minutes `;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Acara Sudah Dimulai!";
    }
};

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();


function createGlitter() {
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');
    
    // Random start position
    glitter.style.left = `${Math.random() * 100}vw`;
    glitter.style.animationDuration = `${2 + Math.random() * 3}s`; // Fall duration between 2s to 5s
    glitter.style.width = glitter.style.height = `${3 + Math.random() * 5}px`; // Random size

    document.getElementById('glitter-container').appendChild(glitter);

    // Remove the glitter after animation
    setTimeout(() => {
        glitter.remove();
    }, 5000); // Matches the longest animation duration
}

setInterval(createGlitter, 100); // Create new glitter every 100ms



window.addEventListener('load', function() {
    const audio = document.getElementById('background-music');
    audio.volume = 0.2; // Atur volume dari 0 (diam) hingga 1 (volume penuh)
    
    audio.play().catch(error => {
        console.log('Auto-play was prevented:', error);
    });
});