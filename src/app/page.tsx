import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-screen">
      <Image
      src="/tsp2025.png"
      alt="tsp"
      layout="fill"
      objectFit="cover"
      className="h-full w-full"
      />
    </div>
  );
}
