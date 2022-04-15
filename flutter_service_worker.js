'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6d2fd4056babc68a3df3615c6361a522",
".git/config": "f4e02778fde5b521320e214e6e7cef60",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c0d927f117b603f2021493dcc5d36e91",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e42cfcffa3562d3b084e3e5f2b458f2",
".git/logs/refs/heads/master": "8e42cfcffa3562d3b084e3e5f2b458f2",
".git/logs/refs/remotes/origin/master": "ca0a84b3f9a515b1f218950a31341ef3",
".git/objects/04/140be46e799e2eec449d92aab44c50a9c9f2fd": "f43753c773f9418b13d06ef6ffe8428b",
".git/objects/06/01160798ad60de0ae2072bb4bacce63d08b13b": "b7514a457a97c8cc74ace5dbf6f4a1c1",
".git/objects/15/315b56866552bf707ab98febdb72a50d631e90": "3a73b0a9279b70c6349e01db58b6eb20",
".git/objects/17/5629d5a479aa47f72b847cc63e71b772e8c576": "798415a53d8bdda599b0973e566b29c4",
".git/objects/18/f9a20442d415e8348502d8d847d5c2123a8f02": "954258cc3ef712f10d1107a296d04be0",
".git/objects/22/3adb8999dc2b2b7121af29cb7a5a55f1eae4ad": "66d6c8025100b99be78ea6061ef82e0c",
".git/objects/29/0a68c144b41e7d0b02427e2e56b3b858f58752": "14cef6a79903fedc2e9837ce55167298",
".git/objects/2a/a066f617d279ba42504bce7ebc3e105a3ea45a": "b15ce8061cececee2fcf8faa5af819b3",
".git/objects/2c/b4e2a2578261cd0c3241ab4564035c73ce8fd8": "29d829198ecc39061f8e180ff72a00e5",
".git/objects/32/f202a4f5fdf4618e0000ca2bb48b395d55da2a": "325519164ad96d09e766ff66da24da8d",
".git/objects/3a/479392746c39f68b45470eaa51ded2ca862b55": "7f4fa5d899f79a0435e4cceccb9b631f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/c3f5038042c2c3844e3fba4017a63fcf28531a": "aca73fee94b5dad748bf8b8db53f57d6",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/6bdca58f7e2e03079c508ba57616ea5c7ca136": "35e130834bec04a3e738eb8f9e9cd07c",
".git/objects/56/bdda614ffad20fae6c590a1f4efae2ba9e1afb": "856d4fed649a3be96d4d671e2013f5a1",
".git/objects/5c/ebf9bc50a7a22e50077590cde6ab31b1cff38b": "49bd9f2a42ea7c7e08f97a437ecf10b2",
".git/objects/6c/f26135caef015b13c8f653d242800ca41f43fc": "a3726ba35bbcc7d36153e1678bd5b696",
".git/objects/70/66aa3152628ef122e0749173b821ea48b4fb7c": "c4afde27c6623256440d4ce18b30b192",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/cb857dc9a03719897947a156a10a37554f95a8": "9639bde1907bb4c5ffe64a23bd9d013f",
".git/objects/7d/d8391114a9bb0b8a8b0e6e73331f63e1951ba9": "289d5c72df41e43d1b57ff38060c5d27",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9b/c4176b7db52c63cf9cd8f711a233c9d70979fa": "2b0af0cc1d969ed613218da0e6336a87",
".git/objects/9e/b667a75b9db6d9e2aad65b04c094113324cdf7": "af8281a2e8898bbd3c2b78cbfc244897",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/48b06741182e29f0164c0a3e62c3c27616794c": "072f5ed81360e035cf67c659d03c5eb0",
".git/objects/ae/481be9063dd03226c9ee66eae03a4a9d872c39": "55a1eebeda061a621f09299683e73aee",
".git/objects/af/ab1a961b1b104a96943735f25dd8c9d091e3d8": "e4ad8ef9da06139fd033a2ba286ff0ac",
".git/objects/af/f065730af396734a6dd8f4e9184482f18498e5": "489b7a764c978c7dee0a27c2c7aa0138",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/fdee56e36c75c000d30611a1aea6f516cb9a28": "87efcb463dd69467acd42f26558e0335",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c7/4057c0748680e90ee80a3f2507b7b3035a2b4f": "82e46a92788db023e85f0e0227fcc17b",
".git/objects/d2/7240278a3afa587db8619f5d37269a496934fe": "337e460100c37e3b46aa2c9a1acc74a7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/4fb7be8d770b3f92da6c3357cdca9b51e481a6": "b81aea0c23320fb40a4e6ce8366f16ae",
".git/objects/e3/036ef0fb9530c7a585a2e5c526b65dc20368da": "53178dd205cfc664a2fb3abe13f89166",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/90fdcb443e91ba468845eb51293149109fc635": "b42fd51304ec58fccd360dd9778ffc7c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/68f3266ae3c0da5964385e22b205089410ea84": "80f22b82c787a0d632b24d8861a91112",
".git/objects/f2/9ee4f2c9ec001593a4d295e71386eef30df5da": "6cfe193fd2a2487d224c79d83a355b9e",
".git/refs/heads/master": "549882043387a6e96275f8fbb2b435f3",
".git/refs/remotes/origin/master": "549882043387a6e96275f8fbb2b435f3",
"assets/AssetManifest.json": "caf30b66de859ea42e5a2ba7e8ee16ba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/blue.png": "39675392f6aaabbe186a9776f6f4b37f",
"assets/images/Dew.jpg": "279bf6d385c198188869b0b6dfa60a77",
"assets/images/green.png": "86976b70cd00f9ac5ea25c64a35ce4f3",
"assets/images/indigo.png": "9b0e1a3d5a9e4ee331d65071ca113636",
"assets/images/orange.png": "fe326bf16cec50e670733f9db549cbeb",
"assets/images/pink.png": "8bf488c0e1cf0ecc321e4df5fadb0bee",
"assets/images/purple.png": "7c68e2d35e9c64b07d9737acde6298a6",
"assets/images/red.png": "20f7bdaa7fa84d61335c315ca4fe7f2f",
"assets/images/yellow.png": "2b7739f2064d27372cdfaffa9a6e50e6",
"assets/NOTICES": "cc0701fd111df33390311278b4602fb5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "f00de1f742223b7cf4cec1c2a0cd9764",
"canvaskit/canvaskit.wasm": "efe4a5da0205bb8d8c5aca7dad981abd",
"canvaskit/profiling/canvaskit.js": "411ee45f5abb57975ee5243310c6953e",
"canvaskit/profiling/canvaskit.wasm": "c6681b1a749ad902eefcba11fed1cb3f",
"favicon.png": "1a6511cfea487caf6a3e5df99625bb41",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52a3a9af72cf07d0a0de6266be7d407e",
"/": "52a3a9af72cf07d0a0de6266be7d407e",
"main.dart.js": "d5c8850ba206e347fc26bb701f649726",
"manifest.json": "c0b124e9dc63cb48dca9bd3c39cf7914",
"version.json": "e583433b3ebf1787c5f313af26a69024"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
