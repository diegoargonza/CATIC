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




  document.getElementById('0').addEventListener('click', () => {
    currentIndex = (0) % totalSlides;
    updateCarousel();
  });
  document.getElementById('1').addEventListener('click', () => {
    currentIndex = (1) % totalSlides;
    updateCarousel();
  });
  document.getElementById('2').addEventListener('click', () => {
    currentIndex = (2) % totalSlides;
    updateCarousel();
  });
  document.getElementById('3').addEventListener('click', () => {
    currentIndex = (3) % totalSlides;
    updateCarousel();
  });


}

