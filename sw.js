const CACHE = "chess-trainer-v1";
const URLS = [
  "./index.html",
  "./manifest.json",
  "https://unpkg.com/chess.js@1.3.0/dist/esm/chess.js",
  "https://unpkg.com/cm-chessboard@8/assets/chessboard.css",
  "https://unpkg.com/cm-chessboard@8/assets/extensions/markers/markers.css",
  "https://unpkg.com/cm-chessboard@8/assets/extensions/promotion-dialog/promotion-dialog.css",
  "https://unpkg.com/cm-chessboard@8/assets/pieces/staunty.svg",
  "https://unpkg.com/cm-chessboard@8/src/Chessboard.js",
  "https://unpkg.com/cm-chessboard@8/src/extensions/markers/Markers.js",
  "https://unpkg.com/cm-chessboard@8/src/extensions/promotion-dialog/PromotionDialog.js",
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      const clone = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, clone));
      return res;
    }))
  );
});
