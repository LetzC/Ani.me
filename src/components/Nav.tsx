"use client";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import MenuBurger from "./MenuBurger";
import { useEffect, useState } from "react";
import animeDatabase from "../../database-animes.json";
import { useRouter } from "next/navigation";

const linkStyle = "hover:text-emphasis transition-colors";

const Nav = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [search, setSearch] = useState("");
  const isBurger = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const formattedSearch = search
          .replace(/\s+/g, "-") // Substitui espaços por hífens
          .replace(/[^a-zA-Z0-9-]/g, ""); // Remove caracteres especiais, exceto hífens
        router.push(`/pesquisar/${formattedSearch}`);
        setSearch("");
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [router, search]);

  if (isClient && isBurger) {
    return <MenuBurger />;
  } else {
    return (
      <nav className="flex items-center gap-20">
        <Link href="/" className={linkStyle}>
          Início
        </Link>
        <Link href="/lista" className={linkStyle}>
          Lista
        </Link>
        <Link href="/generos" className={linkStyle}>
          Gêneros
        </Link>
        <Link href="/novos-episodios" className={linkStyle}>
          Novos episódios
        </Link>
        <input
          type="search"
          id="search"
          placeholder="Buscar"
          className="bg-dark-bluish-gray rounded-3xl py-2 px-6 max-w-72 outline-none"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        {search.length > 0}
      </nav>
    );
  }
};

export default Nav;
