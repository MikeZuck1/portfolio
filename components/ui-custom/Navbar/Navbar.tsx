"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#121826] shadow-md fixed w-full z-50 mt-[1rem] rounded-4xl border-2 border-solid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="text-2xl font-bold text-white">
          Logo
        </Link>

        <div className="hidden md:flex space-x-6">
          <NavLink href="/components/ui-custom/Home/Home.tsx">Accueil</NavLink>
          <NavLink href="/components/ui-custom/Skills/Skills.tsx">
            Expérieces
          </NavLink>
          <NavLink href="/components/ui-custom/Contact/Contact.tsx">
            Contact
          </NavLink>
        </div>

        <button
          className="md:hidden text-[#fff]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#121826] shadow-md absolute top-16 left-0 w-full py-4">
          <div className="flex flex-col items-center space-y-4">
            <NavLink href="/components/ui-custom/Home/Home.tsx">
              Accueil
            </NavLink>
            <NavLink href="/components/ui-custom/Skills/Skills.tsx">
              Expérieces
            </NavLink>
            <NavLink href="/components/ui-custom/Contact/Contact.tsx">
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="text-[#fff] transition">
      {children}
    </Link>
  );
};
