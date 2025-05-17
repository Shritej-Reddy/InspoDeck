'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { useSavedInspirations } from '@/hooks/useSavedInspirations';

export default function Navbar() {
  const pathname = usePathname();
  const { savedIds } = useSavedInspirations();

  const linkClass = (path: string) =>
    `transition relative ${
      pathname === path ? 'text-[#F4631E] font-semibold' : 'text-muted-foreground hover:text-foreground'
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur border-b border-border flex justify-between items-center px-6 py-4 max-w-full shadow-sm">
      <Link href="/" className="text-2xl font-bold text-[#F4631E]">
        InspoDeck
      </Link>

      <nav className="hidden md:flex gap-6 items-center text-sm">
        <Link href="/" className={linkClass('/')}>Home</Link>
        <Link href="/my-deck" className={linkClass('/my-deck')}>
          My Deck
          {savedIds.length > 0 && (
            <span className="ml-1 text-xs bg-[#F4631E] text-white rounded-full px-2 py-0.5">
              {savedIds.length}
            </span>
          )}
        </Link>
        <Link href="/contact" className={linkClass('/contact')}>Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
