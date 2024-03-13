"use client";

import database from "../../database-news.json";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const CarouselAnimes = () => {
  return (
    <Carousel
      autoPlay
      emulateTouch
      infiniteLoop
      interval={5000}
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      className="my-10"
    >
      {database.map((animeNew, index) => (
        <div
          key={`slide${index + 1}`}
          className="flex flex-col relative gap-y-2 xl:gap-y-4 place-content-center sm:place-content-end h-[192px] sm:h-80 2xl:h-96 px-4 py-10 md:px-7 2xl:px-8"
        >
          {animeNew.urlCover && (
            <>
              <div
                className="w-full h-full absolute z-[1] top-0 left-0"
                style={{
                  background:
                    "linear-gradient(270deg, rgba(6, 9, 15, 0.32) 0%, rgba(6, 9, 15, 0.9) 100%)",
                }}
              ></div>
              <Image
                src={animeNew.urlCover}
                alt={`slide${index + 1}`}
                fill
                priority
                style={{
                  objectFit: "cover",
                  objectPosition: `center ${
                    index + 1 === 1 || index + 1 === 4 ? "80%" : ""
                  }`,
                }}
                className="rounded-lg"
              />
              <p className="relative md:max-w-[65%] uppercase text-white font-medium text-sm md:text-2xl 3xl:text-4xl text-left z-10">
                {animeNew.title}
              </p>
              <p className="relative md:max-w-[50%] text-gray-300 text-xs md:text-sm 2xl:text-lg text-left z-10">
                {animeNew.description}
              </p>
            </>
          )}
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselAnimes;
