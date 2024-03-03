"use client";

import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import MenuBurger from "./MenuBurger";

const linkStyle = "hover:text-blue-500 transition-colors";

const Nav = () => {
  const isBurger = useMediaQuery({ query: "(max-width: 1024px)" });

  if (isBurger) {
    return <MenuBurger />;
  } else {
    return (
      <nav className="flex items-center gap-20">
        <Link href="/" className={linkStyle}>
          Início
        </Link>
        <Link href="/list" className={linkStyle}>
          Lista
        </Link>
        <Link href="/genres" className={linkStyle}>
          Gêneros
        </Link>
        <Link href="/" className={linkStyle}>
          Novos episódios
        </Link>
        <input
          type="search"
          id="search"
          placeholder="Buscar"
          className="bg-[#151B26] rounded-3xl py-2 px-6 max-w-72 outline-none"
        />
      </nav>
    );
  }
};

export default Nav;
