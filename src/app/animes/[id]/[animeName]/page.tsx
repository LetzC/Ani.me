import database from "../../../../../database-animes.json";
import Image from "next/image";

import episodeThumb from "../../../../../public/thumbEpisodes.jpg";
import AnimeInformation from "@/components/AnimeInfomation";
import Recommended from "@/components/Recommended";
import Comments from "@/components/CommentsContainer";
import Related from "@/components/Related";

const h3Style = "mt-12 2xl:mt-12 font-medium text-lg md:text-xl 2xl:text-3xl";

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
                <h5 className="text-xl mb-8">Recomendados</h5>

                <div className="h-full grid grid-rows-4 gap-y-4">
                  <Recommended animeId={animeIdParam} />
                </div>
              </div>
            </div>

            <AnimeInformation anime={anime} />
          </div>
        </article>

        <section>
          <h3 className={h3Style}>Comentários</h3>

          <div className="mt-10">
            <Comments animeId={anime.id} />
          </div>
        </section>

        <div className="w-full h-px bg-dark-bluish-gray my-12 2xl:my-14"></div>

        <section>
          <h3 className={`${h3Style} mb-10`}>Relacionados</h3>

          <Related animeGender={anime.gender} />
        </section>
      </>
    );
  }
}
