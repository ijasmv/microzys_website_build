'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"favicon.ico": "74329e541dd0bafb9e44d80872ebc33b",
"index.html": "cb579ca482bc93b9ac3d19f2e340a617",
"/": "cb579ca482bc93b9ac3d19f2e340a617",
"main.dart.js": "9ecfa1b112d27eb64857c3a771e0295f",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/android-chrome-192x192.png": "ec5e227ae37110c14f280bd5b465c99e",
"icons/apple-touch-icon.png": "d089e26900e9ba24a8a1817181f737bc",
"icons/android-chrome-512x512.png": "04f33feaefb384cb09a55937174cc845",
"manifest.json": "8efb546e7b4da379e3de8df8fff93a9e",
"assets/AssetManifest.json": "5c10dbb82bcd24d81e37fa3b1e4e8675",
"assets/NOTICES": "6a08801201da3a524b789ede27d6a450",
"assets/FontManifest.json": "6d072e2ac850f949cd769bb8ffc4a6ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/serv_img_4.jpeg": "ffb863912943d39ece541bc5d7d6ec08",
"assets/assets/images/bn_easyvat.png": "d0f45aab42fe180234ae9de782b6f624",
"assets/assets/images/ic_twitter.svg": "64c341fa98a5b20598ee33d2a7f3d8c4",
"assets/assets/images/banner.jpeg": "88151509fc8c17c1290dd0f2f96874b3",
"assets/assets/images/ic_team.svg": "a789e4d17f2128467b17457fd33db348",
"assets/assets/images/ic_windows_sw.svg": "bf7f7e6fc083fb2149403ff2d6d46332",
"assets/assets/images/bg_footer.png": "6311cf6cb5ec49f77a7088d85fdae3a2",
"assets/assets/images/bg_service.png": "e792ac6a7c2109503c90c1b531d66a9f",
"assets/assets/images/serv_img_2.jpeg": "3dc76b99a075094e8d1429131f682314",
"assets/assets/images/ic_linkedin.svg": "7c9526f1522ae66dbe231f3d81e3c7b4",
"assets/assets/images/serv_img_3.jpeg": "b8dd397aebf3bacd05e3480606762098",
"assets/assets/images/ic_mob_dev.svg": "ff5bdcb601c13ff3fb874d12f0dcd869",
"assets/assets/images/bn_edine.png": "5ac4fd8acb52a0523168d50fcbd9aa3a",
"assets/assets/images/ic_soft_dev.svg": "5357e0004adac0008ad3d2dab117f677",
"assets/assets/images/bn_waiter.png": "f6012c033a1c6bf5abe52c354de41f6e",
"assets/assets/images/serv_img_1.jpeg": "1152910b878ea2a6cf04924b934e9057",
"assets/assets/images/ic_exp.svg": "013130b89574328c0660eae2dd556262",
"assets/assets/images/about_img.jpeg": "9f02071777c3834f622a27560d4069e7",
"assets/assets/images/bn_easy_pos.png": "665521dc0b9b1e5be12ce5e9a21f3b2a",
"assets/assets/images/ic_fb.svg": "99ba8dba181bbe72930f372765d74ab4",
"assets/assets/images/ic_web_dev.svg": "559713d2728659f94174b1133fb86326",
"assets/assets/images/ic_instagram.svg": "5f6e12f22e1162f7e955a15b9ec951c6",
"assets/assets/fonts/Nunito-Medium.ttf": "26a1b6a894383eba0c5139e8b7174677",
"assets/assets/fonts/Nunito-Regular.ttf": "04ba025b0c09479276c42d4913d0ad41",
"assets/assets/fonts/Nunito-SemiBold.ttf": "5e6fcfa4f65fc3c42e2bf859926c8a38",
"assets/assets/fonts/Nunito-Bold.ttf": "f14bc25a725851f54138aefcee1a1a3a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
