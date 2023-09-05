import { BtnGoToUp } from "./btnUp";
import { Footer } from "./footer";
import { Header } from "./header";

export function Layout({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "pt" | "en";
}) {
  return (
    <main
      className={`min-h-screen font-geo bg-slate-50 selection:bg-indigo-100 selection:text-indigo-500`}
    >
      <Header lang={lang} />
      {children}
      <BtnGoToUp />
      <Footer lang={lang} />
    </main>
  );
}
