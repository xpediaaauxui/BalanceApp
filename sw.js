const CACHE = "balance-v1";
const ARCHIVOS = [
  "./",
  "./index.html",
  "./inicio.html",
  "./registro.html",
  "./codigo.html",
  "./divisiones.html",
  "./transacciones.html",
  "./mis-gastos.html",
  "./presupuestos.html",
  "./metas.html",
  "./chat.html",
  "./detalle-gasto.html",
  "./perfil.html",
  "./offline.html",
  "./css/styles.css",
  "./js/app.js",
  "./manifest.json",
  "./assets/splash-ellipse7141.png",
  "./assets/perfil-profilephoto.png"
];

self.addEventListener("install", function (evento) {
  evento.waitUntil(
    caches.open(CACHE).then(function (cache) {
      return cache.addAll(ARCHIVOS);
    })
  );
});

self.addEventListener("fetch", function (evento) {
  evento.respondWith(
    caches.match(evento.request).then(function (archivo) {
      if (archivo) return archivo;

      return fetch(evento.request).catch(function () {
        return caches.match("./offline.html");
      });
    })
  );
});
