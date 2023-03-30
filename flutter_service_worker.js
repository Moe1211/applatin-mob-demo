'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "64f4d7cc2df75b255064079ba3abbb0b",
"splash/img/light-2x.png": "62b3d64d4f14bdbf671c8c827f57567f",
"splash/img/dark-4x.png": "199791aa90d0f8b0f9ad887d6becaecb",
"splash/img/light-3x.png": "0411bbdbe928d10943a7b7a859d58cb5",
"splash/img/dark-3x.png": "0411bbdbe928d10943a7b7a859d58cb5",
"splash/img/light-4x.png": "199791aa90d0f8b0f9ad887d6becaecb",
"splash/img/dark-2x.png": "62b3d64d4f14bdbf671c8c827f57567f",
"splash/img/dark-1x.png": "dcee20fad657c8b61538cfa8b04106e9",
"splash/img/light-1x.png": "dcee20fad657c8b61538cfa8b04106e9",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8632f66b778ab6afb1cdff5a5d50857a",
"index.html": "48fc1f44910572fed7415dfb72aa30cf",
"/": "48fc1f44910572fed7415dfb72aa30cf",
"main.dart.js": "cceec654ef194ff8f1c6aa0594eac84f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "b09b6b8d8a2b40e075b494635731a305",
"icons/Icon-192.png": "3e069fb7ad941e4ee0e260d200c1a509",
"icons/Icon-maskable-192.png": "3e069fb7ad941e4ee0e260d200c1a509",
"icons/Icon-maskable-512.png": "b3eadc1819f33568b9be0e85bdf672b0",
"icons/Icon-512.png": "b3eadc1819f33568b9be0e85bdf672b0",
"manifest.json": "7218147ccdcc771d390a27392c8791b4",
"assets/AssetManifest.json": "c9138e51e423523d203520e452890247",
"assets/NOTICES": "fc96b4e237307d242946ecbabc95d403",
"assets/FontManifest.json": "e4339bd8b9d814672dd67f8503b40f58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/svg/applatin_logo.svg": "65465c41e075383332af99150a2a07c8",
"assets/assets/svg/gps_icon.svg": "374f6dce2e46a5f229f9afa382f54c3e",
"assets/assets/svg/maintainceIcon.svg": "6547a4376da12e65e894b69a24900d9c",
"assets/assets/svg/callIcon.svg": "0f8711a60c5e9aa67453776661a8c5dd",
"assets/assets/svg/applatin_icon.svg": "f0b521e8a34bd1c9a02e4395251f7167",
"assets/assets/svg/langGlobeIcon.svg": "27da74265d720103b79b798788001aa0",
"assets/assets/svg/logo.svg": "76de31f90d5003c33e0567810cca555c",
"assets/assets/svg/phoneringer.svg": "84fabc82086108330699aadd6bdd8c4a",
"assets/assets/images/cart.png": "751ba2de9ea3629c356e16c93f979567",
"assets/assets/images/homeBackground.png": "029ee4c14a3b2e67402aa930df86ee87",
"assets/assets/images/search.png": "d6f4d89465eb8ea235dba3b5341dba06",
"assets/assets/images/logo.png": "f020b3def05902cab8aae3b42531ff0f",
"assets/assets/images/Logo2.png": "e57b5f22ae83ca54e04f7d8545931527",
"assets/assets/images/thumbnail.jpg": "81e9ddc0c324204d2d3feaa54298e807",
"assets/assets/images/AppIcon_ios-marketing-modified.png": "8a56e7a62a75281bf7ff674c2c41e640",
"assets/assets/images/logoHome2x.png": "9ea6329d9a2e2966314f91d3a46a49eb",
"assets/assets/fonts/Roboto-Regular.ttf": "3e1af3ef546b9e6ecef9f3ba197bf7d2",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/BarlowCondensed-Medium.ttf": "dd9fd2151ba8cdc93288d578e585ba98",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/fonts/Tajawal-Medium.ttf": "3358032dd0994cf4a2116f0b16f80d70",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
