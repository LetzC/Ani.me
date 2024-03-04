"use client";

import database from "../../database.json";
import CardAnime from "./CardAnime";
import { useState } from "react";

const Catalog = () => {
  const [visibleAnimes, setVisibleAnimes] = useState(4);

  return (
    <section className="grid grid-cols-2 gap-y-7">
      {database.slice(0, visibleAnimes).map((anime) => (
        <CardAnime key={anime.id} anime={anime} />
      ))}
      {database.length > 4 && visibleAnimes < database.length && (
        <button
          onClick={() => setVisibleAnimes(database.length)}
          className="bg-gray-900 py-2 w-48 col-span-2 mx-auto my-8 rounded"
        >
          Ver Mais
        </button>
      )}
    </section>
  );
};

export default Catalog;
