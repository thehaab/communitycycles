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

//make a calendar for the current month
document.addEventListener('DOMContentLoaded', () => {    
  const calendar = document.getElementById('calendar');
  const date = new Date();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const lastDay = new Date(year, month, daysInMonth).getDay();
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthName = date.toLocaleString('default', { month: 'long' });
  const calendarTitle = document.createElement('h2');
  calendarTitle.textContent = `${monthName} ${year}`;
  calendar.appendChild(calendarTitle);
  const calendarTable = document.createElement('table');
  calendar.appendChild(calendarTable);
  const calendarHeader = document.createElement('thead');
  calendarTable.appendChild(calendarHeader);
  const headerRow = document.createElement('tr');
  calendarHeader.appendChild(headerRow);
  days.forEach(day => {
    const dayHeader = document.createElement('th');
    dayHeader.textContent = day;
    headerRow.appendChild(dayHeader);
  })
  const calendarBody = document.createElement('tbody');
  calendarTable.appendChild(calendarBody);
  let day = 1;
  let row = document.createElement('tr');
  calendarBody.appendChild(row);
  for (let i = 0; i < firstDay; i++) {
    const cell = document.createElement('td');
    row.appendChild(cell);
  }
  for (let i = firstDay; i < 7; i++) {
    const cell = document.createElement('td');
    cell.textContent = day;
    row.appendChild(cell);
    day++;
  }
  while (day <= daysInMonth) {
    if (row.children.length === 7) {
      row = document.createElement('tr');
      calendarBody.appendChild(row);
    }
    const cell = document.createElement('td');
    cell.textContent = day;
    row.appendChild(cell);
    day++;
  }
  for (let i = lastDay + 1; i < 7; i++) {
    const cell = document.createElement('td');
    row.appendChild(cell);
  }
  // add event to calendar


});
