"use client";

import { useMediaQuery } from "react-responsive";
import database from "../../database-animes.json";
import CardAnime from "./CardAnime";
import { useEffect, useState } from "react";
import Button from "./Button";

const Catalog = ({ getNew = false }: { getNew?: boolean }) => {
  const [isClient, setIsClient] = useState(false);
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });
  const [visibleAnimes, setVisibleAnimes] = useState(isSmall ? 4 : 12);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredAnimesDatabase = database.filter((anime) =>
    getNew ? anime.isNew : !anime.isNew
  );

  if (!isClient) {
    return null;
  }

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-11 md:gap-y-14">
      {filteredAnimesDatabase.slice(0, visibleAnimes).map((anime) => (
        <div key={anime.id}>
          <CardAnime anime={anime} />
        </div>
      ))}
      {filteredAnimesDatabase.length > 4 &&
        visibleAnimes < filteredAnimesDatabase.length && (
          <Button
            onClickFunction={() =>
              setVisibleAnimes(filteredAnimesDatabase.length)
            }
            fullWidth={false}
          >
            Ver mais
          </Button>
        )}
    </section>
  );
};

export default Catalog;
