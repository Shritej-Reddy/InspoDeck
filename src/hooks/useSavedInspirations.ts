'use client';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export function useSavedInspirations() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const fromStorage = localStorage.getItem('saved-inspirations');
    if (fromStorage) {
      setSavedIds(JSON.parse(fromStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('saved-inspirations', JSON.stringify(savedIds));
  }, [savedIds]);

  const toggleSave = (id: string, title?: string) => {
    const isAlreadySaved = savedIds.includes(id);

    const updated = isAlreadySaved
      ? savedIds.filter((i) => i !== id)
      : [...savedIds, id];

    setSavedIds(updated);

    toast.success(
      isAlreadySaved
        ? `Removed "${title}" from My Deck`
        : `Saved "${title}" to My Deck`
    );
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return { savedIds, toggleSave, isSaved };
}
