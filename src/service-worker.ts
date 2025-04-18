import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import {
	CacheFirst,
	NetworkFirst,
	StaleWhileRevalidate,
} from "workbox-strategies";

// Define the correct type for the service worker
declare const self: ServiceWorkerGlobalScope;

// Precache all assets generated by your build process
precacheAndRoute(self.__WB_MANIFEST);

// Cache the manifest file
registerRoute(
	({ url }) => url.pathname.endsWith('manifest.webmanifest'),
	new CacheFirst({
		cacheName: 'manifest-cache',
		plugins: [
			new CacheableResponsePlugin({
				statuses: [0, 200],
			}),
			new ExpirationPlugin({
				maxEntries: 1,
				maxAgeSeconds: 24 * 60 * 60, // 24 hours
			}),
		],
	}),
);

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
// This also handles offline fallback by serving the cached page
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
