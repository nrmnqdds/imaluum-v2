import { InjectManifest } from "@aaroon/workbox-rspack-plugin";
import { type HtmlConfig, defineConfig } from "@rsbuild/core";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

export default defineConfig((options) => {
	console.log("envMode: ", options.envMode);
	console.log("env: ", options.env);

	const meta = {
		title: "Simplified i-Maluum",
		charset: "utf-8",
		viewport: "width=device-width, initial-scale=1",
		"twitter:title": "Simplified i-Maluum",
		"twitter:description":
			"A simplified version of i-Maluum for IIUM students.",
		"twitter:creator": "@nrmnqdds",
		"twitter:site": "@nrmnqdds",
		"twitter:image":
			"https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
		"twitter:card": "summary_large_image",
		"og:description": "A simplified version of i-Maluum for IIUM students.",
		"og:image": "https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
		"og:type": "website",
		"og:title": "Simplified i-Maluum",
		"og:url": "https://imaluum.quddus.my",
		"msapplication-TileImage":
			"https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
	} satisfies HtmlConfig["meta"];

	const workboxPlugin = new InjectManifest({
		// Configure InjectManifest
		swSrc: "./src/service-worker.ts", // Path to your service worker template
		swDest: "service-worker.js", // Output path for the generated service worker
		include: [
			/\.html$/,
			/\.js$/,
			/\.css$/,
			/\.png$/,
			/\.jpg$/,
			/\.jpeg$/,
			/\.svg$/,
			/\.ico$/,
		],
		// In dev, exclude everything.
		// This avoids irrelevant warnings about chunks being too large for caching.
		// In non-dev, use the default `exclude` option, don't override.
		exclude:
			options.envMode === "development"
				? [/./]
				: [/\.map$/, /manifest$/, /\.htaccess$/, /service-worker\.js$/],
		maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
	});
	return {
		plugins: [
			pluginReact(),
			pluginTypeCheck(),
			pluginImageCompress(),
			pluginNodePolyfill(),
		],

		tools: {
			rspack: {
				optimization: {
					realContentHash: false,
					runtimeChunk: "single",
					splitChunks: {
						chunks: "initial",
						cacheGroups: {
							vendors: {
								test: /[\\/]node_modules[\\/]/,
								chunks: "all",
								minSize: 10000,
								name: (module) => {
									const moduleName = (module?.context?.match(
										/[\\/]node_modules[\\/](.*?)([\\/]|$)/,
									) || [])[1];

									if (moduleName) {
										return `vendor.${moduleName.replace("@", "")}`;
									}
								},
							},
						},
					},
				},
				plugins: [
					TanStackRouterRspack({ target: "react", autoCodeSplitting: true }),
					workboxPlugin,
					// Suppress the "InjectManifest has been called multiple times" warning by reaching into
					// the private properties of the plugin and making sure it never ends up in the state
					// where it makes that warning.
					// https://github.com/GoogleChrome/workbox/blob/v6/packages/workbox-webpack-plugin/src/inject-manifest.ts#L260-L282
					// options.envMode === "development" &&
					// 	Object.defineProperty(workboxPlugin, "alreadyCalled", {
					// 		get() {
					// 			return false;
					// 		},
					// 		set() {
					// 			// do nothing; the internals try to set it to true, which then results in a warning
					// 			// on the next run of webpack.
					// 		},
					// 	}),
				],
			},
		},

		output: {
			manifest: true,
		},

		html: {
			title: "Simplified i-Maluum",
			meta,
			appIcon: {
				name: "Simplified i-Maluum",
				icons: [
					{
						src: "./public/favicon.ico",
						size: 64,
					},
				],
			},
			favicon: "./public/favicon.ico",
			tags: [
				{
					tag: "script",
					head: true,
					append: false,
					attrs: {
						src: "https://beamanalytics.b-cdn.net/beam.min.js",
						"data-token": "09a05d6b-9ccf-4902-8ad0-e623689d586a",
						async: true,
					},
				},
			],
		},
	};
});
