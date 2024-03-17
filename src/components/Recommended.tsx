import Image from "next/image";
import databaseAnime from "../../database-animes.json";
import Link from "next/link";

const Recommended = ({ animeId }: { animeId: Number }) => {
  // Removendo o animeId do database e embaralhando o database
  const filteredDatabase = databaseAnime
    .filter((anime) => anime.id !== animeId)
    .sort(() => Math.random() - 0.5);

  const randomAnimes = filteredDatabase.slice(0, 4);

  if (randomAnimes) {
    return randomAnimes.map((anime) => (
      <Link
        href={`/animes/${anime.id}/${anime.title
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
        key={anime.id}
        className="bg-[#151B26] flex items-center h-full"
      >
        <div
          className="min-w-28 h-full"
          style={{
            backgroundImage: `url(${anime.urlImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="p-4">
          <h5 className="font-medium text-lg">{anime.title}</h5>
          <p className="mt-3 text-[#BFBFBF]">{anime.releaseDate}</p>
        </div>
      </Link>
    ));
  } else {
    return (
      <h1 className="text-center text-[#BFBFBF]">Nenhum anime recomendado</h1>
    );
  }
};

export default Recommended;
