import { Card } from "flowbite-react";
import React from "react";

export function Noticia({ data }) {
  return (
    <Card
      className="w-full max-w-max shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg"
      imgAlt={data.title}
      imgSrc={data.urlToImage ? data.urlToImage : "https://via.placeholder.com/400x200.png?text=Sin+imagen"}
    >
      <h5 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
        {data.title}
      </h5>

      <p className="text-sm text-gray-500 mb-1">{data.source?.name}</p>

      <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
        {data.description || "Sin descripción disponible."}
      </p>

      <a
        href={data.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline mt-2 inline-block text-sm font-medium"
      >
        Leer más →
      </a>
    </Card>
  );
}
