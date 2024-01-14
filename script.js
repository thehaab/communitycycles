const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const quotes = [
  "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",

  "Bicycling is a big part of the future. It has to be. There's something wrong with a society that drives a car to work out in a gym. - Bill Nye",

  "When man invented the bicycle, he reached the peak of his attainments. - Elizabeth West",

  "A bicycle ride around the world begins with a single pedal stroke. - Scott Stoll",

  "It is by riding a bicycle that you learn the contours of a country best since you have to sweat up the hills and coast down them. - Ernest Hemingway",

  "Bicycles may change, but cycling is timeless. - Zapata Espinoza",

  "The bicycle is a curious vehicle. Its passenger is its engine. - John Howard",

  "Every time I see an adult on a bicycle, I no longer despair for the future of the human race. - H.G. Wells",

  "Melancholy is incompatible with bicycling. - James E. Starrs",

  "A bicycle does get you there and more... And there is always the thin edge of danger to keep you alert and comfortably apprehensive. - Bill Emerson",
  // Add more quotes as needed
];

const quoteContainer = document.getElementById('quote-container');
let currentQuoteIndex = 0;

function displayNextQuote() {
  quoteContainer.innerHTML = quotes[currentQuoteIndex];
  currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

// Display the first quote
displayNextQuote();

// Change quote every 10 seconds (adjust as needed)
setInterval(displayNextQuote, 10000);
