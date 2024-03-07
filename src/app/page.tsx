import Catalog from "@/components/Catalog";
import Image from "next/image";

const titleStyle = "font-medium text-lg mb-8 md:text-2xl 2xl:text-3xl md:mb-10";

export default function Home() {
  return (
    <main>
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
