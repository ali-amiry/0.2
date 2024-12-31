self.addEventListener('install', (event) => {
    console.log('Service Worker تم تثبيته');
    event.waitUntil(
        caches.open('pwa-cache').then((cache) => {
            return cache.addAll([
                '/index.html',
                '/styles.css',
                '/app.js',
                '/images/icons/icon-192x192.png',
                '/images/icons/icon-512x512.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
