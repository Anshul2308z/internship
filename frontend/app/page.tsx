import { BannerCarousel } from "./ui/HeroSection/BannerCarousel/BannerCarousel";
import Main from "./ui/Main";
import Welcome from "./ui/Welcome";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    <Main children={<Welcome/>}/>
    <BannerCarousel/>
    </div>
  );
}
  