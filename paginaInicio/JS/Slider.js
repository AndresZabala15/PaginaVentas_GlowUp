const slider = document.querySelector('.SliderPromo');
const slides = document.querySelectorAll('.SliderPromoImg');
const prevBtn = document.querySelector('.SliBottonPrev');
const nextBtn = document.querySelector('.SliBottonNext');

let index = 0;

function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

prevBtn.addEventListener('click', () => showSlide(index - 1));
nextBtn.addEventListener('click', () => showSlide(index + 1));

  // ⏱ Auto-slide
  setInterval(() => {
    showSlide(index + 1);
  }, 5000); // Cambia cada 5 segundos 1000 = 1 sg