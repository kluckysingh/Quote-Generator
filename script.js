const quotes = [
    "The best way to predict the future is to create it.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Do what you can, with what you have, where you are.",
    "Act as if what you do makes a difference. It does.",
    "Keep your face always toward the sunshine—and shadows will fall behind you."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
}
