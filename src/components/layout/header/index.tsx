import { getDictionary } from "@/utils/getDictionary";
import Link from "next/link";

export function Header({ lang }: { lang: "pt" | "en" }) {
  const dict = getDictionary(lang);
  return (
    <header className="mb-10">
      <div className="bg-indigo-500 h-16 flex items-center text-white">
        <div className="container">
          <Link href={"/"}>
            <b className="text-2xl font-dos">BLOG</b>
          </Link>
        </div>
      </div>
      <div className="bg-indigo-200 py-2 flex items-center text-indigo-950 text-sm ">
        <div className="container flex w-full justify-between ">
          <Link href={"/#Noticias"}>
            <b className="font-dos">{dict.news}</b>
          </Link>
          <Link href={"/#Economia"}>
            <b className="font-dos">{dict.economy}</b>
          </Link>
          <Link href={"/#Ciencia"}>
            <b className="font-dos">{dict.science}</b>
          </Link>
          <Link href={"/#Tecnologia"}>
            <b className="font-dos">{dict.technology}</b>
          </Link>
        </div>
      </div>
    </header>
  );
}
