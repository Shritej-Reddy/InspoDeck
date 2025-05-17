'use client';

import { useEffect, useState } from 'react';
import { inspirations as allInspo, Inspiration } from '@/lib/data';
import InspirationCard from '@/components/InspirationCard';
import InspoModal from '@/components/InspoModal';
import { useSavedInspirations } from '@/hooks/useSavedInspirations';

export default function MyDeckPage() {
  const [selected, setSelected] = useState<Inspiration | null>(null);
  const [mounted, setMounted] = useState(false);

  const { savedIds, toggleSave, isSaved } = useSavedInspirations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const savedItems = allInspo.filter((item) => savedIds.includes(item.id));

  return (
    <main className="min-h-screen bg-background text-foreground font-sans pt-24 px-4 sm:px-6 md:px-16 py-20 space-y-16 max-w-6xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-[#F4631E]">My Deck</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Your collection of saved inspirations.
        </p>
      </section>

      <section>
        {savedItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {savedItems.map((item) => (
              <InspirationCard
                key={item.id}
                item={item}
                onClick={() => setSelected(item)}
                toggleSave={toggleSave}
                isSaved={isSaved(item.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground mt-10">
            You haven&apos;t saved anything yet. Go explore!
          </p>
        )}
      </section>

      <InspoModal open={!!selected} onClose={() => setSelected(null)} item={selected} />
    </main>
  );
}
