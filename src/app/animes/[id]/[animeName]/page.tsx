import database from "../../../../../database-animes.json";
import Image from "next/image";

import episodeThumb from "../../../../../public/thumbEpisodes.jpg";
import AnimeInformation from "@/components/animeInfomation";

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
            <div className="w-full max-w-4xl mb-6 md:mb-14 2xl:mb-24">
              <h2 className="font-medium text-lg mb-6 md:text-2xl 2xl:text-3xl 3xl:mb-8">
                {anime.title} - Episódio 1
              </h2>
              <Image src={episodeThumb} alt={anime.title} />
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
