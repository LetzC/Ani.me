import CarouselAnimes from "@/components/CarouselAnimes";
import Catalog from "@/components/Catalog";
import FilterNavigation from "@/components/filterNavigation";

const titleStyle = "font-medium text-lg mb-8 md:text-2xl 2xl:text-3xl md:mb-10";

export default function Home() {
  return (
    <main>
      <FilterNavigation />

      <section className="mb-16 mt-12 md:mb-14 2xl:mb-16">
        <h2 className="text-2xl 2xl:text-4xl">Últimas novidades</h2>
        <p className="text-gray-300 text-sm mt-2 2xl:text-lg">
          O que você vai assistir hoje?
        </p>
        <CarouselAnimes />
      </section>

      <section>
        <h3 className={titleStyle}>Últimas atualizações</h3>
        <Catalog />
      </section>

      <div className="h-px w-full bg-[#151B26] my-12 xl:my-16"></div>

      <section>
        <h3 className={titleStyle}>Animes recentes</h3>
        <Catalog getNew={true} />
      </section>
    </main>
  );
}
