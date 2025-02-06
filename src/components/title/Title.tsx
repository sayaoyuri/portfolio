import Image from "next/image";
import { disketMonoFont } from "@/constants";

export default function Title() {
  return (
    <section className="w-full h-[calc(100dvh-150px)] relative md:bg-[url(/images/light-point-title-left.svg)] bg-left-bottom lg:bg-left bg-no-repeat">
      <div className="z-10 w-full h-full flex flex-col items-center justify-center gap-10 md:flex-row-reverse lg:gap-28 md:bg-[url(/images/light-point-title-right.svg)] bg-no-repeat bg-right-bottom max-lg:bg-[auto_25%]">
        <Image 
          className="w-3/4 md:w-2/5"
          src='/images/yuri.svg'
          width={0}
          height={0}
          alt='sayaoyuri'
        />
        <div className="flex flex-col items-center md:flex-col-reverse md:items-end">
          <Image
            className="w-3/4 md:w-3/4"
            src='/images/title.svg'
            width={0}
            height={0}
            alt='sayaoyuri title'
          />
          <h1 className={`text-xl sm:text-2xl text-[#0733FF] ${disketMonoFont.className} tracking-[20px] md:tracking-[10px] lg:tracking-[16px]`}>YURISAYAO</h1>
        </div>
      </div>
      <div className="hidden absolute z-20 md:block md:bottom-1/4 2xl:bottom-0">
        <Image
          className="w-full" 
          src='/images/bg.svg'
          width={1920}
          height={0}
          alt=''
        />
      </div>
    </section>
  );
};