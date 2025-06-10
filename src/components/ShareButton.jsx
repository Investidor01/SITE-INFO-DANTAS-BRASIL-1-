import React from "react";
import { FaShareAlt } from "react-icons/fa";

export default function ShareButton({ url, title }) {
  const share = () => {
    if (navigator.share) {
      navigator.share({ title, url }).catch(() => {
        // Fail silently or show fallback message
      });
    } else {
      navigator.clipboard.writeText(url).catch(() => {
        alert("Não foi possível copiar o link.");
      });
      alert("Link copiado para área de transferência!");
    }
  };
  return (
    <button
      onClick={share}
      className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label={`Compartilhar notícia: ${title}`}
      type="button"
    >
      <FaShareAlt />
      <span>Compartilhar</span>
    </button>
  );
}
