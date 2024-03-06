"use client";

import { useMediaQuery } from "react-responsive";
import database from "../../database.json";
import CardAnime from "./CardAnime";
import { useState } from "react";

const Catalog = () => {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const [visibleAnimes, setVisibleAnimes] = useState(isSmall ? 4 : 12);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-11 md:gap-y-12">
      {database.slice(0, visibleAnimes).map((anime) => (
        <div
          key={anime.id}
          className="col-span-1 w-full max-w-48 hover:scale-110 transition-transform cursor-pointer mx-auto"
        >
          <CardAnime anime={anime} />
        </div>
      ))}
      {database.length > 4 && visibleAnimes < database.length && (
        <button
          onClick={() => setVisibleAnimes(database.length)}
          className="bg-gray-900 py-2 w-48 col-span-full mx-auto mb-8 rounded"
        >
          Ver Mais
        </button>
      )}
    </section>
  );
};

export default Catalog;
