
const CACHE_NAME = "fire-safety-quiz-v1";
const assets = [
    "index.html",
    "quiz.html",
    "manifest.json",
    "sw.js",
    "assets/quiz-registration-qr.png",
    "assets/icon-192.png",
    "assets/icon-512.png"
];

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});
