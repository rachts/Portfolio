import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";
import { FeaturedProjectCard } from "./featured-project-card";
import { ArchiveProjectCard } from "./archive-project-card";
import { ProjectFilters } from "./project-filters";

export function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured);
  
  // Extract all unique categories
  const categories = ["ALL", ...Array.from(new Set(projects.map((p) => p.category.toUpperCase())))];
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((p) => p.category.toUpperCase() === activeCategory);

  return (
    <div id="work" className="space-y-24">
      {/* 1. SYSTEMS ARCHITECTURE (FEATURED DEEP DIVES) */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-4">
            <h2 className="text-[42px] font-bold tracking-tight text-black mb-4">
              Systems Architecture
            </h2>
            <p className="text-lg text-[#525252] max-w-[600px] leading-relaxed">
              Deep dives into flagship engineering problems, architectural decisions, and the 
              resulting impact. Built for scale, resilience, and user experience.
            </p>
          </div>

          {/* Featured Projects Stack */}
          <div className="space-y-8 mt-12">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. PROJECT ARCHIVES (ALL PROJECTS GRID) */}
      <section className="py-12 md:py-20 border-t border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-[42px] font-bold tracking-tight text-black mb-4">
                Project Archives
              </h2>
              <p className="text-lg text-[#525252] max-w-[500px] leading-relaxed">
                A comprehensive overview of systems built, algorithms optimized, and products delivered.
              </p>
            </div>
          </div>
          
          {/* Filter Pills */}
          <ProjectFilters
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
          />
          
          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ArchiveProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsSection;
