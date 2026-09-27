const CACHE_NAME = 'danza-app-v3';
const urlsToCache = [
  './',
  './index.html',
  './styles.css',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
}); function actualizarTextoAutorizacion() {
  const tutor = document.getElementById('nombreTutor').value.trim();
  const dni = document.getElementById('dniTutor').value.trim();
  const alumno = document.getElementById('nombreAlumno').value.trim();

  document.getElementById('outTutor').textContent = tutor !== '' ? tutor : '____________________';
  document.getElementById('outDni').textContent = dni !== '' ? dni : '____________________';
  document.getElementById('outAlumno').textContent = alumno !== '' ? alumno : '____________________';
}

