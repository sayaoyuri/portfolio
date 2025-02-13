import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NavLink ({ item }: { item: string }) {
  const translation = useTranslations('index');
  
  return (
    <Link
      className="hidden lg:block text-3xl hover:text-[#8348F4] hover:text-4xl" 
      href={`#${translation(`nav.${item}`)}`}
    >
      {translation(`nav.${item}`)}
    </Link>
  );
};