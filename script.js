function openInvitation() {
    const flap = document.querySelector('.flap');
    flap.style.transform = 'rotateX(-180deg)';

    setTimeout(() => {
        document.querySelector('.envelope').classList.add('hidden');
        document.querySelector('#invitation-content').classList.remove('hidden');
    }, 600); // Wait for the flap animation to complete
}





const countdownUnique = () => {
    const targetDate = new Date("October 11, 2024 08:00:00").getTime();
    const nowTime = new Date().getTime();
    const timeDiff = targetDate - nowTime;

    if (timeDiff > 0) {
        const remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("ddays_unique987").innerText = remainingDays;
        document.getElementById("hhours_alpha321").innerText = remainingHours;
        document.getElementById("mminutes_omega654").innerText = remainingMinutes;
    } else {
        document.getElementById("ddays_unique987").innerText = "0";
        document.getElementById("hhours_alpha321").innerText = "0";
        document.getElementById("mminutes_omega654").innerText = "0";
    }
};

countdownUnique();
setInterval(countdownUnique, 1000);


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



