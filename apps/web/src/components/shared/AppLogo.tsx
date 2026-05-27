"use client";

import Image from "next/image";
import Link from "next/link";

interface AppLogoProps {
  href?: string;
  width?: number;
  className?: string;
}

export default function AppLogo({
  href = "/",
  width = 150,
  className = "",
}: AppLogoProps) {
  return (
    <Link
      href={href}
      className={`flex items-center shrink-0 ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Startup Ka Mall"
        width={150}
        height={42}
        priority
        className="h-auto object-contain"
        style={{
          width: `${width}px`,
        }}
      />
    </Link>
  );
}