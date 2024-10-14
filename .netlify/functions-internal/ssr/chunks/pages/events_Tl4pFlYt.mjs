import { s as sanityClient, $ as $$Layout } from './board_8bHuflAb.mjs';
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_RsDJtvgf.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import 'cssesc';
import groq from 'groq';

async function getHome() {
  return await sanityClient.fetch(
    groq`*[_type == "home"]`,
  );
}

async function getHistory() {
  return await sanityClient.fetch(
    groq`*[_type == "history"]`,
  );
}

async function getEvents() {
  return await sanityClient.fetch(
    groq`*[_type == "events"]`,
  );
}

const $$Astro = createAstro();
const prerender = false;
const $$Events = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Events;
  await getEvents();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Events | Kenilworth Park Neighborhood Association" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>Events</h1> </section> ` })}`;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/pages/events.astro", void 0);

const $$file = "/Users/rachelsherard/WebProjects/kenilworth/src/pages/events.astro";
const $$url = "/events";

const events = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Events,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { getHome as a, events as e, getHistory as g };
