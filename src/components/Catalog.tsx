"use client";

import { useMediaQuery } from "react-responsive";
import database from "../../database.json";
import CardAnime from "./CardAnime";
import { useState } from "react";
import Button from "./Button";

const Catalog = ({ getNew = false }: { getNew?: boolean }) => {
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const [visibleAnimes, setVisibleAnimes] = useState(isSmall ? 4 : 12);

  const filteredAnimesDatabase = database.filter((anime) =>
    getNew ? anime.isNew : !anime.isNew && anime.type !== "news"
  );

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-11 md:gap-y-14">
      {filteredAnimesDatabase.slice(0, visibleAnimes).map((anime) => (
        <div
          key={anime.id}
          className="col-span-1 w-full max-w-48 hover:scale-110 transition-transform cursor-pointer mx-auto"
        >
          <CardAnime anime={anime} />
        </div>
      ))}
      {filteredAnimesDatabase.length > 4 &&
        visibleAnimes < filteredAnimesDatabase.length && (
          <Button
            onClickFunction={() =>
              setVisibleAnimes(filteredAnimesDatabase.length)
            }
          >
            Ver mais
          </Button>
        )}
    </section>
  );
};

export default Catalog;
