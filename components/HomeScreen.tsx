import Image from "next/image";

export default function HomeScreen() {
  return (
    <div className="h-screen w-screen">
      <Image
        fill
        src="/Banner-Tesla.Model.3.avif"
        alt="Tesla Model 3"
        style={{ objectFit: "cover" }}
        className="absolute z-0"
      />
      <h1 className="flex flex-col items-center justify-between text-center relative pt-48 text-black text-5xl font-normal">
        Model 3
      </h1>
      <p className="flex items-center justify-center text-center relative pt-5 text-black text-lg font-light">
        <a
          href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=61801&range=200"
          target="_blank"
          className="underline"
        >
          Explore Inventory
        </a>
      </p>
    </div>
  );
}
