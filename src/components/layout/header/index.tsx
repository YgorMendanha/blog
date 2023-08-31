export function Header() {
  return (
    <header className="mb-5">
      <div className="bg-indigo-500 h-16 flex items-center text-white">
        <div className="container">
          <b className="text-2xl font-dos">BLOG</b>
        </div>
      </div>
      <div className="bg-indigo-200 py-2 flex items-center text-indigo-950 text-sm ">
        <div className="container flex w-full justify-between ">
          <b className="font-dos">Noticias</b>
          <b className="font-dos">Economia</b>
          <b className="font-dos">Ciencia</b>
          <b className="font-dos">Tecnologia</b>
        </div>
      </div>
    </header>
  );
}
