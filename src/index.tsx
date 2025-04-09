import React from "react";
import ReactDOM from "react-dom/client";
import PWAPrompt from "react-ios-pwa-prompt";
import App from "./App";
import "./index.css";
import { register } from "./service-worker-registration";

const app = (
	<React.StrictMode>
		<App />
		<PWAPrompt promptOnVisit={1} timesToShow={3} />
	</React.StrictMode>
);

const rootEl = document.querySelector("#root");

if (rootEl) {
	const root = ReactDOM.createRoot(rootEl);
	root.render(app);
	
	// Register service worker
	register();
}
