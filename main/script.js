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


