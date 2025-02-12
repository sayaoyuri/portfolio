import { useTranslations } from "next-intl";

export default function Footer() {
  const translation = useTranslations('index');

  return (
    <footer className="h-14 md:h-18 lg:h-22 flex justify-center items-center text-sm md:text-2xl bg-[#5505AB]">{translation('footer.paragraph')}</footer>
  );
}