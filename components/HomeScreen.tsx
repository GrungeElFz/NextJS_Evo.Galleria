import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <div className="h-screen w-screen">
      {/* Background Image */}
      <Image
        fill
        src="/Banner-Tesla.Model.3.avif"
        alt="Tesla Model 3"
        style={{ objectFit: "cover" }}
        className="absolute z-0"
      />

      {/* Center Info */}
      <div className="flex flex-col items-center justify-between text-center relative mt-48">
        {/* Model */}
        <h1 className="text-black text-5xl font-normal">Model 3</h1>

        {/* Link */}
        <p className="mt-5 text-black text-lg font-light">
          <a
            href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=61801&range=200"
            target="_blank"
            className="underline"
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
