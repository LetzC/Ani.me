"use client";

import { useRouter } from "next/navigation";
import gojoBg from "../../../public/gojo.png";

const NewEpisodes = () => {
  const router = useRouter();

  return (
    <div className="flex flex-grow flex-col justify-center items-center gap-6">
      <p className="text-center font-medium text-lg md:text-2xl 2xl:text-3xl">
        Não armazenamos os episódios no nosso banco de dados!
      </p>
      <p className="text-center">Site apenas de exemplo :)</p>
      <img
        src={gojoBg.src}
        alt="Satoru Gojo"
        className="w-[80%] xl:w-1/2 opacity-20 absolute bottom-16 self-center z-[-1]"
      />
      <button
        onClick={() => router.back()}
        className="w-52 bg-emphasis hover:bg-[#0E77B4] text-white font-medium py-2 px-6 rounded-full transition-colors"
      >
        Voltar
      </button>
    </div>
  );
};

export default NewEpisodes;
