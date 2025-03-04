import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const app = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

const rootEl = document.querySelector("#root");

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);

	root.render(app);

	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker
				.register("/service-worker.js")
				.then((registration) => {
					console.log(
						"ServiceWorker registration successful with scope: ",
						registration.scope,
					);
				})
				.catch((err) => {
					console.log("ServiceWorker registration failed: ", err);
				});
		});
	}
}
