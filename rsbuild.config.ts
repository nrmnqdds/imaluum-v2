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
			plugins: [TanStackRouterRspack()],
		},
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

// <meta charSet="utf-8" />
// <meta name="viewport" content="width=device-width, initial-scale=1" />
// <meta name="twitter:title" content="Simplified i-Ma'luum" />
// <meta
// 	name="twitter:description"
// 	content="A simplified version of i-Ma'luum for IIUM students."
// />
// <meta name="twitter:creator" content="@nrmnqdds" />
// <meta name="twitter:site" content="@nrmnqdds" />
// <meta
// 	name="twitter:image"
// 	content="https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png"
// 	itemProp="image"
// />
// <meta name="twitter:card" content="summary_large_image" />
// <meta
// 	name="og:description"
// 	content="A simplified version of i-Ma'luum for IIUM students."
// />
// <meta
// 	name="og:image"
// 	content="https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png"
// 	itemProp="image"
// />
// <meta name="og:type" content="website" />
// <meta name="og:title" content="Simplified i-Ma'luum" />
// <meta name="og:url" content="https://imaluum.quddus.my" />
// <meta
// 	name="msapplication-TileImage"
// 	content="https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png"
// />
// <link rel="icon" href="/favicon.ico" />
// <script
// 	src="https://beamanalytics.b-cdn.net/beam.min.js"
// 	data-token="09a05d6b-9ccf-4902-8ad0-e623689d586a"
// 	async
// />
