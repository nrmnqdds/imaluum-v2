import { LinkIcon, TvIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { Image } from "@unpic/react";
import type { Advertisement as TAds } from "~/types/ads";

export const Advertisement = ({ className }: { className: string }) => {
	const { data: ads, isFetching } = useQuery({
		queryKey: ["ads"],
		queryFn: async () => {
			const res = await fetch("https://api.quddus.my/api/ads");

			const json = await res.json();

			if (!res.ok) {
				// throw new Error(json.message);
				return null;
			}

			return json.data;
		},
	});

	return (
		<section className={className}>
			<div className="mb-5 flex justify-between w-full items-center">
				<h2 className="lg:text-lg font-bold text-zinc-900 dark:text-slate-100 flex items-center gap-5">
					<TvIcon />
					SOUQ Advertisement
				</h2>
				<a
					href="https://souq.iium.edu.my/list"
					target="_blank"
					rel="noreferrer noopener"
					className="text-blue-500 hover:text-blue-700 flex items-center gap-1 mr-5"
				>
					See More
					<span>
						<LinkIcon />
					</span>
				</a>
			</div>

			<div className="flex flex-row gap-2 w-full h-full">
				{isFetching ? (
					<div className="flex flex-row gap-2 overflow-hidden">
						{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
							<div
								key={item}
								className="w-40 h-40 rounded-xl bg-gray-200 dark:bg-zinc-600 animate-pulse"
							/>
						))}
					</div>
				) : (
					// @ts-ignore
					<AdsCarousel ads={ads} />
				)}
			</div>
		</section>
	);
};

function AdsCarousel({ ads }: { ads: TAds[] }) {
	return (
		<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
			<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
				{ads.map((ad) => (
					<a
						key={ad.id}
						href={ad.link}
						target="_blank"
						rel="noreferrer noopener"
						className="flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300"
					>
						<Image
							src={ad.image_url}
							alt=""
							layout="fullWidth"
							objectFit="cover"
							className="rounded-lg w-full h-full"
						/>
					</a>
				))}
				{ads.map((ad) => (
					<a
						key={ad.id}
						href={ad.link}
						target="_blank"
						rel="noreferrer noopener"
						className="flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300"
					>
						<Image
							src={ad.image_url}
							alt={ad.title}
							layout="fullWidth"
							objectFit="cover"
							className="rounded-lg w-full h-full"
						/>
					</a>
				))}
			</ul>
			<ul
				className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
				aria-hidden="true"
			>
				{ads.map((ad) => (
					<a
						key={ad.id}
						href={ad.link}
						target="_blank"
						rel="noreferrer noopener"
						className="flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300"
					>
						<Image
							src={ad.image_url}
							objectFit="cover"
							layout="fullWidth"
							alt={ad.title}
							className="rounded-lg w-full h-full"
						/>
					</a>
				))}
				{ads.map((ad) => (
					<a
						key={ad.id}
						href={ad.link}
						target="_blank"
						rel="noreferrer noopener"
						className="flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300"
					>
						<Image
							src={ad.image_url}
							alt={ad.title}
							objectFit="cover"
							layout="fullWidth"
							className="rounded-lg w-full h-full"
						/>
					</a>
				))}
			</ul>
		</div>
	);
}
