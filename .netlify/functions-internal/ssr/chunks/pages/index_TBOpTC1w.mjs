import { s as sanityClient, $ as $$Layout } from './board_8bHuflAb.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_RsDJtvgf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import { $ as $$PortableText } from './history_WIn8jIG5.mjs';
import { a as getHome } from './events_Tl4pFlYt.mjs';
import imageUrlBuilder from '@sanity/image-url';
import { $ as $$Image } from './generic_jsuzurft.mjs';
/* empty css                          */

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const content = await getHome();
  const images = content[0].images;
  let random = Math.floor(Math.random() * images.length);
  const image = images[random];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kenilworth Park Neighborhood Association", "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="welcome" data-astro-cid-j7pv25f6> <div class="welcome-text" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "PortableText", $$PortableText, { "value": content[0].welcome, "data-astro-cid-j7pv25f6": true })} </div> <div class="welcome-image" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": urlFor(image).width(image.width).height(image.height).url(), "alt": "Kenilworth Park", "width": image.width, "height": image.height, "data-astro-cid-j7pv25f6": true })} </div> </section> <section id="buttons" data-astro-cid-j7pv25f6> <a class="btn" href="/history" data-astro-cid-j7pv25f6>Community History</a> <a class="btn" href="/events" data-astro-cid-j7pv25f6>Events Calendar</a> <a class="btn" href="/resources" data-astro-cid-j7pv25f6>Find Resources</a> <a class="btn" href="/board" data-astro-cid-j7pv25f6>Board Member Info</a> </section> <section id="contact" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Contact the Board: <a href="mailto:KPNAinc@gmail.com" data-astro-cid-j7pv25f6>KPNAinc@gmail.com</a></h3> </section> ` })}  <style>
  .welcome-text p {
    line-height: 1.5em;
  }
</style>`;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/pages/index.astro", void 0);

const $$file = "/Users/rachelsherard/WebProjects/kenilworth/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
