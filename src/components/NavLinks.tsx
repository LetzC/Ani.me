"use client";

import animeService from "@/app/services/animeService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const linkStyle = "hover:text-emphasis transition-colors cursor-pointer";

interface Props {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavLinks = ({ isMobile = false, closeMenu }: Props) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [search, setSearch] = useState("");
  const [dropDown, setDropDown] = useState(false);

  const genres = animeService.getUniqueGenres();

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
        if (closeMenu) {
          closeMenu();
        }
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [router, search]); // closeMenu foi omitido intencionalmente

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target) {
        const target = event.target as HTMLElement;
        if (dropDown && !target.closest(".dropdown-container")) {
          setDropDown(false);
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropDown]);

  if (isClient && isMobile) {
    return (
      <nav className="w-full flex flex-col items-center gap-6 absolute text-center p-5 md:p-6 md:px-24 left-0 top-16 bg-dark-bluish-gray z-50">
        <ul className="flex flex-col gap-6">
          <li>
            <Link href="/" onClick={closeMenu} className={linkStyle}>
              Início
            </Link>
          </li>

          <li>
            <Link href="/lista" onClick={closeMenu} className={linkStyle}>
              Lista
            </Link>
          </li>

          <li>
            <a
              onClick={() => setDropDown(!dropDown)}
              className={dropDown ? linkStyle + " text-emphasis" : linkStyle}
            >
              Gêneros
            </a>
            <ul
              className={`${
                dropDown
                  ? "grid gap-6 w-full right-0 mt-2 py-3 px-12 bg-dark-bluish-gray text-light-gray rounded z-40"
                  : "hidden"
              }`}
            >
              {genres.length > 0 &&
                genres.map((genre, index) => (
                  <li key={index}>
                    <Link
                      href={`/generos/${genre
                        .replace(/\s+/g, "-") // Substituindo o espaço das palavras por -
                        .toLowerCase()}`} // Transformando texto em minúsculo
                      className={linkStyle}
                    >
                      {genre}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>

          <li>
            <Link
              href="/novos-episodios"
              onClick={closeMenu}
              className={linkStyle}
            >
              Novos episódios
            </Link>
          </li>
        </ul>

        <input
          type="search"
          id="search"
          placeholder="Buscar"
          className="border border-white border-opacity-10 bg-dark-bluish-gray rounded-3xl py-2 px-6 w-full outline-none"
          value={search}
          autoComplete="off"
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </nav>
    );
  } else {
    return (
      <nav className="flex gap-20">
        <ul className="flex items-center gap-20">
          <li>
            <Link href="/" className={linkStyle}>
              Início
            </Link>
          </li>

          <li>
            <Link href="/lista" className={linkStyle}>
              Lista
            </Link>
          </li>

          <li>
            <a
              onClick={() => setDropDown(!dropDown)}
              className={dropDown ? linkStyle + " text-emphasis" : linkStyle}
            >
              Gêneros
            </a>
            <ul
              className={`${
                dropDown
                  ? "grid grid-cols-2 gap-6 absolute mt-2 py-8 px-12 bg-dark-bluish-gray list-disc text-light-gray rounded z-40"
                  : "hidden"
              }`}
            >
              {genres.length > 0 &&
                genres.map((genre, index) => (
                  <li key={index}>
                    <Link
                      href={`/generos/${genre
                        .replace(/\s+/g, "-") // Substituindo o espaço das palavras por -
                        .toLowerCase()}`} // Transformando texto em minúsculo
                      className={linkStyle}
                    >
                      {genre}
                    </Link>
                  </li>
                ))}
            </ul>
          </li>

          <li>
            <Link href="/novos-episodios" className={linkStyle}>
              Novos episódios
            </Link>
          </li>
        </ul>

        <input
          type="search"
          id="search"
          placeholder="Buscar"
          className="bg-dark-bluish-gray rounded-3xl py-2 px-6 max-w-72 outline-none"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
      </nav>
    );
  }
};

export default NavLinks;
