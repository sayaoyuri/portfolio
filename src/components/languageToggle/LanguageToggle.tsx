import { languages } from "@/constants";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";

export default function LanguageToggle() {
  const locale  = useLocale(); 

  return (
    <div className="flex w-20 h-10 p-1 bg-[#171717] rounded-full border-l-2 border-r-2 border-[#0733FF]">
      {languages.map((language, i) => (
        <Link
          key={i}
          href='/'
          locale={language}
          aria-disabled={locale === language}
          className="flex justify-center items-center rounded-full w-1/2 h-full bg[#171717] aria-disabled:bg-[#0733FF]"
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};