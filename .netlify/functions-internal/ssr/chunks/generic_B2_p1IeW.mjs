export { renderers } from '../renderers.mjs';

const page = () => import('./pages/generic_jsuzurft.mjs').then(n => n.g);

export { page };
