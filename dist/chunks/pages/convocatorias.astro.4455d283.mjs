/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.067e9727.mjs';
import 'html-escaper';
import { $ as $$Layout } from './censo22.astro.0d45ef3f.mjs';

const $$Astro$1 = createAstro();
const $$CardCv = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardCv;
  const { title, clase, clase1 } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(clase, "class")}><h2 class="text-xl font-bold text-ath-gray-50">${title}</h2></div>
<div${addAttribute(clase1, "class")}>${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/components/cardCv.astro");

const $$Astro = createAstro();
const $$Convocatorias = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Convocatorias;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Convocatorias | CATIC" }, { "default": ($$result2) => renderTemplate`

    ${maybeRenderHead($$result2)}<main>
        <h1 class="text-4xl font-normal text-center mt-2 md:mt-10 mb-7">Convocatorias</h1>

        <div class="flex flex-wrap justify-center items-center gap-3 mb-4">
            <!--Card 25 --> 
            <div class=" shadow-lg w-11/12 sm:w-[400px] ">
                ${renderComponent($$result2, "Card", $$CardCv, { "title": "2025", "clase": "bg-rose-600 text-center pt-3 pb-3 rounded-t-md", "clase1": "text-sm text-azure-800 h-48 rounded-b-md border-ath-gray-200 border-2 border-t-1" }, { "default": ($$result3) => renderTemplate`
                    <div class="mt-6 ml-12">
                        <ul class="list-disc">
                            <li><a href="/docs/catic_convocatoria_2025.pdf" target="_blank">Convocatoria 2025</a></li>
    
                        </ul>
                    </div>  
                ` })}
            </div>
        
        
            <!--Card 24 --> 
            <div class=" shadow-lg w-11/12 sm:w-[400px] ">
                ${renderComponent($$result2, "Card", $$CardCv, { "title": "2024", "clase": "bg-indigo-600 text-center pt-3 pb-3 rounded-t-md", "clase1": "text-sm text-azure-800 h-48 rounded-b-md border-ath-gray-200 border-2 border-t-1" }, { "default": ($$result3) => renderTemplate`
                    <div class="mt-6 ml-12">
                        <ul class="list-disc">
                            <li><a href="/docs/catic_convocatoria_2024.pdf" target="_blank">Convocatoria 2024</a></li>
                            <!-- <li><a href="/docs/catic_entidades-anexo-convocatoria2023.pdf" target="_blank">Anexo Convocatoria</a></li> -->
                            <li><a href="/docs/catic24_resultados_convocatoria2024.pdf" target="_blank">Resultados al 14 de agosto de 2024</a></li>
                            <li><a href="/docs/Proceso_de_registro_de_alta_a_reserva_2024.pdf" target="_blank">Proceso de alta de equipos asignados por Convocatoria 2024 del CATIC</a></li>
                        </ul>
                    </div>  
                ` })}
            </div>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-3 mb-10">
            <!--Card 23 --> 
            <div class=" shadow-lg w-11/12 sm:w-[400px]">
                ${renderComponent($$result2, "Card", $$CardCv, { "title": "2023", "clase": " bg-bondi-600 text-center pt-3 pb-3 rounded-t-md", "clase1": "text-sm text-azure-800 h-48 rounded-b-md border-ath-gray-200 border-2 border-t-1" }, { "default": ($$result3) => renderTemplate`
                    <div class="mt-6 ml-12">
                        <ul class="list-disc">
                            <li><a href="/docs/catic_convocatoria_2023.pdf" target="_blank">Convocatoria 2023</a></li>
                            <li><a href="/docs/catic_entidades-anexo-convocatoria2023.pdf" target="_blank">Anexo Convocatoria</a></li>
                            <li><a href="/docs/catic23_resultados_convocatoria2023.pdf" target="_blank">Resultados al 27 de julio de 2023</a></li>
                            <li><a href="/docs/Proceso_de_registro_de_alta_a_reserva.pdf" target="_blank">Proceso de alta de equipos asignados <br> por Convocatoria 2023 del CATIC</a></li>
                        </ul>
                    </div>  
                ` })}
            </div>

            <!--Card 22 -->
            <div class="shadow-lg w-11/12 sm:w-[400px] ">
                ${renderComponent($$result2, "Card", $$CardCv, { "title": "2022", "clase": " bg-amethy-600 text-center pt-3 pb-3 rounded-t-md", "clase1": "text-sm text-azure-800 h-48 rounded-b-md border-ath-gray-200 border-2 border-t-1" }, { "default": ($$result3) => renderTemplate`
                    <div class="mt-6 ml-12">
                        <ul class="list-disc">
                            <li><a href="/docs/catic_convocatoria_2022.pdf" target="_blank">Convocatoria 2022</a></li>
                            <li><a href="/docs/catic_entidades-anexo-convocatoria2022.pdf" target="_blank">Anexo Convocatoria</a></li>
                            <li><a href="/catic_caratula-proyecto_convocatoria2022.docx" target="_blank">Carátula de presentación del proyecto</a></li>
                            <li><a href="/docs/catic22-resultados-convocatoria2022.pdf" target="_blank">Resultados al 5 de diciembre de 2022</a></li>
                            <li><a href="/docs/Conv2022-CATIC-ProcedimientoEntrega.pdf" target="_blank">Procedimiento de entrega-recepción de equipo<br>de cómputo</a></li>
                        </ul>
                    </div>
                ` })}
            </div>
            
        
            <!--Card 21 -->
        
            <div class="shadow-lg w-11/12 sm:w-[400px] ">
                ${renderComponent($$result2, "Card", $$CardCv, { "title": "2021", "clase": " bg-mountain-500 text-center pt-3 pb-3 rounded-t-md", "clase1": "text-sm text-azure-800 h-48 rounded-b-md border-ath-gray-200 border-2 border-t-1" }, { "default": ($$result3) => renderTemplate`
                    <div class="mt-6 ml-12">
                        <ul class="list-disc">
                            <li><a href="/docs/catic_convocatoria_2021.pdf" target="_blank">Convocatoria 2021</a></li>
                            <li><a href="/docs/ConvocatoriaCATIC2021_Anexo.pdf" target="_blank">Anexo Convocatoria</a></li>
                            <li><a href="/docs/catic21_resultados-convocatoria2021.pdf" target="_blank">Resultados al 25 de febrero de 2022</a></li>
                            <li><a href="/docs/Conv2021-CATIC-ProcedimientoEntrega.pdf" target="_blank">Procedimiento de entrega-recepción de equipo<br>de cómputo</a></li>
                            <li><a href="/verifica/">Procedimiento para verificar la instalación y uso<br>de equipos de cómputo asignados</a></li>
                        </ul>
                    </div>  
                ` })}
            </div>
        </div>
    

        <!--Datos del pie de página -->
        <div class="flex flex-col justify-center items-center mb-14">
            <div class="mb-4">
                <p class="text-center">Estamos atentos a dudas y comentarios en la cuenta de correo electrónico:<a href="mailto:catic@comunidad.unam.mx" class="text-venice-blue-600"> catic@unam.mx</a></p>
            </div>
            <div>
                <p class="text-center">Cd. Universitaria, Cd. Mx., 14 de agosto de 2024.</p>
            </div>
        </div>
    </main>


` })}`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/convocatorias.astro");

const $$file = "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/convocatorias.astro";
const $$url = "/convocatorias";

const convocatorias = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Convocatorias,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CardCv as $, convocatorias as c };
