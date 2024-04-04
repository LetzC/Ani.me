"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavLinks from "./NavLinks";

const iconStyle = "min-h-6 min-w-6";

const MenuBurger = () => {
  const [status, setStatus] = useState(false);

  const closeMenu = () => {
    setStatus(false);
  };

  return (
    <>
      {status ? (
        <>
          <NavLinks isMobile={true} closeMenu={closeMenu} />
          <FiX onClick={() => setStatus(false)} className={iconStyle} />
        </>
      ) : (
        <FiMenu onClick={() => setStatus(true)} className={iconStyle} />
      )}
    </>
  );
};

export default MenuBurger;
