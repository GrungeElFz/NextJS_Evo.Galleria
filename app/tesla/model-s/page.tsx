import Image from "next/image";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <div className="h-screen w-screen">
      {/* Background Image */}
      {/* <Image
        fill
        src="/Banner-Tesla.Model.S.jpg"
        alt="Tesla Model S"
        style={{ objectFit: "cover" }}
        className="absolute z-0"
      /> */}

      {/* Background Video */}
      <video
        title="Tesla Model S"
        autoPlay
        loop
        muted
        preload="auto"
        style={{ objectFit: "cover" }}
        className="absolute h-screen w-screen z-0"
        data-loaded="true"
        data-autoplay-desktop="true"
        data-autoplay-portrait="true"
        data-autoplay-mobile="true"
        poster="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-Poster-NA.jpg"
        data-poster-desktop="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-Poster-NA.jpg"
        data-poster-portrait="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-Poster-NA.jpg"
        data-poster-mobile="https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Mobile-Poster-NA.jpg"
        data-src-desktop="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
        data-src-portrait="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
        data-src-mobile="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Mobile-LHD-Animation-v2.webm"
        data-src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
        src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD-Animation.webm"
      ></video>

      {/* Header */}
      <Header />

      {/* Center Info */}
      <div className="flex flex-col items-center justify-between text-center relative mt-48">
        {/* Model */}
        <h1 className="text-black text-5xl font-normal">Model S</h1>

        {/* Link */}
        <p className="mt-5 text-black text-lg font-light">
          <a
            href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=61801&range=200"
            target="_blank"
            className="hover:underline"
          >
            Explore Inventory
          </a>
        </p>
      </div>

      {/* Bottom Buttons */}
      <div className="flex flex-rows items-center justify-center text-center absolute m-auto left-0 right-0 bottom-10 gap-5">
        <Button variant="secondary" className="w-60 h-10">
          Explore Inventory
        </Button>
        <Button
          variant="ghost"
          className="w-60 h-10 border-2 border-white text-white"
        >
          Specification
        </Button>
      </div>
    </div>
  );
}
