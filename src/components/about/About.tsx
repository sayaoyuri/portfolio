import Image from "next/image";
import { useTranslations } from "next-intl";
import { disketMonoFont } from "@/constants";

export default function About () {
  const translation = useTranslations('index');

  return (
    <section id="about" className="w-full h-dvh text-white md:bg-[url(/images/light-point-about-right.svg)] bg-no-repeat bg-right-top max-lg:bg-[auto_13.5%]">
      <h1 className="pt-4 md:pt-10 pl-10 text-3xl">_{translation('about.title')}</h1>
      <div className="w-full h-5/6 relative md:static flex flex-col md:flex-row-reverse items-center md:justify-between pt-20 md:bg-[url(/images/light-point-about-left.svg)] max-lg:bg-[auto_50%] bg-left bg-no-repeat">
        <figure className="absolute md:static md:w-1/2 flex flex-col gap-6 items-center">
          <Image 
            className="w-1/2 md:w-1/2 m-auto md:m-0"
            src='/images/logo.svg'
            width={0}
            height={0}
            alt="sayaoyuri logo"
          />
          <figcaption className={`hidden md:block text-center text-lg lg:text-2xl xl:text-4xl tracking-[12px] lg:tracking-[25px] text-[#0733FF] ${disketMonoFont.className}`}>
            YURISAYAO
          </figcaption>
        </figure>
        <p 
          className="md:flex justify-center items-center w-10/12 md:w-2/3 lg:w-1/2 h-full md:h-1/2 mt-28 min-[430px]:mt-36 min-[500px]:mt-44 md:mt-0 pt-24 md:pt-0 pl-5 md:pl-10 pr-5 md:pr-10 pb-8 md:pb-0 text-md sm:text-lg md:text-sm lg:text-xl text-center md:text-left bg-[#5505AB33] border-b-4 border-r border-[#8348F4] md:border-r-0 md:rounded-r-[100px]"
        >
          {translation('about.paragraph')}
        </p>
      </div>
    </section>
  );
};