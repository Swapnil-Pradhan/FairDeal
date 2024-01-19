const cacheVersion = 'v1.1';

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(`FairDeal-${cacheVersion}`).then((cache) => {
      return cache.addAll([
        "Abstract.jpg",
        "Fire.js",
        "style.css",
        "Firebase8.js",
        "index.html",
        "jQuery.js",
        "nodp.svg",
        "Log.js",
        "Product.ttf"
      ]);
    })
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    // Clean up old caches here if needed
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Cache hit - return response
      if (response) {
        return response;
      }

      // Clone the request
      const fetchRequest = e.request.clone();

      return fetch(fetchRequest).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Open a new cache and cache the response
        caches.open(`FairDeal-${cacheVersion}`).then((cache) => {
          cache.put(e.request, responseToCache);
        });

        return response;
      });
    })
  );
});
