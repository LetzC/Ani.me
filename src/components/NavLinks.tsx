"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const linkStyle = "hover:text-emphasis transition-colors";

interface Props {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavLinks = ({ isMobile = false, closeMenu }: Props) => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [search, setSearch] = useState("");

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
            <Link href="/generos" onClick={closeMenu} className={linkStyle}>
              Gêneros
            </Link>
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

          <li className={linkStyle}>
            <a href="#">Gêneros</a>
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
