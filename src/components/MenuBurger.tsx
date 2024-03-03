"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const iconStyle = "min-h-6 min-w-6";

const MenuBurger = () => {
  const [status, setStatus] = useState(false);

  return (
    <>
      {status ? (
        <>
          <nav className="w-full flex flex-col text-center gap-4 py-4 md:py-6 absolute left-0 top-20 bg-slate-900 ">
            <Link href="/">Início</Link>
            <Link href="/list">Lista</Link>
            <Link href="/genres">Gêneros</Link>
            <Link href="/">Novos episódios</Link>
          </nav>
          <FiX onClick={() => setStatus(false)} className={iconStyle} />
        </>
      ) : (
        <FiMenu onClick={() => setStatus(true)} className={iconStyle} />
      )}
    </>
  );
};

export default MenuBurger;
