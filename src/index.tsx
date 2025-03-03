import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

const app = (
	<HelmetProvider>
		<React.StrictMode>
			<Helmet>
				<title>Simplified i-Ma'luum</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="twitter:title" content="Simplified i-Ma'luum" />
				<meta
					name="twitter:description"
					content="A simplified version of i-Ma'luum for IIUM students."
				/>
				<meta name="twitter:creator" content="@nrmnqdds" />
				<meta name="twitter:site" content="@nrmnqdds" />
				<meta
					name="twitter:image"
					content="https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png"
					itemProp="image"
				/>
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="og:description"
					content="A simplified version of i-Ma'luum for IIUM students."
				/>
				<meta
					name="og:image"
					content="https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png"
					itemProp="image"
				/>
				<meta name="og:type" content="website" />
				<meta name="og:title" content="Simplified i-Ma'luum" />
				<meta name="og:url" content="https://imaluum.quddus.my" />
				<meta
					name="msapplication-TileImage"
					content="https://r2.studyjom.nrmnqdds.com/imaluumv2ogcompressed.png"
				/>
				<link rel="icon" href="/favicon.ico" />
				<script
					src="https://beamanalytics.b-cdn.net/beam.min.js"
					data-token="09a05d6b-9ccf-4902-8ad0-e623689d586a"
					async
				/>
			</Helmet>
			<App />
		</React.StrictMode>
	</HelmetProvider>
);

const rootEl = document.querySelector("#root");

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);

	root.render(app);
}
