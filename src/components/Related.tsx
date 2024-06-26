import animeService from "@/app/services/animeService";
import CardAnime from "./CardAnime";

const Related = ({
  animeGender,
  animeId,
}: {
  animeGender: string;
  animeId: number;
}) => {
  const animesRelatedGenres = animeService.getRelatedGenres(
    animeGender,
    animeId
  );

  // Ordenando do que mais corresponde com o genero recebido por parametro, até o que menos corresponde (que tenha pelo menos 1 desses generos)
  const sortedAnimes = animesRelatedGenres.sort((a, b) => {
    const aGenders = a.gender.split(", ");
    const bGenders = b.gender.split(", ");
    const aMatches = aGenders.filter((gender) => gender === animeGender).length;
    const bMatches = bGenders.filter((gender) => gender === animeGender).length;
    return bMatches - aMatches;
  });

  const relatedAnimes = sortedAnimes.slice(0, 6);

  if (relatedAnimes.length > 0) {
    return (
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-11 md:gap-y-14 ">
        {relatedAnimes.map((relatedAnime) => (
          <div key={relatedAnime.id}>
            <CardAnime anime={relatedAnime} />
          </div>
        ))}
      </section>
    );
  } else {
    return (
      <p className="text-sm text-[#BFBFBF] lg:text-base mt-6">
        Nenhum anime relacionado
      </p>
    );
  }
};

export default Related;
