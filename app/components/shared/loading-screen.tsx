import LOGO from "~/assets/logo-landing-page.png";
import { Image } from "@unpic/react";

const LoadingScreen = () => {
  return (
    <div className="w-full h-screen bg-card flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <Image
          src={LOGO}
          alt="logo"
          width={200}
          height={200}
          className="object-contain animate-spin"
        />
        <div className="text-2xl font-semibold text-zinc-50">
          Loading your data...
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
