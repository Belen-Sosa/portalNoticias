import { Card } from "flowbite-react";

export function ImgNasa({ image }) {
 
  return (
    <Card
      className="max-w-sm transition-transform hover:scale-[1.02] hover:shadow-lg"
      renderImage={() => (
        <img
          width={400}
          height={400}
          src={image.links?.[0]?.href}
          alt={image.data?.[0]?.title || "Imagen de NASA"}
        />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {image.data?.[0]?.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {image.data?.[0]?.description_508 || "sin descripcion"}
      </p>
    </Card>
  );
}
