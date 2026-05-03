"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export default function Home() {
  return (
    <div className="pt-[168px]">
      {/* Full-width hero image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full"
        style={{ height: "70vh" }}
      >
        {/* Swap this div for a next/image when photos are ready */}
        <div className="absolute inset-0 bg-stone-800 flex items-center justify-center">
          <span className="text-xs tracking-widest uppercase text-stone-600">
            Hero Image Coming Soon
          </span>
        </div>
      </motion.div>

      {/* Text block below image — centered */}
      <div className="bg-stone-950 px-8 py-24 text-center">
        <motion.p
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="visible"
          className="mb-3 text-xs tracking-[0.3em] uppercase text-stone-500"
        >
          Builder · Designer · Craftsman
        </motion.p>

        <motion.h1
          variants={fadeUp(0.45)}
          initial="hidden"
          animate="visible"
          className="font-serif text-3xl tracking-tight text-white md:text-4xl"
        >
          North Design Build
        </motion.h1>

        <motion.p
          variants={fadeUp(0.6)}
          initial="hidden"
          animate="visible"
          className="mt-4 mx-auto max-w-md text-sm leading-relaxed text-stone-400"
        >
          General contracting and custom building for clients who value craft,
          clarity, and longevity. Based in Madison, Wisconsin.
        </motion.p>

        <motion.div
          variants={fadeUp(0.75)}
          initial="hidden"
          animate="visible"
          className="mt-10 flex items-center justify-center gap-10"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-white transition-opacity hover:opacity-70"
          >
            View Work
            <span className="block h-px w-10 bg-white transition-all duration-300 group-hover:w-16" />
          </Link>
          <Link
            href="/contact"
            className="text-sm tracking-widest uppercase text-stone-400 transition-opacity hover:opacity-70"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
