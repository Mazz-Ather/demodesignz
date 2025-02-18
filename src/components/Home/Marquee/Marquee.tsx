"use client";
import Image from "next/image";
import { useState } from "react";

export default function Marquee() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="overflow-hidden relative w-full py-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`flex items-center w-full gap-8 ${
          isHovered ? "animate-none" : "animate-marquee"
        }`}
      >
        {/* Original images (no duplication) */}
        {[
          "/images/tes1.png",
          "/images/tes2.png",
          "/images/tes3.png",
        ].map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Brand Logo"
            width={150} // Adjust size to fit full width naturally
            height={50}
            className="object-contain"
          />
        ))}
      </div>

      {/* Tailwind CSS for Marquee Animation */}
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
