// Enhanced messages array
const messages = [
    "You're the best bestie ever 💜",
    "Stay cute forever 🌸",
    "You make life brighter ✨",
    "Happy early birthday 🎂",
    "You're magical 🦋",
    "Your friendship is a gift 💝",
    "You light up my world ⭐",
    "Never stop being awesome 🌟",
    "You're one in a million 👑",
    "Keep shining bright ✨"
];

// Show random message
function showMessage() {
    const messageEl = document.getElementById("message");
    const random = messages[Math.floor(Math.random() * messages.length)];
    messageEl.innerText = random;
    messageEl.style.animation = 'none';
    setTimeout(() => {
        messageEl.style.animation = 'slideIn 0.5s ease';
    }, 10);
}

// Popup functions
function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
    setTimeout(() => {
        popup.style.display = "none";
    }, 300);
}

// Show popup on page load
window.addEventListener('load', function() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";
    setTimeout(() => {
        popup.classList.add("active");
    }, 100);
});

// Close popup on outside click
document.addEventListener('click', function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
});

// Enhanced countdown timer
function updateCountdown() {
    const birthday = new Date("October 16, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const diff = birthday - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // Pad with zeros
    days = String(days).padStart(2, '0');
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Check if birthday arrived
    if (diff < 0) {
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
        document.querySelector(".countdown-section h2").innerText = "🎉 HAPPY BIRTHDAY RITHULI! 🎉";
    }
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Floating flowers animation
const flowerEmojis = ["🌸", "🌺", "🌼", "🌻", "🌷"];

function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
    
    // Random horizontal position
    const randomX = Math.random() * window.innerWidth;
    flower.style.left = randomX + "px";
    
    // Random animation duration
    const duration = 12 + Math.random() * 8;
    flower.style.animationDuration = duration + "s";
    
    // Random delay for varied effect
    flower.style.animationDelay = Math.random() * 2 + "s";
    
    document.body.appendChild(flower);
    
    // Remove element after animation
    setTimeout(() => {
        flower.remove();
    }, (duration + 2) * 1000);
}

// Create flowers periodically
setInterval(createFlower, 800);

// Create initial flowers
for (let i = 0; i < 3; i++) {
    setTimeout(() => createFlower(), i * 300);
}