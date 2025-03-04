import { InjectManifest } from "@aaroon/workbox-rspack-plugin";
import { type HtmlConfig, defineConfig } from "@rsbuild/core";
import { pluginImageCompress } from "@rsbuild/plugin-image-compress";
import { pluginNodePolyfill } from "@rsbuild/plugin-node-polyfill";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import { TanStackRouterRspack } from "@tanstack/router-plugin/rspack";

const meta = {
	title: "Simplified i-Maluum",
	charset: "utf-8",
	viewport: "width=device-width, initial-scale=1",
	"twitter:title": "Simplified i-Maluum",
	"twitter:description": "A simplified version of i-Maluum for IIUM students.",
	"twitter:creator": "@nrmnqdds",
	"twitter:site": "@nrmnqdds",
	"twitter:image": "https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
	"twitter:card": "summary_large_image",
	"og:description": "A simplified version of i-Maluum for IIUM students.",
	"og:image": "https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
	"og:type": "website",
	"og:title": "Simplified i-Maluum",
	"og:url": "https://imaluum.quddus.my",
	"msapplication-TileImage":
		"https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png",
} satisfies HtmlConfig["meta"];

export default defineConfig({
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
				new InjectManifest({
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
					exclude: [/\.map$/, /^manifest.*\.js(?:on)?$/],
					maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
				}),
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
});
