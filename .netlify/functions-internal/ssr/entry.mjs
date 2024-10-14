import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ancqsU-e.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_B2_p1IeW.mjs');
const _page1 = () => import('./chunks/studio-route_WhkFTUBU.mjs');
const _page2 = () => import('./chunks/index_fgamtP0b.mjs');
const _page3 = () => import('./chunks/board_xZTwVERX.mjs');
const _page4 = () => import('./chunks/events_HqpeKF4Y.mjs');
const _page5 = () => import('./chunks/history_IIa1yHyb.mjs');
const _page6 = () => import('./chunks/resources_s6lePheB.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/@narration-sd/sanity-astro/dist/studio/studio-route.astro", _page1],
    ["src/pages/index.astro", _page2],
    ["src/pages/board.astro", _page3],
    ["src/pages/events.astro", _page4],
    ["src/pages/history.astro", _page5],
    ["src/pages/resources.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "420e85e9-12af-4a64-94cd-381303108213"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
