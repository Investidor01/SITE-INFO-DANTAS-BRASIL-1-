export default function NewsSection({ title, articles }) {
      return (
            <section className="mb-8">
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {articles.map((article, idx) => (
                              <a href={article.url} key={idx} className="block p-4 rounded bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition" target="_blank" rel="noopener noreferrer">
                                    <h3 className="font-bold">{article.title}</h3>
                                    <p className="text-sm">{article.description}</p>
                              </a>
                        ))}
                  </div>
            </section>
      );
}
import React from "react";

export default function NewsSection({ title, articles }) {
  if (!articles || articles.length === 0) {
    return null;
  }
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {articles.map((article, idx) => (
          <a
            href={article.url}
            key={idx}
            className="block p-4 rounded bg-white dark:bg-gray-800 shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="font-bold">{article.title}</h3>
            <p className="text-sm">{article.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}