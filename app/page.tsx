"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  return (
    <section className="relative flex h-screen flex-col justify-end px-8 pb-16 md:px-16 md:pb-20">
      {/* Background placeholder — swap with next/image when photos are ready */}
      <div className="absolute inset-0 bg-stone-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />

      <div className="relative z-10 max-w-4xl">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-4 text-xs tracking-[0.3em] uppercase text-stone-400"
        >
          Builder · Designer · Craftsman
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-5xl leading-[1.08] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          Built with intention.
          <br />
          <span className="text-stone-400">Finished with precision.</span>
        </motion.h1>

        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex items-center gap-8"
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

      {/* Scroll indicator */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-stone-600 [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="h-px w-px rounded-full bg-stone-600 shadow-[0_0_0_1px_rgb(87,83,78)]"
        />
      </motion.div>
    </section>
  );
}
