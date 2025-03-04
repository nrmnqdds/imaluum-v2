import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import {
	CacheFirst,
	NetworkFirst,
	StaleWhileRevalidate,
} from "workbox-strategies";

declare let self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);

// Cache images with a Cache First strategy
registerRoute(
	({ request }) => request.destination === "image",
	new CacheFirst({
		cacheName: "images",
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
			}),
		],
	}),
);

// Cache API requests with a Network First strategy (for fresh data)
registerRoute(
	({ url }) => url.pathname.startsWith("/api"),
	new NetworkFirst({
		cacheName: "api-cache",
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 30,
			}),
		],
	}),
);

// Cache page navigations with a Stale While Revalidate strategy
registerRoute(
	({ request }) => request.mode === "navigate",
	new StaleWhileRevalidate({
		cacheName: "pages",
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
		],
	}),
);
