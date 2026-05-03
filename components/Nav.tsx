"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LogoMark from "@/components/LogoMark";

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
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-stone-950/90 backdrop-blur-sm"
    >
      {/* Logo row */}
      <div className="flex justify-center pt-10 pb-7">
        <Link href="/">
          <LogoMark size={80} className="text-white" />
        </Link>
      </div>

      {/* Nav links row */}
      <nav className="flex items-center justify-between px-40 pb-8 border-b border-stone-800">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xl tracking-[0.4em] uppercase transition-opacity duration-200 ${
              pathname === link.href
                ? "opacity-100 text-white"
                : "opacity-40 text-white hover:opacity-80"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
