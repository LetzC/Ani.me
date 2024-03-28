import { AnimeInterface } from "@/app/services/animeService";

const strongStyle = "text-white mr-2";

const pStyle = "text-sm text-light-gray lg:text-base";

const divStyle = "flex flex-col gap-2";

interface props {
  anime: AnimeInterface;
}

const AnimeInformation = ({ anime }: props) => {
  return (
    <section className="flex items-center gap-x-10 max-h-72">
      <div
        className="hidden h-72 md:block min-w-64 rounded-lg"
        style={{
          backgroundImage: `url(${anime.urlImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      ></div>

      <div>
        <div className={`${divStyle}`}>
          <p className={pStyle}>
            <strong className={strongStyle}>Estúdio:</strong>
            {anime.studio}
          </p>
          <p className={pStyle}>
            <strong className={strongStyle}>Gênero:</strong>
            {anime.gender}
          </p>
        </div>

        <p className={`${pStyle} ${divStyle} mt-8 2xl:mt-12`}>
          <strong className={strongStyle}>Sinopse:</strong>
          {anime.synopsis}
        </p>
      </div>
    </section>
  );
};

export default AnimeInformation;
