'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useSavedInspirations } from '@/hooks/useSavedInspirations';

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { savedIds } = useSavedInspirations();

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  const linkClass = (path: string) =>
    `transition text-xl ${
      pathname === path ? 'text-[#F4631E] font-semibold' : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="text-foreground"
        aria-label="Toggle Menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="fixed inset-0 z-[9998] bg-background text-foreground flex flex-col items-center justify-center gap-8 transition-all">
          <Link href="/" onClick={closeMenu} className={linkClass('/')}>
            Home
          </Link>

          <Link href="/my-deck" onClick={closeMenu} className={linkClass('/my-deck')}>
            My Deck
            {savedIds.length > 0 && (
              <span className="ml-2 text-sm bg-[#F4631E] text-white rounded-full px-2 py-0.5">
                {savedIds.length}
              </span>
            )}
          </Link>

          <Link href="/contact" onClick={closeMenu} className={linkClass('/contact')}>
            Contact
          </Link>

          <ThemeToggle />
        </div>
      )}
    </div>
  );
}
