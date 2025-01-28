import "./globals.css";
import type { Metadata } from "next";
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from "next-intl";
import { firaCodeFont } from "@/constants";

export const metadata: Metadata = {
  title: "sayaoyuri portfolio",
  description: "sayaoyuri portfolio",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string }
}>) {
  const { locale } = await params;

  setRequestLocale(locale);

  const translations = await getMessages();

  return (
    <html lang={locale}>
      <body className={`antialiased ${firaCodeFont.className}`}>
        <NextIntlClientProvider messages={translations}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
