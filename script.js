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
  '<em>"Life is like riding a bicycle. To keep your balance, you must keep moving."</em><br> - Albert Einstein',

  `<em>"Bicycling is a big part of the future. It has to be. There's something wrong with a society that drives a car to work out in a gym."</em><br> - Bill Nye`,

  `<em>"When man invented the bicycle, he reached the peak of his attainments."</em><br> - Elizabeth West`,

  `<em>"A bicycle ride around the world begins with a single pedal stroke."</em><br> - Scott Stoll`,

  `<em>"It is by riding a bicycle that you learn the contours of a country best since you have to sweat up the hills and coast down them."</em><br> - Ernest Hemingway`,

  `<em>"Bicycles may change, but cycling is timeless."</em><br> - Zapata Espinoza`,

  `<em>"The bicycle is a curious vehicle. Its passenger is its engine."</em><br> - John Howard`,

  `<em>"Every time I see an adult on a bicycle, I no longer despair for the future of the human race."</em><br> - H.G. Wells`,

  `<em>"Melancholy is incompatible with bicycling."</em><br>- James E. Starrs`,

  `<em>"A bicycle does get you there and more... And there is always the thin edge of danger to keep you alert and comfortably apprehensive."</em><br> - Bill Emerson`,
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

const words = ["bi", "re", "up", "life"];
let index = 0;

function changeWord() {
  const wordElement = document.getElementById("textCycle");
  wordElement.textContent = words[index];
  index = (index + 1) % words.length;
}

setInterval(changeWord, 3000); // Change the word every 2 seconds

const year = new Date().getFullYear();
document.getElementById('year').textContent = year;