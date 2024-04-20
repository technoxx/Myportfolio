'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2832e21254f4d3b0ed755a827d07ce58",
".git/config": "a1741072d8cf862e120f353af5d6696f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "2bfa6dbf81028175cb1cf8cf90d4d8db",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fd347340c9adcd04ae0c2249377aee36",
".git/logs/refs/heads/master": "131702315d50ae26b8b3b79a83865b0f",
".git/logs/refs/remotes/origin/master": "592e5d16525e7da520d965cee21d5a16",
".git/objects/00/f2e26835f6e46a8cd991da79c20441fa11364b": "e6746d61c77301449cb8094ffd57199b",
".git/objects/03/253b4d71740fa9b49ddebfa2ec3978ae301f1f": "aab47300ca0b4ce7efd7e22d95442f40",
".git/objects/0a/a91cf69bf891b6a1922c83a1b1af9837d54d06": "b73b96bd483ce0c818db8c5eed877fd8",
".git/objects/0b/60f2f02e193ac47134afacf53f2612e2516ae3": "89457c85b2c03f63f5aceb020179bdfd",
".git/objects/20/1ff81e48f26d958782e4b99470a05481a357c1": "0d4a586d4811df11b602a7f6adbb78ab",
".git/objects/20/7862401f1142a61944cb59a6b21a725be37033": "ebc7c8a06879e5bc6478adda8d40efe8",
".git/objects/32/6f62da4f2b38bef945c1ccdd24f5652ee74886": "98e45e2d72f410aed8211c8f479c6a77",
".git/objects/35/1a2dbcab175139fc3fee89ba510d141ff0a8e8": "330aa6824e10c24751ceb383bbe6da78",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/38/d56fb31a94ca358913c3705ba18fd4721ce856": "20aaf9c39ed5735443edc7203afca5e4",
".git/objects/3d/7c883e719b191bca81635a8e8d0cb8080bf4c8": "257884d8a91fe6e3598a01a3f971a662",
".git/objects/41/703057237a9a8bd5307310d737fe5dba771998": "1918e9e46107233d6845bc453561d7e9",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/0f65c32d554374513777d4b7cdbb57d7f31ba3": "b6da6b45013dfe251207067d06e2fa0c",
".git/objects/4f/3efc618842effff64981af02a39fa88fc2e5f5": "04029739eb5810e0e7477deb8142eb2a",
".git/objects/4f/8225f8dc0f62af609eabe247f7df9c93928950": "8d81933b877240b62a63725556886a66",
".git/objects/58/0ca1bc708207f1c78a4e61c70f3758c76f4fb1": "5e760a1c955ec0cd07ff8a6a845c809c",
".git/objects/5e/9ccb8673c1e647019979d4d9c9e060ff499f2f": "e46aba20a4e1875b0c6c189647a16006",
".git/objects/5f/c15b521d33796fc1c6664df37bf5ddca930494": "9d91929bbd9c45acac06019b2a889290",
".git/objects/60/9ebe4d98f20ec723d34f45df36c8cac46c4b86": "8531020be6288ca923dfd58d22af468c",
".git/objects/6e/bdc834c6c543eb723de7ceb9983f7f4ebf6c9c": "adfb73dc1812f5848f456bbbbf4fa5f0",
".git/objects/6e/e45b0c3e18e39d3dcc6efcd2686dd4dc4dc81d": "d98e1627d21e968e336e5c4ad91d58ab",
".git/objects/78/42ccc429704556b0088f105115b705d38f2663": "28450f74e2938c7d8b87147ab659e640",
".git/objects/7f/c27209fc1d5c226378ab55950b11803c3d1f07": "79baf9eb466cc3a166be403eb48c819e",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8f/a48289c951525ac1e56f3b7a2a7a6b284fc147": "5158660cbe6b6de1f8eed45bcac9e678",
".git/objects/94/6dc8bb9a2a1db0e0c0fdd11e3929e015287a1b": "b8fcd33de85fc42646b749e0b3379a2b",
".git/objects/99/ae8baafb8188d83525f76d2c6e1aae99dbc517": "3a78c6d154a05b67347a006fa5331945",
".git/objects/a4/cd01605a11807679c0494bfc4cd948e64fd215": "d5446a02915b0d916a2bc60d82dfea81",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/61e39be1bce94bd758ca0c33d196ad4749ae1d": "b09b492b6e81c21770bd25d761b82a23",
".git/objects/ac/f1dc7526213952370d18c2786feb1107bbf3ad": "e7f2d86166fbe9698a70dd49591ba04b",
".git/objects/b2/223e090ada833227c3718a74d06838b8efe3de": "ef2a4531b3cb3dbe7f64426916b43880",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/da723d0ad83549d57343db1dc8a8843b869801": "6cd5e022617c78f3a2391e73eb9cd53e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/d167e224e11784764de2b0f2da4e2afd2e948a": "cc61261427a954e117aabff17893c29c",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/b8456b01bd286829e455b50ae8e9b1cff8f2d5": "5c418dfa501e052851fa7ee9b9e90f65",
".git/objects/bf/de87d91cd735e577ff9cdae2c09bb020109ae5": "abbc54b386dee8e022fa63f9083bfe67",
".git/objects/c2/807966a62d377e8731aa84a5599fd989f3cb04": "956d56e84467bad70fc1f380d835a11f",
".git/objects/ce/e89a24cf4745bf16695469d9a0a0ec86b93c66": "299dd58924590f3a89d61799f33da97a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/8a2effd846426bb3fe9880eefb2cfcce418191": "122f192e9039c0e756ce6ae5f2055737",
".git/objects/d9/9631f8bb07f7ab73fe56bbb627fde1bd1da18d": "d2568d57c28dc52394d76c33e17191e4",
".git/objects/db/b38ed8bd014d6fa2b4e2b6a1e2f8adbae2274b": "5753ac358546a7c7c7846ddbce10bedb",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/e0/b0d845be9ab1fca28a8964205a249d6400b603": "837d2b6d37b29f6c554cdff567f2a730",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/90af83fb536187adea468db6d36e517879ae68": "0bdd771ed7ce8c677798c8ffcb274304",
".git/objects/ee/b898e6da89397e7858da95290e5d0a03f49162": "7aa1b3b46ca75558fefc524bd30b0fbd",
".git/objects/f1/5013d5d529358688351a49ee6cb4254daa001f": "ebb06c7dcbaa9dedb1a9c03f0e339439",
".git/objects/f9/8a582b825f3a5f96c6630916d848fbffb60375": "2f4ab445f61af5d5c28d6c5fd3f60799",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fa/ed999c563331aaa66d02d0df9032cb1b882e10": "159cc273ebc9d4b272fb54c0e9ec806d",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/68f223a692e681426b2b8d74f9406144cccf1d": "911e0e810bc631efe6be5923fffad235",
".git/refs/heads/master": "2e6722fd37b69570dca19b124f8051e4",
".git/refs/remotes/origin/master": "2e6722fd37b69570dca19b124f8051e4",
"assets/AssetManifest.bin": "34d63ff1725aafab2ae28f1da001ef02",
"assets/AssetManifest.bin.json": "ee62e52e2b112b595cd79831a390e3bc",
"assets/AssetManifest.json": "5c1ee5cdd645d27c20678e9e3bf8c9f4",
"assets/assets/images/appfinalLogo.png": "2355ce5ca2c881fb116a4b22ce0edcc0",
"assets/assets/images/blender.png": "9e20490cc1037d569df74822693fb7f9",
"assets/assets/images/blenderlogo.png": "8b830e05ac553d21ce34d7c45c39e622",
"assets/assets/images/coronavirus1.gif": "bde4abc173bb21fd4aeb36ce96ac3125",
"assets/assets/images/cpplogo.png": "340a2c96b975e8993790ce78bf1576f6",
"assets/assets/images/csslogo.png": "19502628a643f4cafa57e7eadac4ee64",
"assets/assets/images/dartlogo.png": "2e0719b33b5cdd1ece46611b4d3d4a81",
"assets/assets/images/firebaselogo.png": "cf0918b3d77d6e4505a65f103e5f3382",
"assets/assets/images/flutterlogo.png": "23ded1e93189e77c12bda66ca4274d08",
"assets/assets/images/github.png": "97e1778aa3a41eb9a0eb4c18f4d8e9ba",
"assets/assets/images/gmail.png": "dfe86d6a8651bcd63ad3ee45b5305379",
"assets/assets/images/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/images/htmllogo.png": "f6ff1a4851e1797c3671bd1d426b4748",
"assets/assets/images/linkedin.png": "210ca46843a79abaee510f475bdf5d43",
"assets/assets/images/MyLogo.png": "599748662babbe46b0fce5ebb59b5f9c",
"assets/assets/images/pp.jpg": "ea43b61408e5d7e246f54ab33a94d710",
"assets/assets/images/pythonlogo.png": "8fc980504e086ccec2612f8bdb6bfe15",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a9598549df7838ac866ab97efdb1ab55",
"assets/NOTICES": "3a680d27ba4134725872c2388515d140",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "b65c82db5c9940c4c261d462654db989",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/MyLogo.png": "599748662babbe46b0fce5ebb59b5f9c",
"index.html": "5fe3c5a847146b4b9ce7dd8c40d35329",
"/": "5fe3c5a847146b4b9ce7dd8c40d35329",
"main.dart.js": "dae7a76153a8eecc93aa243946e587f7",
"manifest.json": "a8f0100d1273f73e900b08527cd0481b",
"styles.css": "da6df945dbb4a8c7e8968bb1cb96afdb",
"version.json": "cdd4e0e50350b6d2f120cfc2e5f5d3b5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
