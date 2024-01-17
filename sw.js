self.addEventListener('install', (e) => {
  e.waitUntil(
  caches.open('SimpleCalculator').then((cache) => cache.addAll([
    "Abstract.jpg",
    "Fire.js",
    "style.css",
    "Firebase8.js",
    "index.html",
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
