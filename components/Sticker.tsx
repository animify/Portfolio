import Image from "next/image";
import imageTape from "../public/images/tape.png";

export default function Sticker() {
  return (
    <div className="flex mb-2 justify-center">
      <div className="flex items-center justify-center hover:animate-bounceZero h-16 w-16">
        <Image
          className="pointer-events-none select-none -rotate-12"
          src={imageTape}
          alt="Sticker =)"
          priority
          placeholder="blur"
        />
      </div>
    </div>
  );
}
