'use client';

import { useState } from 'react';
import { inspirations as allInspo, Inspiration } from '@/lib/data';
import InspirationCard from '@/components/InspirationCard';
import FilterBar from '@/components/FilterBar';
import InspoModal from '@/components/InspoModal';
import { useSavedInspirations } from '@/hooks/useSavedInspirations';

export default function HomePage() {
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [selected, setSelected] = useState<Inspiration | null>(null);
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  const { savedIds, toggleSave, isSaved } = useSavedInspirations();

  let visibleItems = allInspo;

  if (filteredTags.length > 0) {
    visibleItems = visibleItems.filter((item) =>
      filteredTags.every((tag) => item.tags.includes(tag))
    );
  }

  if (showSavedOnly) {
    visibleItems = visibleItems.filter((item) => savedIds.includes(item.id));
  }

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

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setShowSavedOnly((prev) => !prev)}
          className={`px-4 py-1 text-sm border rounded-full transition ${
            showSavedOnly
              ? 'border-[#F4631E] text-[#F4631E]'
              : 'text-muted-foreground border-border hover:text-foreground'
          }`}
        >
          {showSavedOnly ? 'Showing Saved' : 'Show Only Saved'}
        </button>
      </div>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleItems.map((item) => (
            <InspirationCard
              key={item.id}
              item={item}
              onClick={() => setSelected(item)}
              toggleSave={toggleSave}
              isSaved={isSaved(item.id)}
            />
          ))}
        </div>
        {visibleItems.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">
            No inspirations match your filters.
          </p>
        )}
      </section>

      <InspoModal open={!!selected} onClose={() => setSelected(null)} item={selected} />
    </main>
  );
}
