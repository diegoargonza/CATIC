/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.067e9727.mjs';
import 'html-escaper';
import { $ as $$Layout } from './censo22.astro.9645f114.mjs';
import { b as bgImage } from './consejeros.astro.afcf084b.mjs';
/* empty css                             */
const $$Astro$3 = createAstro();
const $$Tarjeta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Tarjeta;
  const { nombre, url, colorTitle, colorTriangle, enlace } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<section class="w-[400px] ">
    <div class="card transition-transform duration-300 ease-in-out hover:scale-110 ">
       <a${addAttribute(enlace, "href")}>
        <div class="card-img ">
            <div${addAttribute(`triangle ${colorTriangle} to-50% `, "class")}></div>
            <img${addAttribute(url, "src")} alt="" class="col-span-10 hover:cursor-pointer ">
        </div>
        <div${addAttribute(`title ${colorTitle}`, "class")}>${nombre} </div>
    </a>
</div></section>`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/components/tarjeta.astro");

const escNORMATECA = "/_astro/esc_NORMATECA.357c4085.jpg";

const escREDTIC = "/_astro/esc_REDTIC.8e30e081.jpg";

const escDGTIC = "/_astro/esc_DGTIC.60c90b80.jpg";

const escDGPr = "/_astro/esc_DGPr.4e1cb10e.png";

const bgImg2 = "data:image/webp;base64,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";

const bgImg3 = "/_astro/acuerdo2.62a55aea.webp";

const bgImg4 = "/_astro/convocatorias.489b399b.webp";

const bgImg5 = "/_astro/sistemas_respTIC.8650fdda.webp";

const bgImg6 = "/_astro/normatividad.d86bebde.webp";

const bgImageR24 = "/_astro/bnr_resultados24.54bb16d6.webp";

const bgImage0 = "/_astro/bannerPrincipios.2d5c7d33.webp";

const conv25 = "/_astro/bnr_conv25.afc4e305.jpg";

const cata25 = "/_astro/bnr_catalogo25.351560bd.jpg";

const $$Astro$2 = createAstro();
const $$Slides = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Slides;
  const { titulo, texto, fondo, imagen, enlace } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class=" relative w-full flex-shrink-0 ">
        <img${addAttribute(imagen, "src")} class="w-full " alt="Slide 1">
        <div${addAttribute(`absolute inset-0 flex flex-col items-center justify-center text-white ${fondo}`, "class")}>
            <h2 class="text-5xl font-bold text-center p-4">${titulo}</h2>
            <p class="text-lg cursor-pointer hover:text-gray-300"><a${addAttribute(enlace, "href")}>${texto}</a></p>
        </div>
    </div>`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/components/Slides.astro");

const $$Astro$1 = createAstro();
const $$Carrusel = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carrusel;
  return renderTemplate`${maybeRenderHead($$result)}<div class="relative w-full max-w-6xl mx-auto overflow-hidden mt-4" id="carousel">
  <div class="flex transition-transform duration-500" id="carousel-slides">
    <!--Slide 1 -->
    ${renderComponent($$result, "Slides", $$Slides, { "titulo": "Proceso de alta de equipos", "fondo": "bg-rose-600/60", "texto": "Haz click aqu\xED para conocer los detalles", "imagen": bgImageR24, "enlace": "../../public/docs/Proceso_de_registro_de_alta_a_reserva_2024.pdf" })}
    <!--Slide 2 -->
    ${renderComponent($$result, "Slides", $$Slides, { "titulo": "Principios del software libre y c\xF3digo abierto en al UNAM", "fondo": "bg-indigo-600/60", "enlace": "", "texto": "Haz click aqu\xED para conocer los detalles", "imagen": bgImage0 })}
    <!--Slide 3 -->
    ${renderComponent($$result, "Slides", $$Slides, { "titulo": "Cat\xE1logo base para equipo de c\xF3mputo y perif\xE9ricos  ", "fondo": "bg-green-600/60", "enlace": "../../public/docs/CatalogoBase-2025-180325.pdf", "texto": "Haz click aqu\xED para conocer los detalles", "imagen": cata25 })}

    ${renderComponent($$result, "Slides", $$Slides, { "titulo": "Convocatoria 2025 para la asignaci\xF3n de equipos de c\xF3mputo", "fondo": "bg-purple-600/60", "enlace": "../../public/docs/catic_convocatoria_2025.pdf", "texto": "Haz click aqu\xED para conocer los detalles", "imagen": conv25 })}
  </div> 

  <!--Botones -->

  <button id="prevBtn" class="absolute left-2 md:left-4 bottom-1 -translate-y-1/2 bg-white hover:bg-gray-300 text-gray-800 hover:text-blue-600 rounded-full p-2 md:p-3 shadow-md md:shadow-lg transition-all duration-500">
      &larr;
  </button>
  <button id="nextBtn" class="absolute right-2 md:right-4 bottom-1 -translate-y-1/2 bg-white hover:bg-gray-300 text-gray-800 hover:text-blue-600 rounded-full p-2 md:p-3 shadow-md md:shadow-lg transition-all duration-500">
      &rarr;
  </button>

  </div>`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/components/carrusel.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CATIC" }, { "default": ($$result2) => renderTemplate`

	${maybeRenderHead($$result2)}<main class="mb-5">
		<!--Carrusel -->
		<section>
			${renderComponent($$result2, "Carrusel", $$Carrusel, {})}
		</section>

		
		<!--Tarjetas-->
		<section class="flex flex-wrap justify-center text-center  ">
			<!--Quines somos -->
			${renderComponent($$result2, "Tarjeta", $$Tarjeta, { "nombre": "Quienes Somos", "url": bgImage, "enlace": "/quienesSomos", "colorTitle": "bg-indigo-600", "colorTriangle": "bg-indigo-800" })}
			<!--Consejeros 2019-2021 -->
			${renderComponent($$result2, "Tarjeta", $$Tarjeta, { "nombre": "Consejeros 2019-2021", "url": bgImg2, "enlace": "/consejeros", "colorTitle": "bg-green-800", "colorTriangle": "bg-green-700" })}
			<!--Acuerdos -->
			${renderComponent($$result2, "Tarjeta", $$Tarjeta, { "nombre": "Acuerdos", "url": bgImg3, "enlace": "/quienesSomos", "colorTitle": "bg-blue-600", "colorTriangle": "bg-blue-800" })}
			<div class="w-full hidden lg:block">

			</div>
			<!--Convocatorias -->
			${renderComponent($$result2, "Tarjeta", $$Tarjeta, { "nombre": "Convocatorias", "url": bgImg4, "enlace": "/convocatorias", "colorTitle": "bg-rose-600", "colorTriangle": "bg-rose-800" })}
			<!--Sistemas para responsables TIC -->
			${renderComponent($$result2, "Tarjeta", $$Tarjeta, { "nombre": "Sistemas para responsables TIC", "url": bgImg5, "enlace": "/sistemastic", "colorTitle": "bg-orange-600", "colorTriangle": "bg-orange-800" })}
			<!--Normatividad -->
			${renderComponent($$result2, "Tarjeta", $$Tarjeta, { "nombre": "Normatividad", "url": bgImg6, "enlace": "/normatividad", "colorTitle": "bg-green-700", "colorTriangle": "bg-green-800" })} 
		</section>

		<!--Patrocinadores -->
		<div class="flex flex-col sm:flex-row justify-center items-center gap-10 my-10">
            <a href="https://www.red-tic.unam.mx/normatic" target="_blank" class="text-sm underline font-bold pr-3 pl-3"><img${addAttribute(escNORMATECA, "src")} class="grayscale hover:filter-none transition-all" width="190" alt="NORMATECA TIC"></a>
          
            <a href="https://www.red-tic.unam.mx/" target="_blank" class="text-sm underline font-bold pr-3 pl-3"><img${addAttribute(escREDTIC, "src")} class="grayscale hover:filter-none transition-all" width="120" alt="REDTIC"></a>
       
            <a href="https://www.tic.unam.mx/servicios-de-tic/" target="_blank" class="text-sm underline font-bold pr-3 pl-3"><img${addAttribute(escDGTIC, "src")} class="grayscale hover:filter-none transition-all" width="190" alt="DGTIC"></a>
         
            <a href="https://www.proveeduria.unam.mx/app.dgpr/marco/" target="_blank" class="text-sm underline font-bold pr-3 pl-3"><img${addAttribute(escDGPr, "src")} class="grayscale hover:filter-none transition-all" width="120" alt="DGPr"></a>
        </div>
	</main>



` })}`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/index.astro");

const $$file = "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
