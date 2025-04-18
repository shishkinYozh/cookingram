import { Lily_Script_One } from "next/font/google";
import Link from "next/link";
import NavMenu from "./nav-menu";

const lilyFont = Lily_Script_One({subsets:['latin'], weight:['400']});

const Header = () => (
  <nav className="py-4 px-8 flex items-baseline relative">
    <h1 className={`${lilyFont.className} antialiased text-3xl font-extrabold pr-16`}><Link href="/">Cookingram</Link></h1>
      <NavMenu />
  </nav>
);

export default Header;