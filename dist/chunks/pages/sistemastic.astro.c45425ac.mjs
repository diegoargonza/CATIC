/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.067e9727.mjs';
import 'html-escaper';
import { $ as $$Layout } from './censo22.astro.9645f114.mjs';
import { $ as $$CardCv } from './convocatorias.astro.d6aa0204.mjs';
/* empty css                             */
const $$Astro = createAstro();
const $$Sistemastic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sistemastic;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Convocatorias | CATIC" }, { "default": ($$result2) => renderTemplate`


    ${maybeRenderHead($$result2)}<main>
        <h1 class="text-4xl font-normal text-center mt-2 md:mt-10 mb-7">Sistemas para responsables TIC</h1>

        <div class="flex flex-wrap justify-center items-center gap-3 mb-4">
            <!--Card 25 --> 
            <div class=" shadow-lg w-11/12 sm:w-[550px] ">
                ${renderComponent($$result2, "Card", $$CardCv, { "title": "", "clase": "bg-amber-500 text-center pt-3 pb-3 rounded-t-md", "clase1": "text-sm text-azure-800 h-48 rounded-b-md border-ath-gray-200 border-2 border-t-1" }, { "default": ($$result3) => renderTemplate`
                    <div class="mt-6 ml-12">
                        <ul class="list-disc text-lg">
                            <li><a href="https://informaciontic.unam.mx/login" target="_blank">Registro de sistemas informáticos vigentes de la UNAM</a></li>
                            <li><a href="https://registrotic.catic.unam.mx/" target="_blank">Registro de Software de la UNAM</a></li>
    
                        </ul>
                    </div>  
                ` })}
            </div>
        
        

    </div></main>
  

` })}`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/sistemastic.astro");

const $$file = "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/sistemastic.astro";
const $$url = "/sistemastic";

export { $$Sistemastic as default, $$file as file, $$url as url };
