"use client";

import { useEffect, useState } from "react";

export default function RedirectPage() {
	const [dots, setDots] = useState("");

	const reason =
		"This service has been discontinued. Taking you to our new destination...";
	const destination = "https://proreg.app";

	// Animated dots effect
	useEffect(() => {
		const interval = setInterval(() => {
			setDots((prev) => (prev.length >= 3 ? "" : `${prev}.`));
		}, 500);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			window.location.href = destination;
		}, 3000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-center p-4">
			<div className="text-center space-y-8">
				{/* Animated spinner */}
				<div className="relative w-24 h-24 mx-auto">
					{/* Outer ring */}
					<div className="absolute inset-0 rounded-full border-4 border-zinc-700/30" />

					<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-zinc-400 border-r-zinc-500 animate-spin" />

					<div className="absolute inset-3 rounded-full bg-gradient-to-br from-zinc-500/20 to-zinc-600/20 animate-pulse" />

					<div className="absolute inset-0 flex items-center justify-center">
						<div className="w-3 h-3 rounded-full bg-gradient-to-r from-zinc-400 to-zinc-500 animate-pulse" />
					</div>
				</div>

				{/* Redirect message */}
				<div className="space-y-3">
					<h1 className="text-2xl font-semibold text-white">
						Redirecting{dots}
					</h1>
					<p className="text-zinc-400 text-lg max-w-md mx-auto">{reason}</p>
				</div>

				<div className="w-64 h-1 mx-auto bg-zinc-800 rounded-full overflow-hidden">
					<div className="h-full bg-gradient-to-r from-zinc-500 to-zinc-400 animate-[shimmer_2s_ease-in-out_infinite]" />
				</div>
			</div>
		</div>
	);
}
