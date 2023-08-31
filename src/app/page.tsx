import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen container">
      <section className="flex w-full items-center bg-slate-400 justify-between">
        <div className="flex-2 w-1/2 bg-black m-5 " />

        <section className="w-1/2">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            nihil minima illo tenetur esse, sit eum ducimus ullam libero qui
            ipsa repudiandae magni. Nihil corrupti voluptatem quaerat commodi
            esse aliquam. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut autem iure ducimus repellendus voluptas assumenda aperiam
            ratione necessitatibus minima consequatur eligendi praesentium
            tenetur excepturi reprehenderit ullam, illum repellat perferendis.
            Nihil.
          </p>
        </section>
      </section>

      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <h3>Noticias</h3>
      <div className="flex">
        <div>
          <div className="flex-2 w-52 h-36 bg-black m-5 " />
          <p>title</p>
          <p>time</p>
        </div>
        <div>
          <div className="flex-2 w-52 h-36 bg-black m-5 " />
          <p>title</p>
          <p>time</p>
        </div>
        <div>
          <div className="flex-2 w-52 h-36 bg-black m-5 " />
          <p>title</p>
          <p>time</p>
        </div>
      </div>
      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <h3>Economia</h3>
      <div className="flex">
        <div>
          <div className="flex-2 w-52 h-36 bg-black m-5 " />
          <p>title</p>
          <p>time</p>
        </div>
        <div>
          <div className="flex-2 w-52 h-36 bg-black m-5 " />
          <p>title</p>
          <p>time</p>
        </div>
        <div>
          <div className="flex-2 w-52 h-36 bg-black m-5 " />
          <p>title</p>
          <p>time</p>
        </div>
      </div>
    </main>
  );
}
