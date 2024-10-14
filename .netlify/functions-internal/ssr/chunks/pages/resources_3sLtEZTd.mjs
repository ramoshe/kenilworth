import { $ as $$Layout } from './board_8bHuflAb.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_RsDJtvgf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';

const $$Astro = createAstro();
const prerender = false;
const $$Resources = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resources;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources | Kenilworth Park Neighborhood Association" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>Resources</h1> </section> ` })}`;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/pages/resources.astro", void 0);

const $$file = "/Users/rachelsherard/WebProjects/kenilworth/src/pages/resources.astro";
const $$url = "/resources";

export { $$Resources as default, $$file as file, prerender, $$url as url };
