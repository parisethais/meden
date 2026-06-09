import type { Metadata } from "next";
import { Archivo, DM_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedEn · A parceira digital que o médico nunca teve",
  description:
    "Tecnologia, inteligência artificial e serviço humano numa plataforma única para médicos de consultório particular e clínicas. Menos gestão. Mais medicina.",
  keywords: [
    "MedEn",
    "gestão de consultório",
    "prontuário eletrônico",
    "secretária médica",
    "IA médica",
    "portal do paciente",
  ],
  authors: [{ name: "MedEn" }],
  openGraph: {
    title: "MedEn · A parceira digital que o médico nunca teve",
    description: "Menos gestão. Mais medicina.",
    type: "website",
    locale: "pt_BR",
    siteName: "MedEn",
  },
  icons: {
    icon: "/brand/dE-on-paper.svg",
    apple: "/brand/dE-on-indigo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${dmMono.variable} ${sourceSerif.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
