'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function CircularScrollProgress() {
  const scroll = useScrollProgress();

  const radius = 25;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (scroll / 100) * circumference;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[9999] group cursor-pointer"
      title="Scroll to top"
    >
      <svg
        height={radius * 2}
        width={radius * 2}
        className="rotate-[-90deg]"
      >
        <defs>
          <linearGradient id="scroll-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#309898" />
            <stop offset="50%" stopColor="#FF9F00" />
            <stop offset="100%" stopColor="#F4631E" />
          </linearGradient>
        </defs>

        {/* Background circle */}
        <circle
          stroke="#e5e5e5"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Foreground animated ring */}
        <circle
          stroke="url(#scroll-gradient)"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          style={{
            transition: 'stroke-dashoffset 0.3s ease',
          }}
        />
      </svg>

      {/* Percentage text */}
      <span className="absolute top-1/2 left-1/2 text-[10px] font-semibold text-[#309898] translate-x-[-50%] translate-y-[-50%] select-none">
        {Math.round(scroll)}%
      </span>

      {/* Tooltip */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-background px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-all duration-300 border border-muted text-muted-foreground">
        Scroll to top
      </span>
    </div>
  );
}
