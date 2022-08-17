'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"favicon.ico": "74329e541dd0bafb9e44d80872ebc33b",
"index.html": "b1c37e82ab460ad5772bfb74258faba3",
"/": "b1c37e82ab460ad5772bfb74258faba3",
"main.dart.js": "91f823f8e37f8a039dacc0f1b41e9361",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "aaf4870e6086ee7a9d10fbbd068503a3",
".git/config": "7e9129009889692354b2234941c4b848",
".git/objects/0d/f9541d928fe56816bef56a4b6abfffd20d2863": "6c5f6f40e577eeb60ff9d4dfbd2da96d",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/57/41891d80d733d4ee2aaae5731184296d372a22": "f03cb0fd9318d479fedc180534c53ccd",
".git/objects/57/f5fbc437daa5aace5c3573aa3d03c7bb316d5b": "6403941970fc2d7a89846e0c9eb4317f",
".git/objects/6f/438be585d9226e20be111d988309da340dfde8": "dd4ff1b94165d58f212875dfa958c895",
".git/objects/69/862d317e9b87a58892416dce303644e2fba4d9": "3b1540127ab38c32c320a57ce4cea897",
".git/objects/51/e2b8ded8085e7a316e1258e6feff4e7febea09": "73ef01c72d14e428d5b202ffcf067485",
".git/objects/df/db4a2a73dcf110b5a4ff48cf85053f85694acb": "82a678b9bf99765e2475981423182712",
".git/objects/a5/b012165e2914e403566f8d4ccfd1c89b99e668": "25ab21e46349180588735f2804a5938c",
".git/objects/d1/55919a96526d1f2266da5320f4a88497e5142f": "fe20ac08acbcc8b173e0e7e139a345c7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/0fae5e5be8ad3065507ae5756509c3518ba0ff": "eb29ce7bbcc2c79cfd6374c6c14e3033",
".git/objects/bc/9ff78446356e3c7b87d3f0accbe002181df10e": "5ffc56f139fed921fd6ce73e85c668b0",
".git/objects/d8/bed33cd7f00558ff7c006800d5e98090c4160b": "ce16b0e5fb4ea99507395b953514379a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/1ef2036a9d683a52da7d98df6d2e08c2245d02": "4842d8a58cc2694c941a8c25011eec35",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/79b8fe5085492f2013c8ea34bcaa029960b898": "f6f264af411886131bad06afbb40ef1a",
".git/objects/cf/4a7516753d5ca478450749ab66e8e7d1a59b61": "e99cf92d960ec446dfbafbd8611ded48",
".git/objects/ed/b5fc7508d73d9580550c065d46d50698f3f2ed": "199ce471fa16ddd7198c0b7a1c225a31",
".git/objects/c6/598928fb2972abefe12db73c08a487216e867a": "645904cb42496593a92d8bc9e2c3026f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/1f/038185e25704b4926508c7381943452bc5d91a": "d7455152a9acd775ed08ae7d9cc52dcf",
".git/objects/1a/3985352d789601cfb2498ec9c3f4cafa17141e": "faa4fd7b8c46fed13aa88c9a760d6eec",
".git/objects/4c/26729c930bd9dc2b5a1569412acbd982bffb72": "1a692abda32e1f13adf09f19ec823207",
".git/objects/86/d2d84882724d8fc645c374cb35a335b1568ff9": "36a2cd411502a3a27989944873061c50",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/98/e8c22c363c18c132d0365d2021d84440fdbfc4": "024ebc4c56b86fec654bfd69887a86da",
".git/objects/53/1847a7c61507c100f1d7c42b6833af220666f6": "69855e488145b82cfb1ef5a9fa8b74c3",
".git/objects/5e/61367a643c99818fcc8d4989f4831deb46d2fe": "9795e74a39031192247d07aa88d045ea",
".git/objects/d4/356209ad7614a1c7ec991b202ce69b9291edc5": "a8a82177e0b54bdfb7a6ec90c77ee293",
".git/objects/a7/f6d5e5c079648a45b0056f6163585745c74ab4": "78846a2aba891eb6534707bab5247aa9",
".git/objects/b8/c5ff3d6fef6d2cc379c0a66ffbd9951d70c4e2": "751fae9e37d82bcc176a8ea9bf426eba",
".git/objects/d2/82098452fa48d61727e0eaf71ceb0c68e94973": "5863c127b8ed3949137b6967490a070a",
".git/objects/aa/c9bd148e27aa58617ac8578a89a6c8c3977af8": "117d94ced88328ef20eb1da9920671ea",
".git/objects/af/408270508958c307aba0ae8c9cd54edcdfba9c": "b5bb45f9a33d0e7053cf80ba1d48bda5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/c862407868494e13d2cfbcfa6040102119749a": "d357c0c1f18902f6677ddd209ea3de46",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f9/7f5b1476c04952b43b66a1f91a28ca40d5a00c": "c8bf23e6d44b4a08b4997ab2ff32ab70",
".git/objects/c2/e2c60709d5997c5fb9e28a7e7299bd3c8c2549": "0017b24cf495ff949e6d20f03634b9bf",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/290eaaa5519ab742f5f732f418354fcd21dfcc": "4c601bdf49813b909ff93b53479f2297",
".git/objects/2c/c60db4c7412ca95b9446779e498f77c15b5757": "6039128c1d6f41325c9e604b9678effc",
".git/objects/2c/6c013ba4c94ce70162c04c0bb91095119d6b8c": "b202c51b82ad7e50071f9491b1248f48",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0c3a332cdf2b68bc05c1128ae2d45550a54b63": "18799555939b9b75a7acd602dffad7c7",
".git/objects/1e/31ce3eb0daf4e4ccb72672a835417efabf236f": "682893e5f91840d97188d9f695de0c1a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/c8fa24fefdd47d01434629ca22960f1b8befef": "31d8e8d21a5ebf32fb8dba5c7fb31b48",
".git/objects/78/15981811df94b703b4f845f6110e079d5d305f": "c3212041fa1a2830a310c054de3a0544",
".git/objects/78/4562b4e72224551314c5044b9f58c5fae4f8ef": "207c3a57ad791d045dbc7bc3390536e1",
".git/objects/8b/0e5fe76f8cac84884dd01eaa65f605d6af332c": "15d9673a7fc8238fb9cffd087a953e19",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2340f10b7fca8fbae5b94985c7b522a",
".git/logs/refs/heads/main": "9c18cd2d44972486d8d478465fdd3693",
".git/logs/refs/remotes/origin/main": "a22613841424954c2478f03dba779e1e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cf45f6a4b1c30f94efc4c538566f2538",
".git/refs/remotes/origin/main": "cf45f6a4b1c30f94efc4c538566f2538",
".git/index": "f8797991771294c094baafdc6518c5aa",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "5c10dbb82bcd24d81e37fa3b1e4e8675",
"assets/NOTICES": "d37acf2a8506da2b4685bd0ad79d076f",
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
