import { BannerCarousel } from "./ui/HeroSection/BannerCarousel/BannerCarousel";
import Main from "./ui/Main";
import Welcome from "./ui/Welcome";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-6 sm:gap-8">
      <Main>
        <Welcome/>
      </Main>
      <BannerCarousel/>
    </div>
  );
}
  