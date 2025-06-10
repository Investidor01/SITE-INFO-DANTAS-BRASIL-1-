import React from "react";

export default function Logo() {
  return (
    <svg
      className="w-10 h-10 mr-3"
      viewBox="0 0 64 64"
      fill="none"
      aria-label="Logo INFO DANTAS BRASIL"
      role="img"
    >
      <circle cx="32" cy="32" r="30" fill="#FF6B00" />
      <text
        x="50%"
        y="55%"
        textAnchor="middle"
        fontSize="28"
        fontWeight="bold"
        fill="white"
        fontFamily="Arial, sans-serif"
      >
        IDB
      </text>
    </svg>
  );
}
