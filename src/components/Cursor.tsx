"use client";

import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 150);
    };

    const onMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (
        el.tagName === "A" ||
        el.tagName === "BUTTON" ||
        el.getAttribute("data-cursor-hover") !== null
      ) {
        setHovered(true);
      }
    };

    const onMouseOut = () => setHovered(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", onClick);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", onClick);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed top-0 left-0 z-[999999] pointer-events-none transition-transform duration-150 ease-out"
    >
      {/* Outer Ring */}
      <div
        className={`relative rounded-full transition-all duration-200 ease-out
      ${
        hovered
          ? "w-12 h-12 border border-[#FF9F00]"
          : "w-8 h-8 border border-[#309898]"
      }
      ${clicked ? "scale-75" : "scale-100"}
    `}
      >
        {/* Inner Dot */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#309898] rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
