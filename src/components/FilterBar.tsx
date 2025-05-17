"use client";

import { useState } from "react";
import classNames from "classnames";

const allTags = ["UI", "UX", "Cards", "Minimal", "Typography", "Dashboard"];

export default function FilterBar({
  onFilter,
}: {
  onFilter: (tags: string[]) => void;
}) {
  const [active, setActive] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    const updated = active.includes(tag)
      ? active.filter((t) => t !== tag)
      : [...active, tag];

    setActive(updated);
    onFilter(updated);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {allTags.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          className={classNames(
            "px-3 py-1 rounded-full border text-sm transition",
            active.includes(tag)
              ? "bg-[#309898]/20 border-[#309898] text-[#309898]"
              : "border-muted text-muted-foreground hover:border-foreground"
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
