import { Layout } from "@/components/layout";
import "./globals.css";
import type { Metadata } from "next";
import { Kanit, Dosis } from "next/font/google";

const kan = Kanit({
  subsets: ["latin"],
  display: "swap",
  weight: "500",
  variable: "--font-kanit",
});

const dos = Dosis({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dosis",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Blog",
    default: "Blog",
  },
  description:
    "Exemplo de Blog desenvolvido para o portifolio do Ygor Mendanha",
  keywords: "blog, Ygor Mendanha, next 13",
  authors: [{ name: "Ygor Mendanha", url: "https://www.ygormendanha.com.br" }],
  openGraph: {
    title: "Blog",
    description:
      "Exemplo de Blog desenvolvido para o portifolio do Ygor Mendanha",
    url: "blogymdevelopment.vercel.app",
    siteName: "Blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description:
      "Exemplo de Blog desenvolvido para o portifolio do Ygor Mendanha",
    creator: "@YgorMendanha",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: "en" | "pt" };
}) {
  let lang: "pt-BR" | "en-US" = "pt-BR";
  if (params.lang === "en") {
    lang = "en-US";
  } else if (params.lang === "pt") {
    lang = "pt-BR";
  }
  return (
    <html lang={lang}>
      <body className={`${kan.variable} ${dos.variable}`}>
        <Layout lang={params.lang}>{children}</Layout>
      </body>
    </html>
  );
}
