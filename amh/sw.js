const V='amh-086a4823bb';const URLS=["./","./assets/index-CodvUOZ-.css","./assets/index-CTq-RPZt.js","./icon.svg","./manifest.webmanifest"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(URLS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).catch(()=>r.mode==='navigate'?caches.match('./'):undefined)))});