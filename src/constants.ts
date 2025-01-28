import localFont from "next/font/local";

export const disketMonoFont = localFont({ src: '../public/fonts/Disket-Mono-Bold.ttf' });
export const firaCodeFont = localFont({ src: '../public/fonts/Fira-Code-Regular.ttf' });

export enum Languages {
  pt = "pt",
  en = "en",
};

export const languages: Languages[] = [Languages.pt, Languages.en];