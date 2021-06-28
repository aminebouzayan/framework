let mainBtn = document.getElementById('#default-btn');
let offCanvas = document.getElementById('off-canvas');

mainBtn.addEventListener('click', () => {
      offCanvas.classList.toggle('is-open');
})
