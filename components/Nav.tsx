"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference"
    >
      <Link href="/" className="font-serif text-lg tracking-tight text-white">
        NDB
      </Link>
      <nav className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm tracking-widest uppercase transition-opacity duration-300 ${
              pathname === link.href
                ? "opacity-100 text-white"
                : "opacity-50 text-white hover:opacity-100"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
