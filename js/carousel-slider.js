// Selectors

let carouselWrapper = document.querySelector('#carousel-wrapper');
let carouselControls = document.querySelector('[data-carousel-controls]');
let carouselIndicators = document.querySelector('[data-carousel-indicators]');

let images = carouselWrapper.querySelectorAll('img');
let indicators = carouselIndicators.querySelectorAll('ul li');
let previous = carouselControls.querySelector('.previous-slide');
let next = carouselControls.querySelector('.next-slide');
let slideNumber = carouselWrapper.querySelector('[data-slide-number]');

let currentSlide = 1;

const DURATION = 5e3;
const imagesArray = Array.from(images);
const imagesCount = imagesArray.length;

// Event Listeners

previous.addEventListener("click", moveBackward);
next.addEventListener("click", moveForward);
document.addEventListener("DOMContentLoaded", () => {
      window.setInterval(() => {
            if (currentSlide == imagesCount) currentSlide = 1;
            else currentSlide += 1;
            updateSlide();
      }, DURATION);
})

// Functions

function moveBackward() {
      // if (previous.classList.contains('disabled')) return null;
      if (currentSlide == 1) currentSlide = imagesCount + 1;
      else {
            currentSlide--;
            updateSlide();
      }
}

function moveForward() {
      // if (next.classList.contains('disabled')) return null;
      if (currentSlide == imagesCount) currentSlide = 0;
      else {
            currentSlide++;
            updateSlide();
      }
}

!function () {
      for (let i = 1; i <= imagesCount; i++) {
            let li = document.createElement('li');

            li.setAttribute('tabindex', "0");
            li.setAttribute('aria-labelledby', i);
            li.setAttribute('role', "menuitemradio");

            label = document.createElement('label');
            label.id = i;

            txt = document.createTextNode(i);
            label.appendChild(txt);
            li.appendChild(label);
            carouselIndicators.appendChild(li);
      }
      indicators = carouselIndicators.querySelectorAll('ul li');

      for (let indicator of indicators) {
            indicator.onclick = function () {
                  currentSlide = parseInt(this.getAttribute('aria-labelledby'));
                  updateSlide();
            }
      }
}();

function updateSlide() {
      slideNumber.textContent = `slide N°${currentSlide}`

      indicators = carouselIndicators.querySelectorAll('ul li');
      const indicatorsArray = Array.from(indicators);

      imagesArray.forEach(img => {
            img.classList.remove('active');
      })

      indicatorsArray.forEach(item => {
            item.classList.remove('active');
      })

      imagesArray[currentSlide - 1].classList.add('active');

      carouselIndicators.children[currentSlide - 1].classList.add('active');

      // if (currentSlide == 1) previous.classList.add('disabled');
      // else previous.classList.remove('disabled');

      // if (currentSlide == imagesCount) next.classList.add('disabled');
      // else next.classList.remove('disabled');
} updateSlide();