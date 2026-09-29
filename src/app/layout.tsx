import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import { LocaleProvider } from "@/components/locale-provider";
import { getContent } from "@/lib/content";
import { getLocale } from "@/lib/locale";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const c = getContent(await getLocale());
  return { title: c.siteTitle, description: c.description };
}

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const locale = await getLocale();
  return (
    <html lang={locale} className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <LocaleProvider locale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
