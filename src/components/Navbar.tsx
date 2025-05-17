"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
      <Link href="/" className="text-2xl font-bold text-[#F4631E]">
        Shritej.dev
      </Link>

      {/* Desktop Links */}
      <nav className="hidden md:flex gap-6 items-center text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition">
          Home
        </Link>
        <Link href="/my-deck" className="hover:text-foreground transition">
          My Deck
        </Link>
        <ThemeToggle />
      </nav>

      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
}
