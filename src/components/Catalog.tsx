"use client";

import { useMediaQuery } from "react-responsive";
import database from "../../database.json";
import CardAnime from "./CardAnime";
import { useState } from "react";

const Catalog = ({ getNew = false }: { getNew?: boolean }) => {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const [visibleAnimes, setVisibleAnimes] = useState(isSmall ? 4 : 12);

  const filteredAnimesDatabse = database.filter((anime) =>
    getNew ? anime.isNew : !anime.isNew
  );

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-11 md:gap-y-14">
      {filteredAnimesDatabse.slice(0, visibleAnimes).map((anime) => (
        <div
          key={anime.id}
          className="col-span-1 w-full max-w-48 hover:scale-110 transition-transform cursor-pointer mx-auto"
        >
          <CardAnime anime={anime} />
        </div>
      ))}
      {filteredAnimesDatabse.length > 4 &&
        visibleAnimes < filteredAnimesDatabse.length && (
          <button
            onClick={() => setVisibleAnimes(filteredAnimesDatabse.length)}
            className="bg-gray-900 py-2 w-48 col-span-full mx-auto mb-8 rounded"
          >
            Ver Mais
          </button>
        )}
    </section>
  );
};

export default Catalog;
