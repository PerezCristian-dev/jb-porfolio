"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import VideoModal from "@/components/VideoModal";
import type { Project } from "@/data/projects";

export default function PortfolioGrid() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const handleClose = useCallback(() => setActiveProject(null), []);

  return (
    <>
      <section className="bg-black px-6 pb-24 pt-20 md:px-10 md:pt-24">
        {/* Section header */}
        <motion.div
          className="mb-12 flex items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-xs tracking-[0.2em] uppercase text-white/40">
            Selected Work
          </h2>
          <span className="text-xs text-white/20">{projects.length} projects</span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setActiveProject}
            />
          ))}
        </div>
      </section>

      <VideoModal project={activeProject} onClose={handleClose} />
    </>
  );
}
