'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="text-foreground"
        aria-label="Toggle Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Fullscreen Overlay */}
      {open && (
        <div className="fixed inset-0 z-[9998] bg-background text-foreground flex flex-col items-center justify-center gap-8 text-xl transition-all">
          <Link href="/" onClick={closeMenu} className="hover:text-[#F4631E] transition">
            Home
          </Link>
          <Link href="/my-deck" onClick={closeMenu} className="hover:text-[#F4631E] transition">
            My Deck
          </Link>
          <Link href="/contact" onClick={closeMenu} className="hover:text-[#F4631E] transition">
            Contact
          </Link>
          <ThemeToggle />
        </div>
      )}
    </div>
  );
}
