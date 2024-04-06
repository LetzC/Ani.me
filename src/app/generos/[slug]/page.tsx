import animeService from "@/app/services/animeService";
import CardAnime from "@/components/CardAnime";

interface Props {
  params: { slug: string };
}

const GenderPage = ({ params }: Props) => {
  const gender = params.slug;

  const formattedGender = decodeURIComponent(gender.replace(/-/g, " "));

  const animesRelatedGender = animeService.getAnimesByGender(formattedGender);

  if (animesRelatedGender.length > 0) {
    return (
      <div>
        <h3 className="text-center font-medium text-lg mt-8 2xl:text-2xl md:mt-10">
          Você filtrou por:{" "}
          <span className="opacity-70">{formattedGender}</span>
        </h3>
        <div className="h-px w-full bg-dark-bluish-gray my-12 xl:my-16"></div>
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-11 md:gap-y-14">
          {animesRelatedGender.map((anime) => (
            <div key={anime.id}>
              <CardAnime anime={anime} />
            </div>
          ))}
        </article>
      </div>
    );
  }
};

export default GenderPage;
