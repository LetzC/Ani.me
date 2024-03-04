import Catalog from "@/components/Catalog";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section>
        <h3 className={`font-medium text-lg`}>Últimas atualizações</h3>
        <Catalog />
      </section>
    </main>
  );
}
