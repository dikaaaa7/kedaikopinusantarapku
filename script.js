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
const eventDate = new Date('Oktober 5, 2024 10:00:00').getTime();

const countdownDate = new Date("October 5, 2024 10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("days").innerText = days + " Days";
  document.getElementById("hours").innerText = hours + " Hours";
  document.getElementById("minutes").innerText = minutes + " Minutes";

  if (distance < 0) {
    document.getElementById("days").innerText = "0 Days";
    document.getElementById("hours").innerText = "0 Hours";
    document.getElementById("minutes").innerText = "0 Minutes";
  }
}

setInterval(updateCountdown, 1000);


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



