import 'html-escaper';
import 'cssesc';
import { createClient } from '@sanity/client';
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderHead, h as renderSlot } from '../astro_RsDJtvgf.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const sanityClient = createClient(
            {"apiVersion":"2023-03-20","projectId":"i622cvru","dataset":"production","studioBasePath":"/admin","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

const $$Astro$6 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/rachelsherard/WebProjects/kenilworth/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$5 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="header" data-astro-cid-3ef6ksr2> <h1 class="title" data-astro-cid-3ef6ksr2>Kenilworth Park</h1> <h2 class="subtitle" data-astro-cid-3ef6ksr2>Neighborhood Association</h2> <p class="tagline" data-astro-cid-3ef6ksr2>Kenilworth Park...A neighborhood <strong data-astro-cid-3ef6ksr2>WORTH</strong> caring about.</p> </header> `;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navigation;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<nav class="nav" tabindex="0" data-astro-cid-pux6a34n> <ul class="nav-menu" data-astro-cid-pux6a34n> <li class="menu-item" data-astro-cid-pux6a34n><a href="/"${addAttribute(currentPath === "" ? "active" : "", "class")} data-astro-cid-pux6a34n>Home</a></li> <li class="menu-item" data-astro-cid-pux6a34n><a href="/history"${addAttribute(currentPath === "history" ? "active" : "", "class")} data-astro-cid-pux6a34n>History</a></li> <li class="menu-item" data-astro-cid-pux6a34n><a href="/events"${addAttribute(currentPath === "events" ? "active" : "", "class")} data-astro-cid-pux6a34n>Events</a></li> <li class="menu-item" data-astro-cid-pux6a34n><a href="/resources"${addAttribute(currentPath === "resources" ? "active" : "", "class")} data-astro-cid-pux6a34n>Resources</a></li> <li class="menu-item" data-astro-cid-pux6a34n><a href="/board"${addAttribute(currentPath === "board" ? "active" : "", "class")} data-astro-cid-pux6a34n>Board</a></li> <li class="menu-item" data-astro-cid-pux6a34n><a href="/#contact"${addAttribute(currentPath === "contact" ? "active" : "", "class")} data-astro-cid-pux6a34n>Contact</a></li> </ul> </nav> `;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/components/Navigation.astro", void 0);

const $$Astro$3 = createAstro();
const $$MobileNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MobileNav;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<label class="hamburger-menu" data-astro-cid-37bvxqo4> <input type="checkbox" data-astro-cid-37bvxqo4> </label> <aside class="sidebar" data-astro-cid-37bvxqo4> <nav class="nav" data-astro-cid-37bvxqo4> <ul class="nav-menu" data-astro-cid-37bvxqo4> <li class="menu-item" data-astro-cid-37bvxqo4><a href="/"${addAttribute(currentPath === "" ? "active" : "", "class")} data-astro-cid-37bvxqo4>Home</a></li> <li class="menu-item" data-astro-cid-37bvxqo4><a href="/history"${addAttribute(currentPath === "history" ? "active" : "", "class")} data-astro-cid-37bvxqo4>History</a></li> <li class="menu-item" data-astro-cid-37bvxqo4><a href="/events"${addAttribute(currentPath === "events" ? "active" : "", "class")} data-astro-cid-37bvxqo4>Events</a></li> <li class="menu-item" data-astro-cid-37bvxqo4><a href="/resources"${addAttribute(currentPath === "resources" ? "active" : "", "class")} data-astro-cid-37bvxqo4>Resources</a></li> <li class="menu-item" data-astro-cid-37bvxqo4><a href="/board"${addAttribute(currentPath === "board" ? "active" : "", "class")} data-astro-cid-37bvxqo4>Board</a></li> <li class="menu-item" data-astro-cid-37bvxqo4><a href="/#contact"${addAttribute(currentPath === "contact" ? "active" : "", "class")} data-astro-cid-37bvxqo4>Contact</a></li> </ul> </nav> </aside> `;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/components/MobileNav.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <p class="footer__text" data-astro-cid-sz7xmlte>
Made with <svg data-sanity-icon="heart-filled" width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-sz7xmlte><path d="M17 16C15.8 17.3235 12.5 20.5 12.5 20.5C12.5 20.5 9.2 17.3235 8 16C5.2 12.9118 4.5 11.7059 4.5 9.5C4.5 7.29412 6.1 5.5 8.5 5.5C10.5 5.5 11.7 6.82353 12.5 8.14706C13.3 6.82353 14.5 5.5 16.5 5.5C18.9 5.5 20.5 7.29412 20.5 9.5C20.5 11.7059 19.8 12.9118 17 16Z" fill="currentColor" stroke="currentColor" stroke-width="1.2" data-astro-cid-sz7xmlte></path></svg> by <a href="https://theramoshe.com" target="_blank" data-astro-cid-sz7xmlte>theRamoShe</a> | &copy; ${year} </p> </footer> `;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Google fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet"><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div id="mobilenav" data-astro-cid-sckkx6r4>${renderComponent($$result, "MobileNav", $$MobileNav, { "data-astro-cid-sckkx6r4": true })}</div> <div class="container" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} <div id="regularnav" data-astro-cid-sckkx6r4>${renderComponent($$result, "Navigation", $$Navigation, { "data-astro-cid-sckkx6r4": true })}</div> <div id="mobileseparator" data-astro-cid-sckkx6r4></div> <main data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> </div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}  </body></html>`;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/layouts/Layout.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Board = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Board;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Board | Kenilworth Park Neighborhood Association" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section> <h1>Board</h1> </section> ` })}`;
}, "/Users/rachelsherard/WebProjects/kenilworth/src/pages/board.astro", void 0);

const $$file = "/Users/rachelsherard/WebProjects/kenilworth/src/pages/board.astro";
const $$url = "/board";

const board = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$Board,
        file: $$file,
        prerender,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, board as b, sanityClient as s };
