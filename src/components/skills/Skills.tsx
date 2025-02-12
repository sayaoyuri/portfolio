"use client";
import Image from "next/image";
import { useState } from "react";
import { useMessages } from "next-intl";
import { Messages } from "@/i18n/global";

export default function Skills() {
  const [detailOpen, setDetailOpen] = useState<string>('');

  const messages = useMessages() as unknown as Messages;
  const { skills } = messages.index;

  const handleMouseEnter = (detail: string) => {
    setDetailOpen(detail);
  };

  const handleMouseLeave = () => {
    setDetailOpen('');
  };

  return (
    <section className="w-full h-dvh text-white flex flex-col md:bg-[url(/images/light-point-skills.svg)] bg-center">
      <h1 className="pt-4 md:pt-10 pl-10 text-3xl">_skills</h1>
      <div className="w-full 2xl:w-3/4 mx-auto flex flex-col md:flex-row justify-center items-center md:content-center gap-10 md:gap-5 lg:gap-12 flex-grow md:flex-wrap">
      {
      skills.map((skill, index) => (
        <details 
          className="group w-5/6 md:w-[28%] md:max-w-sm md:h-72 rounded-2xl shadow-skill bg-gradient-to-r from-[#262525] to-[#171717] md:open:scale-105 transition open:bg-gradient-to-b open:from-[#5505AB] open:to-[#220245]" 
          name="skills"
          key={index}
          open={detailOpen === skill.stack} 
          onMouseEnter={() => handleMouseEnter(skill.stack)} 
          onMouseLeave={handleMouseLeave} 
        >
          <summary className="h-20 md:h-full p-5 md:group-open:hidden flex justify-between md:justify-center items-center text-2xl list-none">
            {skill.stack}
            <span className="md:hidden group-open:hidden">
              <Image src="/images/skill-marker.svg" width={38} height={20} alt=""/>
            </span>
            <span className="hidden group-open:block md:hidden">
              <Image className="rotate-180" src="/images/skill-marker-open.svg" width={38} height={20} alt=""/>
            </span>
          </summary> 
          <ul className="md:h-72 pl-10 pr-5 pb-5 md:p-0 text-2xl md:text-xl lg:text-2xl md:text-center md:flex md:flex-col md:justify-center md:items-center">
            {skill.technologies.map((tech, i) => <li key={i}>{tech}</li>)}
          </ul>
        </details>
        ))
      }
      </div>
    </section>
  );
};