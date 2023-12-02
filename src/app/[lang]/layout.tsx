import { Layout } from "@/components/layout";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Kanit, Dosis } from "next/font/google";
import { getDictionary } from "@/utils/getDictionary";

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

type Props = {
  params: { lang: "pt" | "en" };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = getDictionary(params.lang ?? "pt");

  return {
    title: {
      template: "%s - Blog",
      default: "Blog",
    },
    description: dict.metatags.description,
    openGraph: {
      url: "https://myymbucket.s3.sa-east-1.amazonaws.com/imagens/Logo.png",
      title: "Blog - Ygor Mendanha",
      description: dict.metatags.description,
      siteName: "Ygor Mendanha",
      images: [
        {
          url: "https://myymbucket.s3.sa-east-1.amazonaws.com/imagens/Logo.png",
          width: 800,
          height: 600,
        },
      ],
    },
    authors: [
      { name: "Ygor Mendanha", url: "https://www.ygormendanha.com.br" },
    ],
    creator: "Ygor Mendanha",
    keywords: "blog, Ygor Mendanha, next 13",
    twitter: {
      site: "@site",
      card: "summary_large_image",
      description: dict.metatags.description,
      creator: "@YgorMendanha",
      title: "Blog - Ygor Mendanha",
    },
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en",
        "pt-BR": "/pt",
      },
    },
  };
}

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
