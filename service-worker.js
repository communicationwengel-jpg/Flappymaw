self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("flappy-maw-v3").then((cache) => cache.addAll([
      "./",
      "./index.html",
      "./crte.png",
      "./imgcarte.png",
      "./manifest.json"
    ]))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
