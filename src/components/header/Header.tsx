import Image from "next/image";
import NavLink from "../nav/NavLink";
import ContactBtn from "../nav/ContactBtn";
import LanguageToggle from "../languageToggle/LanguageToggle";

export default function Header() {
  return (
    <header className="w-full pt-6 pr-9 lg:pr-20 pl-7 flex justify-between">
      <Image className="w-28 md:w-36"
        src="/images/logo.svg"
        alt="sayaoyuri logo"
        width={0}
        height={0}
        />
      <nav className="pt-6 flex gap-7 text-white">
        <NavLink item="about" />
        <NavLink item="services" />
        <NavLink item="portfolio" />
        <ContactBtn />
        <LanguageToggle />
      </nav>
    </header>
  );
};