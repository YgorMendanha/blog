export function Tags({
  tags,
  className = "",
}: {
  tags: string[];
  className?: string;
}) {
  function renderTag(tag: string, idx: number) {
    switch (tag) {
      case "Noticias":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-indigo-200 text-indigo-950">
              Noticias
            </b>
          </small>
        );
      case "Economia":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-yellow-200 text-indigo-950">
              Economia
            </b>
          </small>
        );
      case "Ciencia":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-indigo-400 text-gray-50">
              Ciencia
            </b>
          </small>
        );
      case "Tecnologia":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-gray-500 text-gray-50">
              Tecnologia
            </b>
          </small>
        );
      case "Destaque":
        return (
          <small key={idx}>
            <b className="mr-2 p-1 px-2 rounded-2xl bg-orange-400 text-gray-50">
              Destaque
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
