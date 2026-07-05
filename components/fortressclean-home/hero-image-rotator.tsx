"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/images/main/1.png",
  "/images/main/2.png",
  "/images/main/3.png",
  "/images/main/4.png",
];

export function HeroImageRotator() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0">
      {HERO_IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="포트리스 클린이 관리한 쾌적한 공간"
          fill
          preload={index === 0}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/20 via-transparent to-transparent" />
    </div>
  );
}
