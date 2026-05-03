"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  },
});

export default function Contact() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire up your form handler here (Resend, Formspree, etc.)
    setSent(true);
  }

  return (
    <div className="min-h-screen pt-48 pb-20 px-8 md:px-16">
      <div className="max-w-xl">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <p className="mb-3 text-xs tracking-[0.3em] uppercase text-stone-500">
            Contact
          </p>
          <h1 className="font-serif text-4xl tracking-tight text-white md:text-5xl">
            Start a Conversation
          </h1>
          <p className="mt-5 text-sm leading-relaxed text-stone-400">
            We take on a limited number of projects each year. If you have
            something in mind, reach out early.
          </p>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 text-center"
          >
            <p className="font-serif text-2xl text-white">Thank you.</p>
            <p className="mt-3 text-sm text-stone-400">
              We&apos;ll be in touch within 1–2 business days.
            </p>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "phone", label: "Phone (optional)", type: "tel" },
            ].map((field) => (
              <div key={field.id} className="group relative">
                <label
                  htmlFor={field.id}
                  className="mb-2 block text-xs tracking-widest uppercase text-stone-500"
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  required={!field.label.includes("optional")}
                  className="w-full border-b border-stone-700 bg-transparent py-3 text-sm text-white placeholder-stone-700 outline-none transition-colors duration-300 focus:border-stone-400"
                  placeholder="—"
                />
              </div>
            ))}

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-xs tracking-widest uppercase text-stone-500"
              >
                Project Overview
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full border-b border-stone-700 bg-transparent py-3 text-sm text-white placeholder-stone-700 outline-none transition-colors duration-300 focus:border-stone-400 resize-none"
                placeholder="Tell us about your project —"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 text-sm tracking-widest uppercase text-white transition-opacity hover:opacity-70"
            >
              Send Message
              <span className="block h-px w-10 bg-white transition-all duration-300 group-hover:w-16" />
            </button>
          </motion.form>
        )}
      </div>
    </div>
  );
}
