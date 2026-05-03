"use client";

import { motion } from "framer-motion";
import LogoMark from "@/components/LogoMark";

export default function ComingSoon() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-950 px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-8"
      >
        <LogoMark size={72} className="text-white" />

        <div>
          <h1 className="font-serif text-3xl tracking-tight text-white md:text-4xl">
            North Design Build
          </h1>
          <p className="mt-3 text-xs tracking-[0.35em] uppercase text-stone-500">
            Something new is coming
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs tracking-[0.2em] uppercase text-stone-600"
        >
          Madison, Wisconsin · northdb.com
        </motion.div>
      </motion.div>
    </div>
  );
}
