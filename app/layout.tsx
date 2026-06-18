import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JLS Tecnologia | Suporte, Infraestrutura e Sistemas para sua Empresa",
  description: "Serviços de TI para pequenas e médias empresas em Cambé/PR. Suporte técnico, infraestrutura de rede, servidores Windows/Linux, desenvolvimento de sites e sistemas.",
  keywords: ["TI Cambé", "suporte técnico", "infraestrutura de rede", "desenvolvimento de sistemas", "servidores", "sites"],
  openGraph: {
    title: "JLS Tecnologia | Suporte, Infraestrutura e Sistemas",
    description: "Tecnologia que faz sua empresa funcionar. Suporte técnico, infraestrutura profissional e sistemas sob medida.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
