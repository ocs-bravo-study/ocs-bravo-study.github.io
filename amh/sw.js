const V='amh-a9e5a02c2f';const URLS=["./","./assets/index-A0nzMhAS.css","./assets/index-C4W4HfMY.js","./icon.svg","./manifest.webmanifest"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;const u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin||/\.(mp4|webm|mov)$/i.test(u.pathname))return;
e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).catch(()=>r.mode==='navigate'?caches.match('./'):undefined)))});