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
  var crearBoton = document.getElementById('paginadores');
  
  for(let i = 0; i < totalSlides; i ++){
    const boton = document.createElement('button');
    boton.id = i;
    boton.className = "bg-gray-100 border border-gray-700 w-3 h-3 rounded-full"
    boton.setAttribute('aria-label', 'Recurso-' + (i + 1));
 
    
    boton.addEventListener('click', () =>{
      currentIndex = (i) % totalSlides;
      updateCarousel();
    });

    crearBoton.appendChild(boton);

  }

    //carrusel automático 
    let autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateCarousel();
    }, 8000);
    
    
    

 
      updateCarousel();

}

