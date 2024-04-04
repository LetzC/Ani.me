"use client";

import { useMediaQuery } from "react-responsive";
import MenuBurger from "./MenuBurger";
import { useEffect, useState } from "react";

import NavLinks from "./NavLinks";

const NavContainer = () => {
  const [isClient, setIsClient] = useState(false);

  const isBurger = useMediaQuery({ query: "(max-width: 1024px)" });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient && isBurger) {
    return <MenuBurger />;
  } else {
    return <NavLinks />;
  }
};

export default NavContainer;
