import animeDatabase from "../../../database-animes.json";
import CardAnime from "@/components/CardAnime";
import NotFound from "../not-found";

const titleStyle =
  "font-medium mt-8 text-lg mb-10 md:mt-2 md:text-2xl 2xl:text-3xl md:mb-14";

const List = () => {
  if (animeDatabase.length > 0) {
    return (
      <>
        <h1 className={titleStyle}>Todos os animes do nosso catálogo</h1>
        <article className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-11 md:gap-y-14">
          {animeDatabase.map((anime) => (
            <div key={anime.id}>
              <CardAnime anime={anime} />
            </div>
          ))}
        </article>
      </>
    );
  } else {
    return <NotFound />;
  }
};

export default List;
