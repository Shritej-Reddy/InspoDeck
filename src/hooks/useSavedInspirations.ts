"use client";

import { useEffect, useState } from "react";

export function useSavedInspirations() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const fromStorage = localStorage.getItem('saved-inspirations');
    if (fromStorage) {
      setSavedIds(JSON.parse(fromStorage));
    }
  }, []);  

  useEffect(() => {
    localStorage.setItem("saved-inspirations", JSON.stringify(savedIds));
  }, [savedIds]);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedIds.includes(id);

  return { savedIds, toggleSave, isSaved };
}
