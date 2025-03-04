const CACHE_NAME = "imaluum-v2-cache";
const urlsToCache = self.__WB_MANIFEST.map(({ url }) => url).concat(["/"]); // Add root URL

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log("Opened cache");
			return cache.addAll(urlsToCache);
		}),
	);
	self.skipWaiting(); // Immediately activate the new service worker
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((cacheName) => cacheName !== CACHE_NAME)
					.map((cacheName) => {
						return caches.delete(cacheName);
					}),
			);
		}),
	);
	self.clients.claim(); // Take control of all clients
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Cache hit - return response
			if (response) {
				return response;
			}

			// IMPORTANT: Clone the request. This is needed because the request
			// stream is consumed when you make a call to fetch.
			const fetchRequest = event.request.clone();

			return fetch(fetchRequest).then((response) => {
				// Check if we received a valid response
				if (!response || response.status !== 200 || response.type !== "basic") {
					return response;
				}

				// IMPORTANT: Clone the response. This is needed to save the response
				// for future uses.
				const responseToCache = response.clone();

				caches.open(CACHE_NAME).then((cache) => {
					cache.put(event.request, responseToCache);
				});

				return response;
			});
		}),
	);
});
