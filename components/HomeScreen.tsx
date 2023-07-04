import Image from "next/image";

export default function HomeScreen() {
  return (
    <div className="h-screen w-screen">
      <Image
        fill
        src="/Banner-Tesla.Model.3.avif"
        alt="Tesla Model 3"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
