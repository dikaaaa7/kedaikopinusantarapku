function openInvitation() {
    const flap = document.querySelector('.flap');
    flap.style.transform = 'rotateX(-180deg)';

    setTimeout(() => {
        document.querySelector('.envelope').classList.add('hidden');
        document.querySelector('#invitation-content').classList.remove('hidden');
    }, 600); // Wait for the flap animation to complete
}

    // Set the date for the grand opening
    var countDownDate = new Date("Oct 15, 2024 10:00:00").getTime();

    // Update the countdown every 1 second
    var countdownFunction = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Calculate the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the respective elements
        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        // If the countdown is finished, display some text
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.querySelector(".countdown").innerHTML = "Acara Dimulai!";
        }

    }, 1000);



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



