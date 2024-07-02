document.getElementById('countdownForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const eventDate = new Date(document.getElementById('eventDate').value).getTime();
    startCountdown(eventDate);
});

function startCountdown(countdownDate) {
    const interval = setInterval(() => {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countdownDate - now;
        
        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000)) / 1000);
        
        // Output the result in the respective elements
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;
        
        // If the countdown is finished, write some text
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Event has started!";
        }
    }, 1000);
}
