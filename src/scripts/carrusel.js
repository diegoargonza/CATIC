export function initCarrusel(){
  const slidesContainer = document.getElementById('carousel-slides');
  const slides = slidesContainer.children;
  const totalSlides = slides.length;


  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;

  for(var i = 0; i<totalSlides; i++){
    var noSelect = document.getElementById(i)
    noSelect.style.backgroundColor = "#EAEAEA"
    console.log(i)        
  }


    var elegida = document.getElementById(currentIndex)
    elegida.style.backgroundColor = `#B7DDFA`;
  }

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });


//Creación de botones 



//Ciclo para la paginación 

for(let numero = 0; numero < totalSlides; numero++ ){
  document.getElementById(numero).addEventListener('click', () => {
    currentIndex = (numero) % totalSlides;
    updateCarousel();
  }); 

}





}

