"use client";

import { Inspiration } from "@/lib/data";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function InspoModal({
  open,
  onClose,
  item,
}: {
  open: boolean;
  onClose: () => void;
  item: Inspiration | null;
}) {
  if (!open || !item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-background text-foreground max-w-3xl w-full rounded-lg overflow-hidden border border-border shadow-xl relative"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition"
          >
            <X />
          </button>
          <Image
            src={item.image}
            alt={item.title}
            width={1000}
            height={600}
            className="w-full h-auto object-cover"
          />
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-sm text-muted-foreground">By {item.creator}</p>
            <div className="flex gap-2 flex-wrap">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-full border border-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm border px-4 py-2 rounded hover:bg-[#309898]/10 border-[#309898] text-[#309898] transition"
            >
              View on Dribbble
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
