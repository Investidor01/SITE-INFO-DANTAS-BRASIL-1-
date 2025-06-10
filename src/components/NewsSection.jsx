import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import ShareButton from "./ShareButton";

export default function NewsSection({ title, articles }) {
  if (!articles || articles.length === 0) return null;

  return (
    <section
      className="my-6"
      aria-labelledby={`${title.toLowerCase()}-heading`}
    >
      <h2
        id={`${title.toLowerCase()}-heading`}
        className="text-2xl font-bold mb-3 text-gray-900 dark:text-white"
      >
        {title}
      </h2>
      <ul className="space-y-4">
        {articles.map((a) => (
          <li
            key={a.url}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow"
          >
            <a
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-400 hover:underline flex items-center"
              aria-label={`Abrir notícia: ${a.title}`}
            >
              {a.title} <FaExternalLinkAlt className="ml-2" aria-hidden="true" />
            </a>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{a.description}</p>
            <div className="mt-2">
              <ShareButton url={a.url} title={a.title} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}