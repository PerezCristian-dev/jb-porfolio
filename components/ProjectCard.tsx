"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export default function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: (index % 3) * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative cursor-pointer overflow-hidden bg-[#111]"
      onClick={() => onClick(project)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(project)}
      aria-label={`Play ${project.title}`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Base thumbnail */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: hovered ? 1.04 : 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <PlaceholderImage
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* GIF / hover preview image */}
        <AnimatePresence>
          {hovered && project.gifPreview && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <PlaceholderImage
                src={project.gifPreview}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dark overlay + play button on hover */}
        <motion.div
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70"
            animate={{ scale: hovered ? 1 : 0.8, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg aria-hidden="true" width="16" height="18" viewBox="0 0 16 18" fill="none" className="ml-1">
              <path d="M1 1L15 9L1 17V1Z" fill="white" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Category tag on hover */}
        <motion.div
          className="absolute bottom-3 left-3"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 4 }}
          transition={{ duration: 0.3 }}
        >
          <span className="bg-black/60 backdrop-blur-sm text-white/80 text-[10px] tracking-[0.15em] uppercase px-2 py-1">
            {project.category}
          </span>
        </motion.div>

        {/* Index number */}
        <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] text-white/30">
          {project.id}
        </span>
      </div>

      {/* Card info */}
      <div className="px-1 pt-4 pb-5">
        <h3 className="text-base font-light tracking-tight text-white">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-white/40 tracking-wide">
          {project.client}
        </p>
      </div>
    </motion.article>
  );
}
