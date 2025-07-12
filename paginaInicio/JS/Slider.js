
//Slider principal 

(() => {
  let index = 0;

  function showSlide(i) {
    const slider = document.querySelector('.SliderPromo');
    const slides = document.querySelectorAll('.SliderPromoImg');
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  const prevBtn = document.querySelector('.SliBottonPrev');
  const nextBtn = document.querySelector('.SliBottonNext');
  
  prevBtn.addEventListener('click', () => showSlide(index - 1));
  nextBtn.addEventListener('click', () => showSlide(index + 1));

  // ⏱ Auto-slide
  setInterval(() => {
    showSlide(index + 1);
  }, 5000);
})();

//Slider Producto mas vendido
(() => {
const slider = document.querySelector('.ConteMasVend');
const slides = document.querySelectorAll('.ProduMasVend');
const btnPrev = document.querySelector('.BottonIzq');
const btnNext = document.querySelector('.BottonDer');

let index = 0;
const visibleCount = 4;

function showSlide(i) {
  const maxIndex = slides.length - visibleCount;
  index = Math.max(0, Math.min(i, maxIndex));
  const slideWidth = slides[0].offsetWidth;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

btnPrev.addEventListener('click', () => showSlide(index - 1));
btnNext.addEventListener('click', () => showSlide(index + 1));

// opcional: ajustar en resize
window.addEventListener('resize', () => showSlide(index));
})();



//Funciones abrir modal contactanos
  document.getElementById(`abrirModal`).onclick =function(e){
    e.preventDefault();
    document.getElementById(`pestaña_modal_contacto`).style.display = `block`;
  }

  document.getElementById(`cerrarModal`).onclick =function(){
    document.getElementById(`pestaña_modal_contacto`).style.display = `none`;
  }

  window.onclick = function(event){
    if(event.target == document.getElementById(`pestaña_modal_contacto`)){
      document.getElementById(`pestaña_modal_contacto`).style.display = `none`
    }
  }

