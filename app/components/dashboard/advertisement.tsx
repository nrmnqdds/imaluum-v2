import { useQuery } from "@tanstack/react-query";
import { Image } from "@unpic/react";
import { TvIcon, LinkIcon } from "@heroicons/react/24/outline";

const Advertisement = ({ className }: { className: string }) => {
  const { data: ads, isLoading: loading } = useQuery({
    queryKey: ["ads"],
    queryFn: async () => {
      // const data = await GetAds();
      // if (data.success) {
      //   return data.data;
      // }

      const res = await fetch("/api/ads");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();

      if (data.success) {
        return data.data;
      }
    },
    retry: 3,
  });

  return (
    <section className={className}>
      <div className="my-5 flex justify-between w-full items-center">
        <h2 className="lg:text-2xl font-bold text-zinc-900 dark:text-slate-100 flex items-center gap-5">
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
        {loading ? (
          // <p>Loading...</p>
          <div className="flex flex-row gap-2 overflow-hidden">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="w-40 h-40 rounded-xl bg-gray-200 dark:bg-zinc-600 animate-pulse"
              />
            ))}
          </div>
        ) : (
          //@ts-ignore
          <AdsCarousel ads={ads} />
        )}
      </div>
    </section>
  );
};

type AdsType = {
  adsImg: string;
  adsLink: string;
}[];

function AdsCarousel({ ads }: { ads: AdsType }) {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {ads.map((ad, index) => (
          <a
            key={index}
            href={ad.adsLink}
            className="flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300"
          >
            <Image
              src={ad.adsImg}
              alt=""
              layout="fullWidth"
              className="rounded-lg object-cover"
            />
          </a>
        ))}
        {ads.map((ad, index) => (
          <a
            key={index}
            href={ad.adsLink}
            className="flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300"
          >
            <Image
              src={ad.adsImg}
              alt=""
              layout="fullWidth"
              className="rounded-lg object-cover"
            />
          </a>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {ads.map((ad, index) => (
          <a
            key={index}
            href={ad.adsLink}
            className="flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300"
          >
            <Image
              src={ad.adsImg}
              objectFit="cover"
              layout="fullWidth"
              alt=""
              className="rounded-lg object-cover"
            />
          </a>
        ))}
        {ads.map((ad, index) => (
          <a
            key={index}
            href={ad.adsLink}
            className="flex-shrink-0 w-36 h-36 relative mx-1 hover:opacity-50 transition-opacity duration-300"
          >
            <Image
              src={ad.adsImg}
              alt=""
              objectFit="cover"
              layout="fullWidth"
              className="rounded-lg object-cover"
            />
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Advertisement;
