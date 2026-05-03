"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Modern Hillside Residence",
    category: "New Construction",
    year: "2024",
    placeholder: "bg-stone-800",
  },
  {
    id: 2,
    title: "Kitchen & Great Room Renovation",
    category: "Renovation",
    year: "2024",
    placeholder: "bg-stone-700",
  },
  {
    id: 3,
    title: "Craftsman Addition",
    category: "Addition",
    year: "2023",
    placeholder: "bg-stone-800",
  },
  {
    id: 4,
    title: "Custom Timber Frame Garage",
    category: "Custom Build",
    year: "2023",
    placeholder: "bg-stone-700",
  },
  {
    id: 5,
    title: "Primary Suite & Bath",
    category: "Renovation",
    year: "2023",
    placeholder: "bg-stone-800",
  },
  {
    id: 6,
    title: "Outdoor Living Structure",
    category: "Custom Build",
    year: "2022",
    placeholder: "bg-stone-700",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Work() {
  return (
    <div className="min-h-screen pt-48 pb-20 px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16"
      >
        <p className="mb-3 text-xs tracking-[0.3em] uppercase text-stone-500">
          Portfolio
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl">
          Selected Work
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="group cursor-pointer"
          >
            <div
              className={`relative mb-4 aspect-[4/3] overflow-hidden rounded-sm ${project.placeholder}`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs tracking-widest uppercase text-stone-600">
                  Image Coming Soon
                </span>
              </div>
              <div className="absolute inset-0 bg-stone-950/0 transition-colors duration-500 group-hover:bg-stone-950/20" />
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-sm font-medium text-white">
                  {project.title}
                </h2>
                <p className="mt-0.5 text-xs text-stone-500">
                  {project.category}
                </p>
              </div>
              <span className="text-xs text-stone-600">{project.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
