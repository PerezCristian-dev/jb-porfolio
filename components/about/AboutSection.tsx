"use client";

import { motion } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function AboutSection() {
  return (
    <section className="min-h-screen bg-black px-6 pb-24 pt-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.h1
          className="mb-16 text-[clamp(2.5rem,6vw,5rem)] font-light leading-[0.95] tracking-[-0.03em] text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          About
        </motion.h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          {/* Portrait */}
          <motion.div
            className="relative aspect-[3/4] w-full max-w-sm overflow-hidden bg-[#111]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <PlaceholderImage
              src="https://picsum.photos/seed/portrait/600/800?grayscale"
              alt="Portrait"
              fill
              className="object-cover object-top"
              priority
              unoptimized
            />
          </motion.div>

          {/* Bio text */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="mb-2 text-xs tracking-[0.2em] uppercase text-white/30">
              Filmmaker / Director
            </p>

            <div className="mt-6 space-y-5 text-[1.05rem] font-light leading-[1.75] text-white/70">
              <p>
                Your bio text goes here. This is a placeholder for the filmmaker&apos;s personal
                story — their background, approach to storytelling, and what drives their work.
              </p>
              <p>
                Describe your creative philosophy. What makes your visual language unique?
                What stories do you want to tell? This section is where personality meets craft.
              </p>
              <p>
                Based in [City]. Available for commercial, editorial, and narrative projects
                worldwide.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <Stat value="10+" label="Years" />
              <Stat value="50+" label="Projects" />
              <Stat value="12" label="Awards" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-light tracking-tight text-white">{value}</span>
      <span className="mt-1 text-xs tracking-[0.15em] uppercase text-white/30">{label}</span>
    </div>
  );
}
