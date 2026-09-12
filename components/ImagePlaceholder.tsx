import React from "react";

interface ImagePlaceholderProps {
  label: string;
  sublabel?: string;
  aspectRatio?: "square" | "portrait" | "landscape" | "arch";
  className?: string;
  altText: string;
}

export default function ImagePlaceholder({
  label,
  sublabel = "Photo placeholder — ready for real image",
  aspectRatio = "portrait",
  className = "",
  altText,
}: ImagePlaceholderProps) {
  const aspectStyles = {
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    landscape: "aspect-[4/3]",
    arch: "aspect-[3/4] rounded-t-[120px] rounded-b-2xl",
  };

  const roundedStyle = aspectRatio === "arch" ? "" : "rounded-2xl";

  return (
    <div
      role="img"
      aria-label={altText}
      className={`relative overflow-hidden border-2 border-dashed border-[#D5CDC1] bg-[#F2EDE5] flex flex-col items-center justify-center p-6 text-center shadow-xs transition-all duration-300 hover:border-[#B5A898] ${aspectStyles[aspectRatio]} ${roundedStyle} ${className}`}
    >
      {/* Visual Camera / Frame Icon */}
      <div className="w-12 h-12 mb-3 rounded-full bg-[#E6DFD4] text-[#6E7B74] flex items-center justify-center shadow-xs">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
          />
        </svg>
      </div>

      {/* Label Badge */}
      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#446654] bg-[#E2EDE6] rounded-full uppercase tracking-wider mb-2">
        Reserved Image Slot
      </span>

      {/* Title */}
      <p className="text-base font-serif font-medium text-[#242828] max-w-[240px] leading-snug">
        {label}
      </p>

      {/* Sublabel */}
      <p className="mt-1 text-xs text-[#6B7570] max-w-[200px]">
        {sublabel}
      </p>
    </div>
  );
}
