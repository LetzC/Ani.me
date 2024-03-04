import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "500",
});

interface Anime {
  id: number;
  title: string;
  urlImage: string;
  episodes: number;
}

const CardAnime = ({ anime }: { anime: Anime }) => {
  return (
    <div className="flex flex-col relative items-center gap-4 mt-6">
      <div
        className="rounded-xl z-[-2]"
        style={{
          backgroundImage: `url(${anime.urlImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "154px",
          height: "200px",
          boxShadow: "rgba(0, 0, 0, 1) 0px -82px 76px -32px inset",
        }}
      ></div>

      <p
        className={`${inter.className} text-gray-400 text-xs absolute bottom-12`}
      >{`Episódio ${anime.episodes}`}</p>

      <p className="text-sm">{anime.title}</p>
    </div>
  );
};

export default CardAnime;
