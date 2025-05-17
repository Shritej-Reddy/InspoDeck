'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Inspiration } from '@/lib/data';

export default function InspirationCard({
  item,
  onClick,
}: {
  item: Inspiration;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden border border-border rounded-lg transition-shadow hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={600}
        height={400}
        className="w-full h-60 object-cover"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <p className="text-white text-sm font-semibold">{item.title}</p>
      </div>
    </motion.div>
  );
}
