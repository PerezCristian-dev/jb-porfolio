"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Email", value: "hello@jamesbrockiv.com", href: "mailto:hello@jamesbrockiv.com" },
  { label: "Instagram", value: "@yourhandle", href: "https://instagram.com/yourhandle" },
  { label: "Vimeo", value: "vimeo.com/jamesbrockiv", href: "https://vimeo.com/jamesbrockiv" },
];

export default function ContactSection() {
  return (
    <section className="bg-black px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Divider */}
        <motion.div
          className="mb-16 h-px w-full bg-white/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ originX: 0 }}
        />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-white/30">Contact</p>
          </motion.div>

          <div className="md:col-span-2 flex flex-col gap-6">
            {links.map(({ label, value, href }, i) => (
              <motion.div
                key={label}
                className="flex items-baseline gap-8"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <span className="w-20 text-xs tracking-[0.15em] uppercase text-white/30 shrink-0">
                  {label}
                </span>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-lg font-light text-white/70 hover:text-white transition-colors duration-300 underline-offset-4 hover:underline"
                >
                  {value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer line */}
        <motion.p
          className="mt-24 text-xs text-white/20 tracking-wide"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          © {new Date().getFullYear()} James Brock IV. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
}
