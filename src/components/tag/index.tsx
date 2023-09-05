import { getDictionary } from "@/utils/getDictionary";

export function Tags({
  tags,
  className = "",
  lang,
}: {
  tags: string[];
  className?: string;
  lang: "pt" | "en";
}) {
  const dict = getDictionary(lang);

  function renderTag(tag: string, idx: number) {
    switch (tag) {
      case "Noticias":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-indigo-200 text-indigo-950">
              {dict.news}
            </b>
          </small>
        );
      case "Economia":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-yellow-200 text-indigo-950">
              {dict.economy}
            </b>
          </small>
        );
      case "Ciencia":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-indigo-400 text-gray-50">
              {dict.science}
            </b>
          </small>
        );
      case "Tecnologia":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-gray-500 text-gray-50">
              {dict.technology}
            </b>
          </small>
        );
      case "Destaque":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-orange-400 text-gray-50">
              {dict.emphasis}
            </b>
          </small>
        );
      default:
        break;
    }
  }
  return (
    <div className={className}>{tags.map((e, idx) => renderTag(e, idx))}</div>
  );
}
