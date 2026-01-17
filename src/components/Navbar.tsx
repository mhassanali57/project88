"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded-lg transition duration-300 ${
      pathname === path
        ? "bg-white/10 text-emerald-400"
        : "text-white hover:text-emerald-300 hover:bg-white/5"
    }`;

  return (
    <nav className="relative bg-black border-b border-white/10 overflow-hidden">
      
      {/* 🐍 Animated Snake Line */}
      <span className="absolute bottom-0 left-0 h-0.75 w-40 bg-linear-to-r from-emerald-400 via-teal-400 to-purple-500 animate-snake" />

      <div className="container mx-auto flex justify-center md:justify-end gap-4 px-6 py-3 relative z-10">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/about" className={linkClass("/about")}>
          About
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
