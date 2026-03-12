"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/data/projects";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-5xl"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-white/50 hover:text-white transition-colors duration-200 text-xs tracking-[0.2em] uppercase flex items-center gap-2"
            >
              <span>Close</span>
              <span className="text-base leading-none">×</span>
            </button>

            {/* Video embed */}
            <div className="aspect-video-container rounded-sm overflow-hidden bg-[#111]">
              <iframe
                src={`${project.videoUrl}?autoplay=1&title=0&byline=0&portrait=0`}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={project.title}
                className="absolute inset-0 w-full h-full"
              />
            </div>

            {/* Project info */}
            <div className="mt-5 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-light tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="mt-1 text-sm text-white/40">
                  {project.client} — {project.category}
                </p>
              </div>
              <span className="text-sm text-white/30">{project.year}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
