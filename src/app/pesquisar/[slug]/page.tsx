import Image from "next/image";
import gojoSad from "../../../../public/gojo-sad.png";

import animeService from "@/app/services/animeService";
import CardAnime from "@/components/CardAnime";

interface Props {
  params: { slug: string };
}

const SearchPage = ({ params }: Props) => {
  const search = params.slug;

  const filteredSearch = animeService.getRelatedAnimesSearch(search);

  const formattedSearch = search.replace(/-/g, " ");

  if (filteredSearch.length > 0) {
    return (
      <div>
        <h3 className="text-center font-medium text-lg mt-8 2xl:text-2xl md:mt-10">
          Você pesquisou por:{" "}
          <span className="opacity-70">{formattedSearch}</span>
        </h3>
        <div className="h-px w-full bg-dark-bluish-gray my-12 xl:my-16"></div>
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-11 md:gap-y-14">
          {filteredSearch.map((anime) => (
            <div key={anime.id}>
              <CardAnime anime={anime} />
            </div>
          ))}
        </article>
      </div>
    );
  } else {
    return (
      <section className="flex flex-col flex-grow text-center justify-center items-center gap-4">
        <Image
          src={gojoSad.src}
          alt="Satoru Gojo triste"
          width={250}
          height={400}
          className="-mt-8"
        />
        <p>Não pudemos encontrar resultados.</p>
        <p>Confira a grafia ou tente procurar por outros termos.</p>
      </section>
    );
  }
};

export default SearchPage;
