const CACHE = "chess-trainer-v6";
const PRECACHE = [
  "./index.html",
  "./manifest.json",
  "https://cdn.jsdelivr.net/npm/chess.js@1.3.0/+esm",
  "https://cdn.jsdelivr.net/npm/cm-chessboard@8.7.8/src/Chessboard.js",
  "https://cdn.jsdelivr.net/npm/cm-chessboard@8.7.8/src/extensions/markers/Markers.js",
  "https://cdn.jsdelivr.net/npm/cm-chessboard@8.7.8/src/extensions/promotion-dialog/PromotionDialog.js",
  "https://cdn.jsdelivr.net/npm/cm-chessboard@8.7.8/assets/chessboard.css",
  "https://cdn.jsdelivr.net/npm/cm-chessboard@8.7.8/assets/extensions/markers/markers.css",
  "https://cdn.jsdelivr.net/npm/cm-chessboard@8.7.8/assets/extensions/promotion-dialog/promotion-dialog.css",
  "https://cdn.jsdelivr.net/npm/cm-chessboard@8.7.8/assets/pieces/staunty.svg",
  "./sounds/move.ogg",
  "./sounds/capture.ogg",
  "./sounds/done.ogg",
  "./sounds/wrong.ogg",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Network first for index.html (always get latest), cache first for assets
self.addEventListener("fetch", e => {
  const url = e.request.url;
  const isHTML = url.endsWith("index.html") || url.endsWith("/");

  if (isHTML) {
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }))
    );
  }
});
