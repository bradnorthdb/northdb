"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "New Construction",
    description:
      "Ground-up builds designed and constructed to exacting standards. We manage every phase — site work, framing, mechanical, finishes — under one roof.",
  },
  {
    number: "02",
    title: "Renovation & Remodel",
    description:
      "Transforming existing spaces without compromising structural integrity or your daily life. We specialize in complex renovations others turn away.",
  },
  {
    number: "03",
    title: "Additions",
    description:
      "Seamless expansions that respect the original architecture while meaningfully improving livability and value.",
  },
  {
    number: "04",
    title: "Custom Builds",
    description:
      "One-of-a-kind structures — garages, studios, outdoor living, accessory dwelling units — built with the same care as the main home.",
  },
  {
    number: "05",
    title: "Design Consultation",
    description:
      "Pre-construction design and planning services to align vision, budget, and buildability before a single nail is driven.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Services() {
  return (
    <div className="min-h-screen pt-48 pb-20 px-8 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 max-w-xl"
      >
        <p className="mb-3 text-xs tracking-[0.3em] uppercase text-stone-500">
          Services
        </p>
        <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl">
          What We Do
        </h1>
      </motion.div>

      <div className="max-w-3xl divide-y divide-stone-800">
        {services.map((s, i) => (
          <motion.div
            key={s.number}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="group py-10 first:pt-0"
          >
            <div className="flex items-start gap-8">
              <span className="mt-1 shrink-0 text-xs text-stone-600">
                {s.number}
              </span>
              <div>
                <h2 className="mb-3 font-serif text-2xl text-white transition-colors duration-300 group-hover:text-stone-300">
                  {s.title}
                </h2>
                <p className="text-sm leading-relaxed text-stone-400">
                  {s.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
