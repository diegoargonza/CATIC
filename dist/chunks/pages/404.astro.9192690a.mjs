/* empty css                         */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from '../astro.067e9727.mjs';
import 'html-escaper';

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${maybeRenderHead($$result)}<h1 class="text-blod mt-10 text-center">Error 404</h1>`;
}, "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/404.astro");

const $$file = "/Users/diego/Documents/CATIC-DIEGO/CATIC/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
