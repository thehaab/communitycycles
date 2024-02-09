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

/* const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); */


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



/* // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}  */

// add a calendar to the page with the current month that start on today's date and goes out 35 days and shows events for each day
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let firstDay = new Date(currentYear, currentMonth, 1).getDay();
let lastDay = new Date(currentYear, currentMonth, daysInMonth).getDay();
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let monthName = today.toLocaleString('default', { month: 'long' });
let calendar = document.getElementById('calendar');
let calendarTitle = document.createElement('h2');
calendarTitle.textContent = `${monthName} ${currentYear}`;
calendar.appendChild(calendarTitle);
let calendarTable = document.createElement('table');
calendar.appendChild(calendarTable);
let calendarHeader = document.createElement('thead');
calendarTable.appendChild(calendarHeader);
let headerRow = document.createElement('tr');
calendarHeader.appendChild(headerRow);
days.forEach(day => {
  let dayHeader = document.createElement('th');
  dayHeader.textContent = day;
  headerRow.appendChild(dayHeader);
})
let calendarBody = document.createElement('tbody');
calendarTable.appendChild(calendarBody);
let day = 1;
let row = document.createElement('tr');
calendarBody.appendChild(row);
for (let i = 0; i < firstDay; i++) {
  let cell = document.createElement('td');
  row.appendChild(cell);
}
for (let i = firstDay; i < 7; i++) {
  let cell = document.createElement('td');
  cell.textContent = day;
  row.appendChild(cell);
  day++;
}
while (day <= daysInMonth) {
  if (row.children.length === 7) {
    row = document.createElement('tr');
    calendarBody.appendChild(row);
  }
  let cell = document.createElement('td');
  cell.textContent = day;
  row.appendChild(cell);
  day++;
}
for (let i = lastDay + 1; i < 7; i++) {
  let cell = document.createElement('td');
  row.appendChild(cell);
}
// add event to calendar
let event = document.getElementById('event');
let eventDate = document.getElementById('eventDate');
let eventTime = document.getElementById('eventTime');
let eventButton = document.getElementById('eventButton');
eventButton.addEventListener('click', () => {
  let date = eventDate.value;
  let time = eventTime.value;
  let day = date.slice(8);
  let month = date.slice(5, 7);
  let year = date.slice(0, 4);
  let eventCell = document.querySelector(`td:nth-child(${day})`);
  let eventDiv = document.createElement('div');
  eventDiv.textContent = `${time} ${event.value}`;
  eventCell.appendChild(eventDiv);
})

