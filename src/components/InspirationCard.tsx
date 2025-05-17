'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import { Inspiration } from '@/lib/data';

export default function InspirationCard({
  item,
  onClick,
  toggleSave,
  isSaved,
}: {
  item: Inspiration;
  onClick: () => void;
  toggleSave: (id: string, title?: string) => void;
  isSaved: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden border border-border rounded-lg transition-shadow hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      {/* Preview Image */}
      <Image
        src={item.image}
        alt={item.title}
        width={600}
        height={400}
        className="w-full h-60 object-cover"
      />

      {/* Like / Save Button */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // Prevent opening modal
          toggleSave(item.id, item.title);
        }}
        className="absolute top-3 right-3 z-10 bg-background/70 backdrop-blur border border-muted p-1 rounded-full text-muted-foreground hover:text-[#F4631E] transition"
        aria-label="Save to My Deck"
      >
        <Heart
          size={18}
          fill={isSaved ? '#F4631E' : 'none'}
          strokeWidth={isSaved ? 1.5 : 2}
        />
      </button>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <p className="text-white text-sm font-semibold px-4 text-center">{item.title}</p>
      </div>
    </motion.div>
  );
}
