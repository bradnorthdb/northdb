"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

const values = [
  {
    label: "Craft",
    description:
      "Every joint, seam, and finish is treated as a signature. We don't cut corners — we square them.",
  },
  {
    label: "Clarity",
    description:
      "Straightforward communication from first consultation through final walkthrough. No surprises.",
  },
  {
    label: "Longevity",
    description:
      "We build for decades, not just inspections. Materials are chosen for performance, not just appearance.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-8 md:px-16">
      <div className="max-w-3xl">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-stone-500">
            About
          </p>
          <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl">
            We build what others
            <br />
            <span className="text-stone-400">won&apos;t attempt.</span>
          </h1>
        </motion.div>

        <motion.div
          variants={fadeUp(0.15)}
          initial="hidden"
          animate="visible"
          className="mb-16 space-y-5 text-base leading-relaxed text-stone-400"
        >
          <p>
            NDB was founded on a simple belief: that a well-built home is one of
            the most meaningful things a person can own. We bring together
            general contracting, custom building, and design to serve clients
            who won&apos;t settle for ordinary.
          </p>
          <p>
            We take on a small number of projects each year — by design. That
            focus lets us stay deeply involved in every decision, from structural
            engineering to the finish on a cabinet door.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp(0.25)}
          initial="hidden"
          animate="visible"
          className="border-t border-stone-800 pt-12"
        >
          <p className="mb-10 text-xs tracking-[0.3em] uppercase text-stone-500">
            What We Stand For
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.label}>
                <h3 className="mb-3 font-serif text-xl text-white">
                  {v.label}
                </h3>
                <p className="text-sm leading-relaxed text-stone-400">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
