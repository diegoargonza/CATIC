/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../astro.067e9727.mjs';
import 'html-escaper';
import { $ as $$Layout } from './censo22.astro.0d45ef3f.mjs';

const bgImage = "/_astro/quienes.ac745753.webp";

const $$Astro$1 = createAstro();
const $$CardQ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardQ;
  const { image1, image2 } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="bg-ath-gray-100 sm:w-[700px] h-[400px] rounded-md border-2 border-ath-gray-200 border-t-0 shadow-xl">
    <div class="relative flex justify-center pt-10">
        <img class="w-[500px] h-[300px] rounded-md"${addAttribute(image1, "src")} alt="">
        <div class="absolute bottom-0">
            <img class="w-[83px] h-[80px] rounded-full"${addAttribute(image2, "src")} alt="">
        </div>
    </div>
</div>`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/components/cardQ.astro");

const bgImage1 = "/_astro/unamCard2.26e6738d.webp";

const $$Astro = createAstro();
const $$Consejeros = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Consejeros;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Consejeros | CATIC" }, { "default": ($$result2) => renderTemplate`

    ${maybeRenderHead($$result2)}<main class="mb-14">
        <h1 class="text-4xl font-normal text-center  mt-5 md:mt-10">Consejeros 2019-2021</h1>
        <div class="flex flex-col justify-center items-center mt-9">
            ${renderComponent($$result2, "CardQ", $$CardQ, { "image1": bgImage1, "image2": bgImage })}

            <div class="mt-10 mx-4 md:mx-0">
                <h5 class="text-xl mb-2 font-bold">Secretario Técnico del Consejo</h5>

                <p class="mb-6">Dr. Héctor Benítez Pérez,<br>Director General de Cómputo y de Tecnologías de Información y Comunicación. </p>

                <h5 class="text-xl mb-2">Consejeros</h5>
                <h6 class="font-bold">Por el Sistema de Bachillerato:</h6>
                <p class="mb-4">Ing. Armando Rodríguez Arguijo, Dirección General del CCH. </p>

                <h6 class="font-bold">Por Escuelas Nacionales y Facultades en Ciudad Universitaria:</h6>
                <p class="mb-4">Mtro. Rodolfo Romero Flores, Facultad de Derecho.</p>

                <h6 class="font-bold">Por Facultades de Estudios Superiores:</h6>
                <p class="mb-4">Vacante</p>

                <h6 class="font-bold">Por Campi universitarios foráneos:</h6>
                <p class="mb-4">Dr. Heberto Ferreira Medina, Instituto de Investigaciones en Ecosistemas y Sustentabilidad. </p>

                <h6 class="font-bold">Por Institutos y Centros de Investigación:</h6>
                <p class="mb-4">Vacante</p>

                <h6 class="font-bold">Por Dependencias Administrativas:</h6>
                <p class="mb-4">Vacante</p>

                <h6 class="font-bold">Vocales representantes expertos de entidades externas: </h6>
                <p class="mb-4">Dra. Alejandra Herrera Mendoza y Dr. Carlos Zozaya Gorostiza.</p>

            </div>
        </div>
    </main>

` })}`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/consejeros.astro");

const $$file = "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/consejeros.astro";
const $$url = "/consejeros";

const consejeros = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Consejeros,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { bgImage as b, consejeros as c };
