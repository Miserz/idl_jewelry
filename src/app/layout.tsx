import type { Metadata } from "next"
import { Roboto } from "next/font/google";
import "./globals.css"
import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared"
import { cn } from "@/lib/utils"

const robotoFont = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "IDL.JEWELRY | Главная",
  description: "IDL.JEWELRY — украшения ручной работы. Коллекция ювелирной бижутерии, которая дополнит ваш образ и вызовет восхищение окружающих. Найдите идеальное украшение для себя или вдохновитесь идеями подарков для подруги, сестры или мамы.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn("min-h-screen", `${robotoFont.className}`)}>
        <Header />
        <main className="flex flex-col gap-40">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
