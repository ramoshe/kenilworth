import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_RsDJtvgf.mjs';
import 'cssesc';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{margin:0;padding:0}\n"}],"routeData":{"type":"page","isIndex":false,"route":"/admin/[...params]","pattern":"^\\/admin(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"node_modules/@narration-sd/sanity-astro/dist/studio/studio-route.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/board.-h27prWS.css"},{"type":"inline","content":"#welcome[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:8vh;margin-top:2vh}#welcome[data-astro-cid-j7pv25f6] div[data-astro-cid-j7pv25f6]{width:45%}.welcome-image[data-astro-cid-j7pv25f6]{display:flex;justify-content:flex-end}.welcome-image[data-astro-cid-j7pv25f6] img[data-astro-cid-j7pv25f6]{width:100%;height:auto;aspect-ratio:1 / 1;-o-object-fit:cover;object-fit:cover}@media (max-width: 1000px){#welcome[data-astro-cid-j7pv25f6] div[data-astro-cid-j7pv25f6]{width:100%}.welcome-text[data-astro-cid-j7pv25f6]{margin-bottom:2em}}#buttons[data-astro-cid-j7pv25f6]{width:100%;display:flex;flex-wrap:wrap;justify-content:center;align-items:center}.btn[data-astro-cid-j7pv25f6]{text-align:center;text-decoration:none;border:3px solid var(--primary);border-radius:100px;width:40%;min-width:200px;justify-self:center;padding:1em;margin:1em;font-size:1.2em;font-weight:600;color:var(--primary);box-shadow:5px 5px 0 var(--gray);transition:all .5s ease}.btn[data-astro-cid-j7pv25f6]:hover{background-color:var(--primary-dark);color:var(--gray-light)}.btn[data-astro-cid-j7pv25f6]:active{background-color:var(--primary);box-shadow:2px 2px 0 var(--gray)}@media (max-width: 1200px){.btn[data-astro-cid-j7pv25f6]{width:80%}}#contact[data-astro-cid-j7pv25f6]{margin:0 auto;height:30vh;display:flex;justify-content:center;align-items:center;font-size:1.5em}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/board.-h27prWS.css"}],"routeData":{"route":"/board","isIndex":false,"type":"page","pattern":"^\\/board\\/?$","segments":[[{"content":"board","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/board.astro","pathname":"/board","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/board.-h27prWS.css"}],"routeData":{"route":"/events","isIndex":false,"type":"page","pattern":"^\\/events\\/?$","segments":[[{"content":"events","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/events.astro","pathname":"/events","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/board.-h27prWS.css"},{"type":"inline","content":"#content[data-astro-cid-tal57otx]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-bottom:20vh}.section[data-astro-cid-tal57otx]{width:47%}\n"}],"routeData":{"route":"/history","isIndex":false,"type":"page","pattern":"^\\/history\\/?$","segments":[[{"content":"history","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/history.astro","pathname":"/history","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.l-JsOPk0.js"}],"styles":[{"type":"external","src":"/_astro/board.-h27prWS.css"}],"routeData":{"route":"/resources","isIndex":false,"type":"page","pattern":"^\\/resources\\/?$","segments":[[{"content":"resources","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resources.astro","pathname":"/resources","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/rachelsherard/WebProjects/kenilworth/src/pages/board.astro",{"propagation":"none","containsHead":true}],["/Users/rachelsherard/WebProjects/kenilworth/src/pages/events.astro",{"propagation":"none","containsHead":true}],["/Users/rachelsherard/WebProjects/kenilworth/src/pages/history.astro",{"propagation":"none","containsHead":true}],["/Users/rachelsherard/WebProjects/kenilworth/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/rachelsherard/WebProjects/kenilworth/src/pages/resources.astro",{"propagation":"none","containsHead":true}],["/Users/rachelsherard/WebProjects/kenilworth/node_modules/@narration-sd/sanity-astro/dist/studio/studio-route.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/index.astro":"chunks/pages/index_TBOpTC1w.mjs","/src/pages/resources.astro":"chunks/pages/resources_3sLtEZTd.mjs","/node_modules/@narration-sd/sanity-astro/dist/studio/studio-route.astro":"chunks/pages/studio-route_O_QVW2E5.mjs","\u0000@astrojs-manifest":"manifest_ancqsU-e.mjs","/Users/rachelsherard/WebProjects/kenilworth/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_B2_p1IeW.mjs","\u0000@astro-page:node_modules/@narration-sd/sanity-astro/dist/studio/studio-route@_@astro":"chunks/studio-route_WhkFTUBU.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_fgamtP0b.mjs","\u0000@astro-page:src/pages/board@_@astro":"chunks/board_xZTwVERX.mjs","\u0000@astro-page:src/pages/events@_@astro":"chunks/events_HqpeKF4Y.mjs","\u0000@astro-page:src/pages/history@_@astro":"chunks/history_IIa1yHyb.mjs","\u0000@astro-page:src/pages/resources@_@astro":"chunks/resources_s6lePheB.mjs","/Users/rachelsherard/WebProjects/kenilworth/node_modules/sanity/lib/_chunks/resources-9TIIL7Ur.js":"_astro/resources-9TIIL7Ur.800MTGDh.js","/Users/rachelsherard/WebProjects/kenilworth/node_modules/sanity/lib/_chunks/index-2kSxso3r.js":"_astro/index-2kSxso3r.LA9xXC5Y.js","@astrojs/react/client.js":"_astro/client.6sQjOzec.js","/Users/rachelsherard/WebProjects/kenilworth/node_modules/@narration-sd/sanity-astro/dist/studio/studio-component":"_astro/studio-component.Gh5LD-_Y.js","/Users/rachelsherard/WebProjects/kenilworth/node_modules/sanity/lib/_chunks/index-HcF369ru.js":"_astro/index-HcF369ru.e6ah9gMn.js","/Users/rachelsherard/WebProjects/kenilworth/node_modules/sanity/lib/_chunks/resources-u_a8Mu5V.js":"_astro/resources-u_a8Mu5V.RXVMlwoN.js","/Users/rachelsherard/WebProjects/kenilworth/node_modules/@sanity/client/dist/_chunks/stegaEncodeSourceMap-gZIRaYar.js":"_astro/stegaEncodeSourceMap-gZIRaYar.IIb5QZMc.js","/astro/hoisted.js?q=0":"_astro/hoisted.l-JsOPk0.js","/Users/rachelsherard/WebProjects/kenilworth/node_modules/sanity/lib/_chunks/index-MAAxgUnl.js":"_astro/index-MAAxgUnl.ftHLmpDj.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/board.-h27prWS.css","/astro.svg","/favicon.svg","/sanity.svg","/_astro/browser.ptpM3LLO.js","/_astro/client.4fvxiHLP.js","/_astro/client.6sQjOzec.js","/_astro/hoisted.l-JsOPk0.js","/_astro/index-2kSxso3r.LA9xXC5Y.js","/_astro/index-HcF369ru.e6ah9gMn.js","/_astro/index-MAAxgUnl.ftHLmpDj.js","/_astro/resources-9TIIL7Ur.800MTGDh.js","/_astro/resources-u_a8Mu5V.RXVMlwoN.js","/_astro/stegaEncodeSourceMap-gZIRaYar.IIb5QZMc.js","/_astro/studio-component.Gh5LD-_Y.js","/_astro/studio-component.WHjRrqEF.js"],"buildFormat":"directory"});

export { manifest };
