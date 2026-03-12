"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type PlaceholderImageProps = ImageProps & {
  fallbackClassName?: string;
};

/**
 * Image with a graceful dark fallback when the file is missing.
 * The dark #111 background is always visible until the image loads.
 */
export default function PlaceholderImage({
  src,
  alt,
  fallbackClassName,
  className,
  ...props
}: PlaceholderImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`absolute inset-0 bg-[#111] flex items-center justify-center ${fallbackClassName ?? ""}`}
        aria-label={alt as string}
      >
        <span className="text-white/10 text-xs tracking-widest uppercase">
          {alt as string}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  );
}
