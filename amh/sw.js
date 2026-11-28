const V='amh-790949254c';const URLS=["./","./assets/source-serif-4-latin-opsz-normal-BpEBLj1O.woff2","./assets/index-BV4ESW-x.css","./assets/index-BjEKjJrM.js","./icon.svg","./manifest.webmanifest"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;const u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin||/\.(mp4|webm|mov)$/i.test(u.pathname))return;
e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).catch(()=>r.mode==='navigate'?caches.match('./'):undefined)))});