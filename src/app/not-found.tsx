"use client";

import Image from "next/image";

import errorImage from "../../public/pageNotFound.svg";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <article className="flex flex-grow flex-col justify-center items-center">
      <Image
        alt="404"
        src={errorImage}
        className="w-full max-w-md 3xl:max-w-xl"
      />
      <h1 className="font-medium text-lg mb-8 md:text-2xl 2xl:text-3xl md:mb-10">
        Nada encontrado!
      </h1>

      <button
        onClick={() => router.back()}
        className="bg-emphasis hover:bg-[#0E77B4] text-white font-medium py-2 px-6 rounded-full transition-colors"
      >
        Voltar
      </button>
    </article>
  );
};

export default NotFound;
