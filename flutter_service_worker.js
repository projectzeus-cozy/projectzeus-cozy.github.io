'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b219159e2454cf2637400fe15ae9a22a",
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
".git/index": "1c6fcda32c550551dedfc160d36f0d88",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea321ae589526e1d45a7a01a238daf83",
".git/logs/refs/heads/master": "ea321ae589526e1d45a7a01a238daf83",
".git/logs/refs/remotes/origin/master": "8e9619e4f646413ae98aee0a3629da55",
".git/objects/02/dbba754b64d21789fe1cdd50fbc4cdd1d7d17e": "ea679b16489858ce3e993581bdad02fd",
".git/objects/05/bd7ee48e8d76198f562946e7b1aa16aed0c58c": "2d098836e7954854fcd3ef0e45bfe465",
".git/objects/1a/416fcb65ab7769d445c6f69efd920b9a93630d": "2f1039522820a907d6d3a5a6aacc08c6",
".git/objects/2c/4726ff5215c4655de9f2672144e3a4f73fe048": "8544b269764f948ed51b6293021bb1b2",
".git/objects/2e/3ac3021e035de4f87586fb76b4fb5df43d93ed": "196ab5bdbe26032165d00ebc46a94a4e",
".git/objects/2f/40849432c1c705663b7383e2b75b93db0dd213": "7b2e9f0e0b0176e6a8ccfc75cfa7e33d",
".git/objects/32/09af9dc7e35496be4cbf039a13b9e1077ab05a": "039d95c09f76da8653dfe4121f84c407",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/45/73e146f00e9878b95642054f3f26ec6005138a": "e7578b5d465c098636a71954d8313dac",
".git/objects/46/0e19eb1316a7fd66c0268c7e0fe139cf967d21": "8b130a874dc76e77e906585385368101",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/c1e6fffb33350bdc5a312a7b44cfb294b2a342": "15e5d9d28dd74d95edaa228c3998be33",
".git/objects/4d/8ec0efe406e716295e8c41073cff474a7f3b3e": "482cb6966efc19bc8af6e42d6068a3e6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/d39d1f13bb67d59f1a588e47407e25a408ba8b": "ca45bac2219f78fc535e0760ced4e293",
".git/objects/55/ff382b0de58f9264d36fb2464febb68d0fddb7": "11967fb35dfea027619f986ae9b5a79d",
".git/objects/66/8743d48bbbf0d2ab190871f94c397464382a5f": "f8d8adc96bc25e3e568a6b878feaa57c",
".git/objects/6f/b0e18ce49e05d4456f71f46de33239a8149a20": "009b4c5aa71bdc1c788e29341b7d6ab3",
".git/objects/70/7850c2093af2e31882efbf595d751515fe5f40": "424d432c1360e43d7391b5c45a529134",
".git/objects/74/451354cf197de754608550578008a28c6fbcb0": "2d0668dce027d445a9dd6b3f73008f56",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/5d5df314e0e9b6d98ff192463dece9131da478": "19ad870c71dd28cb7be41473e84c3b0a",
".git/objects/93/90f0718abd99e3888937c7e1f8f9695cbdbe70": "05127a26f3359fd79df3655bfa4a4ad8",
".git/objects/9c/4bc2d283a2ed50c9101cc528a1c506d16ba1ad": "01e7b2b971b5e4a87c6cb4d3dda78d6d",
".git/objects/a4/e2ff7ed6e2b1cef482eadba6b30d7e8bf750d6": "f452dc8e0d8a3bcfe08e57be744d62af",
".git/objects/a6/e8cbd1cefec81b28bca7ee424e2bad66009533": "5928be818bff63ffc1dc49ddbdbd33f9",
".git/objects/b1/95cb7f1a78e6ad20e77bba54e60e6a7b643b7c": "4ff2271e277439e981521601506cb333",
".git/objects/b2/df3f7f5e259bd3923d0aacb0b5a292919caba3": "1ba76bfd257440cc323183fc68a1bb02",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/a34b90f3ca538120ccf6b2429fb670bb4992d1": "66c3d106560bd9169fd1e0971b87ebdd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/8b31c598a2fbcb09d33a33d5de40aaf6241dd7": "991fb0cb8f31ac7676013120e22ba12b",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c6/0bf3555e5a46947bb129401dc1780349dc9f7c": "4c0af88e2b0ab24aa68ea88592188fe7",
".git/objects/c7/b2c78dc857ec7fe7e310860120dd97fe5ed3ef": "bbd99f910377036c4bd6d8090a8acb13",
".git/objects/c9/80fc4e90e39021fcfcf45880c9fed25b8bf257": "1837509e2fcf1a05e6c2d9d8762c3ce8",
".git/objects/ca/a382b62c9e455ccef3f77e74b6065edde8905d": "0671967bf7ab30ac5d028d5d180ad655",
".git/objects/cd/e2748908e88388cf16cb7450f251f75f89bac8": "deb92a103d1a09c4d9d90765945381d6",
".git/objects/cf/6e0daf6bd7ed66a393e8e47624afdae25ad0c7": "c14024535934d4a9d87df3cddee0bee6",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/9cd240556b46a19ff9f6f4dd5cf1d72eafcc79": "92d7c7b0da1dbf1cb005e5d5cd5459a2",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/bbd94b1c5b8cd3996136e21aa80071e5a29b39": "77d5c7b1c194f5e77041990af5d56c33",
".git/objects/dd/79fc431eec16ff126be60f8ac5969416ce15c3": "06967d63bbbe5859be944df6afb55b56",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/ab8c71ac84f5e64697b51c0bb9fbc54e574b62": "7cf7a7a4288925369e4e7cb1979995d1",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f7/4be65d28bf7ce9c3ccbb7000d23265830e146f": "781b33f83095eed23942db5699391f65",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/fc4cdc5c6dd322d309bdebe277cbed66660770": "a813cb48818b719ee4c2981388e934a7",
".git/refs/heads/master": "b3b567e2f14b6734cc67f45deab99b01",
".git/refs/remotes/origin/master": "b3b567e2f14b6734cc67f45deab99b01",
"assets/AssetManifest.bin": "ba7bfdd159144e8f2f80daec5ae799be",
"assets/AssetManifest.json": "c242e34740b2fb5414b542c614d242dd",
"assets/assets/images/blanks.png": "4453eebdb404d81b94e659cd4c95fe03",
"assets/assets/images/coldn.gif": "180cc446fe9a0072c66fba500a587897",
"assets/assets/images/colds.png": "57999a88675b53488c782adca22f47e4",
"assets/assets/images/cozyLogo.png": "aff7858bdf8640db6bf9e878f5ae182e",
"assets/assets/images/hotn.gif": "7d03cd568a048d2508fe7e8baf47bb40",
"assets/assets/images/hots.png": "2b1a0a275d9cdea3e00c7f9fcaf95595",
"assets/assets/images/okayn.gif": "9975bc7b98b97a20134cd383713c28dd",
"assets/assets/images/okays.png": "c93b8f86cca826b8447d15317f9250a5",
"assets/assets/images/tickAnimation.json": "e7a51002da2a694add5589adaa87aada",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f33e657723538b814ff7d4c04e09fc63",
"assets/NOTICES": "1c032f56385e654c7d2e4b987f319da8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "993a53565cd7a6c1bb16cad690ff2401",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "88a20f54f40b9625c70a59a836d8a511",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "8a566cb2999904bfadc5ea4b718eba52",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a96e4cac3d2da39d86bf871613180e7b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "52c0d7ba59bbd2a6849a0344094ec00f",
"/": "52c0d7ba59bbd2a6849a0344094ec00f",
"main.dart.js": "4ee018e34a3ee6b3fc1dde1e92eb3120",
"manifest.json": "f36b817d014a32f7a18ae2bace315167",
"version.json": "859cd7af6478d136d69159eace72985e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
