import Image from "next/image";

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

      <div className="flex flex-col items-center justify-between text-center relative pt-48">
        {/* Model */}
        <h1 className="text-black text-5xl font-normal">Model 3</h1>

        {/* Text */}
        <p className="pt-5 text-black text-lg font-light">
          <a
            href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=61801&range=200"
            target="_blank"
            className="underline"
          >
            Explore Inventory
          </a>
        </p>
      </div>
    </div>
  );
}
