self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('FairDeal').then((cache) => cache.addAll([
      "Abstract.jpg",
      "Firebase8.js",
      "jQuery.js",
      "nodp.svg",
      "Product.ttf"
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
})