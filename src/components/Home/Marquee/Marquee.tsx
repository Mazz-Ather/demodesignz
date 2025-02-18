"use client";
import Image from "next/image";

export default function Marquee() {
  return (
    <div className="overflow-hidden relative w-full py-4">
      <div className="flex items-center w-full gap-8 animate-marquee">
        {[
          "/images/tes1.png",
          "/images/tes2.png",
          "/images/tes3.png",
        ].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Brand Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
