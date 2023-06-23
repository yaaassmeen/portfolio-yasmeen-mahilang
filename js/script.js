// Get the card container and cards
const cardContainer = document.querySelector('.card-container');
const cards = Array.from(cardContainer.querySelectorAll('.card'));

let currentCardIndex = 0;

function showNextCard() {
    // Hide all cards
    cards.forEach(card => {
        card.style.display = 'none';
    });

    // Show the current card
    cards[currentCardIndex].style.display = 'block';

    // Increment the current card index
    currentCardIndex++;

    // Check if we have reached the end of the cards, then start from the beginning
    if (currentCardIndex >= cards.length) {
        currentCardIndex = 0;
    }
}

// Call the showNextCard function initially
showNextCard();

// Call the showNextCard function every 2 seconds
setInterval(showNextCard, 2000);

// for small screen nav to side menu bar
var sidemeu = document.getElementById("sidemenu");

function openmenu() {
    sidemeu.style.right = "0";
}

function closemenu() {
    sidemeu.style.right = "-200px";
}
