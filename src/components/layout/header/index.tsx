import { getDictionary } from "@/utils/getDictionary";
import { SelectLang } from "./components/selectLang";
import { CustomLink } from "@/components/CustomLink";

export function Header({ lang }: { lang: "pt" | "en" }) {
  const dict = getDictionary(lang);
  return (
    <header className="mb-10">
      <div className="bg-indigo-500 h-16 flex items-center text-white">
        <div className="container flex justify-between">
          <CustomLink href={"/"}>
            <b className="text-2xl font-dos">BLOG</b>
          </CustomLink>
          <SelectLang />
        </div>
      </div>
      <div className="bg-indigo-200 py-2 flex items-center text-indigo-950 text-sm ">
        <div className="container flex w-full justify-between ">
          <CustomLink href={"/#Noticias"}>
            <b className="font-dos">{dict.news}</b>
          </CustomLink>
          <CustomLink href={"/#Economia"}>
            <b className="font-dos">{dict.economy}</b>
          </CustomLink>
          <CustomLink href={"/#Ciencia"}>
            <b className="font-dos">{dict.science}</b>
          </CustomLink>
          <CustomLink href={"/#Tecnologia"}>
            <b className="font-dos">{dict.technology}</b>
          </CustomLink>
        </div>
      </div>
    </header>
  );
}
