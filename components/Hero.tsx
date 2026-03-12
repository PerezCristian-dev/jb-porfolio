"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Cinematic background images for the hero slideshow (free stock, grayscale)
const BG_IMAGES = [
  "https://picsum.photos/seed/hero1/1920/1080?grayscale",
  "https://picsum.photos/seed/hero2/1920/1080?grayscale",
  "https://picsum.photos/seed/hero3/1920/1080?grayscale",
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  // Try playing the actual video reel if present
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.play()
      .then(() => setVideoReady(true))
      .catch(() => setVideoReady(false));
  }, []);

  // Slideshow fallback: rotate background every 5s when no video
  useEffect(() => {
    if (videoReady) return;
    const id = setInterval(() => {
      setBgIndex((i) => (i + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(id);
  }, [videoReady]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* === Fallback: Cinematic image slideshow === */}
      {!videoReady && BG_IMAGES.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === bgIndex ? 0.55 : 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover scale-105"
            style={{
              animation: i === bgIndex ? "slowZoom 6s ease-in-out forwards" : "none",
            }}
          />
        </motion.div>
      ))}

      {/* === Real video (when reel.mp4 is present) === */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-70" : "opacity-0"
        }`}
        src="/videos/reel.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero-poster.jpg"
      />

      {/* Film grain overlay (SVG noise) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.35,
          mixBlendMode: "overlay",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/10 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-[6vh] bg-black" />
      <div className="absolute bottom-0 left-0 right-0 h-[6vh] bg-black" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-20 md:px-10 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs tracking-[0.25em] uppercase text-white/50">
            Filmmaker · Director · Visual Storyteller
          </p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-light leading-[0.95] tracking-[-0.03em] text-white">
            James Brock IV
          </h1>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 right-6 md:right-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <span aria-hidden="true" className="text-[10px] tracking-[0.2em] uppercase text-white/40 [writing-mode:vertical-rl]">
            Scroll
          </span>
          <motion.div
            className="h-10 w-px bg-white/20 origin-top"
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

    </section>
  );
}
