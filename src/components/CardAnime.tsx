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
    <div className="flex flex-col relative items-center mx-auto">
      <div
        className="h-52 md:min-h-52 2xl:min-h-60 3xl:h-64
                  w-full sm:min-w-40
                  rounded-xl z-[-2]
                  "
        style={{
          backgroundImage: `url(${anime.urlImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "rgba(0, 0, 0, 1) 0px -82px 76px -32px inset",
        }}
      ></div>

      <p
        className={`${inter.className} text-gray-400 text-xs relative bottom-8 2xl:text-sm`}
      >{`Episódio ${anime.episodes}`}</p>

      <p className="text-sm 2xl:text-lg">{anime.title}</p>
    </div>
  );
};

export default CardAnime;
