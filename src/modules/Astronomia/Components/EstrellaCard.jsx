import React from "react";

import { Card } from "flowbite-react";
const EstrellaCard = ({star}) => {
  return (


<Card
className="w-full rounded-md"
renderImage={() => (
  <img
    width={1000}
    height={400}
className="rounded-md"
    src={star.thumbnail?.source}
    alt={star.titles.normalized || "Imagen de estrella"}
  />
)}
>
<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
  {star.titles.normalized}
</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">
{star.extract}</p>
</Card>
  );
};

export default EstrellaCard;
