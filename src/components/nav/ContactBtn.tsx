import { useTranslations } from "next-intl";

export default function ContactBtn () {
  const translation = useTranslations("index.nav");
  
  return (
    <button
      className="hidden lg:flex justify-center items-center rounded-full w-48 h-10 text-black text-3xl bg-gradient-to-r from-[#0733FF] to-[#5505AB] hover:text-white"
    >
      {translation("contact")}
    </button>
  );
};