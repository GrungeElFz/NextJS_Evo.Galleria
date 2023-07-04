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
      <h1 className="flex items-center justify-center text-center relative pt-48 text-black text-5xl font-normal">
        Model 3
      </h1>
    </div>
  );
}
