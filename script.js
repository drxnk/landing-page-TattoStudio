const slideC = document.getElementById("orcamento");
const slides = document.getElementById("slides");
const slidesLength = slides.querySelectorAll("div").length;

const btnD = document.getElementById("direita");
const btnE = document.getElementById("esquerda");

let slideIndex = 0;

btnD.addEventListener("click", () => trocarSlide("direita"));
btnE.addEventListener("click", () => trocarSlide("esquerda"));


const trocarSlide = (direcao) => {
  const slideWidth = slideC.clientWidth;
  
  if (direcao === "direita") {
    slideIndex++;
    if (slideIndex > slidesLength - 1) {
      slideIndex = 0;
    }
  } else if (direcao === "esquerda") {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slidesLength - 1;
    }
  }
  
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
};

