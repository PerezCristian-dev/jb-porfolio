"use client";

import { motion } from "framer-motion";

const clients = [
  "Apple",
  "Nike",
  "Sony",
  "MTV",
  "HBO",
  "Adidas",
  "Louis Vuitton",
  "Google",
];

export default function ClientsList() {
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
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[0.2em] uppercase text-white/30">
              Clients &amp; Collaborators
            </p>
          </motion.div>

          {/* Client list */}
          <div className="md:col-span-2">
            <ul className="space-y-3">
              {clients.map((client, i) => (
                <motion.li
                  key={client}
                  className="text-xl font-light text-white/60 hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.07,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  {client}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
