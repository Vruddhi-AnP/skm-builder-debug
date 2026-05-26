"use client"

import Image from "next/image"
import Link from "next/link"

interface AppLogoProps {
  href?: string
  width?: number
  className?: string
}

export default function AppLogo({
  href = "/",
  width = 190,
  className = "",
}: AppLogoProps) {
  return (
    <Link
      href={href}
      className={`flex items-center ${className}`}
    >
      <Image
        src="/logo.png"
        alt="Startup Ka Mall"
        width={220}
        height={60}
        priority
        className={`h-auto object-contain`}
        style={{
          width: `${width}px`,
        }}
      />
    </Link>
  )
}