import database from "../../../../../database-animes.json";
import Image from "next/image";

import episodeThumb from "../../../../../public/thumbEpisodes.jpg";
import AnimeInformation from "@/components/AnimeInfomation";
import Recommended from "@/components/Recommended";

interface Props {
  params: { animeName: string; id: number };
}

export default function animeDetails({ params }: Props) {
  const animeIdParam = params.id;

  const anime = database.find((anime) => anime.id === Number(animeIdParam));

  if (anime) {
    return (
      <>
        <article>
          <div className="flex flex-col">
            <div className="flex gap-6 mb-6 md:mb-14 2xl:mb-24">
              <section className="w-full">
                <h2 className="font-medium text-lg mb-6 md:text-2xl 2xl:text-3xl 3xl:mb-8">
                  {anime.title} - Episódio 1
                </h2>
                <Image
                  src={episodeThumb}
                  alt={anime.title}
                  className="w-full"
                />
              </section>

              <div className="min-w-80 max-w-80 hidden flex-col 3xl:flex">
                <h3 className="text-xl mb-8">Recomendados</h3>

                <div className="h-full grid grid-rows-4 gap-y-4">
                  <Recommended animeId={animeIdParam} />
                </div>
              </div>
            </div>

            <AnimeInformation anime={anime} />
          </div>
        </article>

        <section>
          <div></div>
        </section>
      </>
    );
  }
}
