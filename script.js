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

const bikeImage = document.getElementById('bikeImage');
const overlayLinks = document.getElementById('overlayLinks');
const overlay = document.getElementById('overlay');

bikeImage.addEventListener('mouseover', showLinks);
bikeImage.addEventListener('mouseout', hideLinks);

function showLinks(event) {
  const x = event.clientX - bikeImage.offsetLeft;
  const y = event.clientY - bikeImage.offsetTop;

  // Update links based on mouse position
  overlayLinks.style.left = x + 'px';
  overlayLinks.style.top = y + 'px';
}

function hideLinks() {
  // Hide links on mouseout
  overlayLinks.style.left = '-9999px';
  overlayLinks.style.top = '-9999px';
}


document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('#language-buttons button');
  const contentEn = document.getElementById('content-en');
  const contentEs = document.getElementById('content-es');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const language = this.getAttribute('data-language');
      if (language === 'en') {
        contentEn.style.display = 'block';
        contentEs.style.display = 'none';
      } else if (language === 'es') {
        contentEn.style.display = 'none';
        contentEs.style.display = 'block';
      }
    });
  });
});

const quotes = [
  "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
  "Bicycling is a big part of the future. There's something wrong with a society that drives a car to work out in a gym. - Bill Nye",    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",

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

// Change quote every 5 seconds (adjust as needed)
setInterval(displayNextQuote, 5000);
