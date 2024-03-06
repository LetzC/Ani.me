import Catalog from "@/components/Catalog";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <h3
          className={`font-medium text-lg mb-8 
        md:text-2xl 2xl:text-3xl md:mb-10`}
        >
          Últimas atualizações
        </h3>
        <Catalog />
      </section>
    </main>
  );
}
