import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useLocation } from "react-router-dom";

import logo from "../assets/10290596.png"
export function BarraNavegacion() {
  const location = useLocation();
  return (
<Navbar fluid rounded>
  <NavbarBrand href="/">
    <img src={logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Noticias
    </span>
  </NavbarBrand>
  <NavbarToggle />
  <NavbarCollapse>
    <NavbarLink href="/" active={location.pathname === "/"}>
      Inicio
    </NavbarLink>
    <NavbarLink href="/astronomia" active={location.pathname === "/astronomia"}>
      Astronomía
    </NavbarLink>
    <NavbarLink href="/noticiasGenerales" active={location.pathname === "/noticiasGenerales"}>
      Noticias Generales
    </NavbarLink>
    <NavbarLink href="/clima" active={location.pathname === "/clima"}>
      Clima
    </NavbarLink>
  </NavbarCollapse>
</Navbar>
  );
}