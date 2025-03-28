'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "74a1b08bf9c982bc8be5240eee7a2a05",
"assets/AssetManifest.bin.json": "0d5914e43e040f9ee6816d38e96ceb16",
"assets/AssetManifest.json": "dcc789eaaf31ca4c229228eda2f22960",
"assets/assets/fonts/adobe-clean.ttf": "8da2dea1af3753a58f22415dd94dc2c5",
"assets/assets/fonts/poppins-bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins-regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins-semi_bold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/astronaute.png": "083800dae8d49eaf9f0993af8006ab00",
"assets/assets/images/astronaute2.png": "b420c913c7fc3a086fd5f6d83f2388d3",
"assets/assets/images/background_error.png": "b6bdae72b32cfcc0e3d02ee16a7a7ede",
"assets/assets/images/background_login.png": "c9358523ae570c805b2513563de1c8f5",
"assets/assets/images/checked.png": "36dde1a4e8156249df00c498ec6c6f56",
"assets/assets/images/empty.png": "067a9e9c89a800d5e3a570a6d64ab4c1",
"assets/assets/images/error.svg": "2bbe6a84856262437e5494305b18ae30",
"assets/assets/images/error404.png": "2bb1afb72d821d024606c7af352130f2",
"assets/assets/images/error500.png": "670cc5f67fa3e19327b4886706e28af1",
"assets/assets/images/events/event1.png": "1354b1ffb5a3d37b665407d2941c2773",
"assets/assets/images/events/event2.png": "9b6dbd80e8c80a1fcc298bf93fb4d784",
"assets/assets/images/events/event3.png": "d27251334281a96357b70e528d12bdfc",
"assets/assets/images/events/event4.png": "60ed05c9820b83af6a755f206fd5c39e",
"assets/assets/images/events/event5.png": "e366e2a62c48c131b469f3b32ebdf106",
"assets/assets/images/events/event6.png": "2635e60426741b34430b2427f72be5de",
"assets/assets/images/icon_error.svg": "0a29e27edcef72da72df3db1594b301b",
"assets/assets/images/icon_success.svg": "3b9adb0cefef87a2e0622e1bf56be359",
"assets/assets/images/icon_warning.svg": "6a418dff1974feca0d8aadd7827cc67f",
"assets/assets/images/image_ar.png": "e573832b24e94c2e82c9467f2fd477ab",
"assets/assets/images/img.png": "62230943cd7a74075516d9aae00226c8",
"assets/assets/images/img_delete_project.png": "9e9477a47a88106384afaf96d888ff4d",
"assets/assets/images/img_drawer.png": "caaf7bae912aac6cc6e4ba9df1ee037c",
"assets/assets/images/img_user.png": "b1c131b8da9278bff3be80106c7d2058",
"assets/assets/images/logo.png": "ca17bee6c56df860242157089a36ce3f",
"assets/assets/images/logo.svg": "90df29cc481932a7c570e22703d347b7",
"assets/assets/images/logo_black.svg": "5de32f0f8121464f1df6a611e02d68bf",
"assets/assets/images/logo_facebook.svg": "ea6b126709161cccfe233b787b9bf464",
"assets/assets/images/logo_instagram.svg": "5433d4b4806bb0ebff32bd5321198cec",
"assets/assets/images/logo_linkedin.svg": "06d010abc50542a6a07c85b41c4ecafa",
"assets/assets/images/logo_twitter.svg": "f5cb792b08c7f0c8e5ec93e1a981f652",
"assets/assets/images/logo_ville_lyon.svg": "78cf9f3b281b5b066e5e0c74b14bf03d",
"assets/assets/images/logo_youtube.svg": "6a215d2b3b9caf83c93a4a2e99569c8c",
"assets/assets/images/news/new1.png": "88855f4e18240a65e079fa83c8b7ba7e",
"assets/assets/images/news/new2.png": "7241529cb24ce1b1a4a189fa23f1ff8e",
"assets/assets/images/news/new3.png": "f0680252e1edf16f762b5a32f64468ed",
"assets/assets/images/news/new4.png": "b88b8c5c3b043ad0ecd8be6944d1e8c6",
"assets/assets/images/news/new5.png": "b97326a8b866f89d2851ba15ae22bade",
"assets/assets/images/news/new6.png": "781f308130d849449fad85cc7b8c5aab",
"assets/assets/images/news/new7.png": "4acdc04f961dd2ef5d4c20d24c47e655",
"assets/assets/images/news/new8.png": "8662f2fb94c4d9013a6c24019ce38a91",
"assets/assets/images/profile.jpg": "bc205eac509090ba026433b1565bc18a",
"assets/assets/images/project_not_active.png": "7b9b04db4832da988d53523273ea8c30",
"assets/assets/images/pub.jpeg": "9ac39e670b33683b6eb9f056844432d7",
"assets/assets/images/publications/publication1.png": "5ddf424120ed81d4b01698457eb85ce5",
"assets/assets/images/publications/publication2.png": "5ab81c3551652c02ee15fbe33497e7ed",
"assets/assets/images/publications/publication3.png": "9ff6d16ab390b7c035c52d875ab22328",
"assets/assets/images/publications/publication4.png": "4d97345244d1e55d96c3922cd2d291e5",
"assets/assets/images/publications/publication5.png": "635cbd801edb83c62997ef37a3decb54",
"assets/assets/images/publications/publication6.png": "068eda939f766dcbe716d3607ba5d2eb",
"assets/assets/images/quick_access/quick_access1.svg": "d2073fb4b9dd682c3d71dafeab5586ae",
"assets/assets/images/quick_access/quick_access10.svg": "629dd5772eb6fcd5a92664154fe0818a",
"assets/assets/images/quick_access/quick_access2.svg": "8b01b7c1050f56212e8337f57d73a621",
"assets/assets/images/quick_access/quick_access3.svg": "07e9eb09db8a84a00d8c7541e5d3f8d1",
"assets/assets/images/quick_access/quick_access4.svg": "96e3df031a59e523204e99b88c8ee9a7",
"assets/assets/images/quick_access/quick_access5.svg": "9c278ce6d385635a7010d63f55007ddd",
"assets/assets/images/quick_access/quick_access6.svg": "9392539ae2f844b5e009764fa593f5ca",
"assets/assets/images/quick_access/quick_access7.svg": "9e284c53e06464373d3d4991abc12fda",
"assets/assets/images/quick_access/quick_access8.svg": "6a528015f635f292e5552c9aa7433c6c",
"assets/assets/images/quick_access/quick_access9.svg": "5f1624d503900c46e1f5e0de3f6ae50e",
"assets/assets/images/rocket.png": "0d16d9d54932265b374d3bf3644b0061",
"assets/assets/images/shutter_stock.jpeg": "59e7ba2d117901023537812e4381956f",
"assets/assets/images/success.svg": "78e0ead4ea0302442f9057b801570e3a",
"assets/assets/images/unchecked.png": "6c7d8df3f54df82758a8c9977fc5dbac",
"assets/assets/images/without_right.png": "db2bff5fc92f820f1032f2ab08e02c9c",
"assets/FontManifest.json": "9be3e274eb2b3931df2ab7c6adcfd26e",
"assets/fonts/MaterialIcons-Regular.otf": "6266a0fd991ae8d11d4812b0949dbb8a",
"assets/jquery-3.4.1.min.js": "a6b6350ee94a3ea74595c065cbf58af0",
"assets/jquery-3.4.1.slim.min.js": "50dc009b65de5def1626271a5117f970",
"assets/NOTICES": "2ceb4520035c11a10d60112c17523e44",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "04d3e56554e6187e7398fc9f771f85c9",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "05fbd758a750bdf9500bdf910de0a8fc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "062d2ee48e69a82a3efd4df38ea0d57e",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "570da368f96dc6433b8a1006c425ca7d",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/summernote-fr-FR.min.js": "181fad13d55088e2a5e19587957504c5",
"assets/summernote-lite.min.css": "a87b4891f00c5183242c32325c2237a0",
"assets/summernote-lite.min.js": "4bb4f8db706ce09d69103e6d080b61a1",
"assets/summernote.html": "62650e77d4d014a1db825737761c7cd2",
"assets/web/assets/jquery-3.4.1.min.js": "a6b6350ee94a3ea74595c065cbf58af0",
"assets/web/assets/jquery-3.4.1.slim.min.js": "50dc009b65de5def1626271a5117f970",
"assets/web/assets/summernote-fr-FR.min.js": "181fad13d55088e2a5e19587957504c5",
"assets/web/assets/summernote-lite.min.css": "a87b4891f00c5183242c32325c2237a0",
"assets/web/assets/summernote-lite.min.js": "4bb4f8db706ce09d69103e6d080b61a1",
"assets/web/assets/summernote.html": "62650e77d4d014a1db825737761c7cd2",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "d41d8cd98f00b204e9800998ecf8427e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "f8a517ef9ffddbd2344f87950c981400",
"icons/Icon-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-192.png": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-maskable-512.png": "d41d8cd98f00b204e9800998ecf8427e",
"index.html": "0252e0b5aa2b0063091911917984dd91",
"/": "0252e0b5aa2b0063091911917984dd91",
"logo.svg": "94624144fff1b4acdb7073a3e1fcdc9e",
"main.dart.js": "a9f346ab3ac8f189f8f2a6c43995d9f9",
"manifest.json": "051c2014ed4cde34cccf06e62539f474",
"robots.txt": "bbbcde0b15cabd06aace1df82d335978",
"version.json": "9c8078de94dee3a5ef6820fed6391ce3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
