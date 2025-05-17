'use client';

import { useState } from 'react';
import { inspirations as allInspo, Inspiration } from '@/lib/data';
import InspirationCard from '@/components/InspirationCard';
import FilterBar from '@/components/FilterBar';
import InspoModal from '@/components/InspoModal';

export default function HomePage() {
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [selected, setSelected] = useState<Inspiration | null>(null);

  const visibleItems = filteredTags.length
    ? allInspo.filter((item) =>
        filteredTags.every((tag) => item.tags.includes(tag))
      )
    : allInspo;

  return (
    <main className="min-h-screen bg-background text-foreground font-sans px-4 sm:px-6 md:px-16 py-20 space-y-16 max-w-6xl mx-auto">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          <span className="text-[#F4631E]">InspoDeck</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Curated daily design inspiration for creatives, developers, and dreamers.
        </p>
      </section>

      <FilterBar onFilter={setFilteredTags} />

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <InspirationCard key={item.id} item={item} onClick={() => setSelected(item)} />
          ))}
        </div>
        {visibleItems.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            No results match those tags.
          </p>
        )}
      </section>

      <InspoModal open={!!selected} onClose={() => setSelected(null)} item={selected} />
    </main>
  );
}
