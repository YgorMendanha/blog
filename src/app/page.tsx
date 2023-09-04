import { getAllPublished, getHighlightPublished } from "@/lib/notion";
import Image from "next/image";
import { PostCard } from "./components/cardPost";
import Link from "next/link";
import { Tags } from "@/components/tag";

export default async function Home() {
  const posts = await getAllPublished();
  const highlightPost = await getHighlightPublished();

  return (
    <main className="min-h-screen container">
      {highlightPost && (
        <section className="flex w-full flex-col 2xl:flex-row justify-between">
          <Link href={`/${highlightPost.slug}`}>
            <div className="mx-auto 2xl:mx-0 m-5 mb-5 relative  w-[250px] h-[100px] min-[400px]:w-[350px] min-[300px]:h-[200px]  min-[550px]:w-[500px] min-[550px]:h-[300px] md:w-[700px] md:h-[400px]">
              {highlightPost.banner.type === "external" && (
                <Image
                  src={highlightPost.banner.name}
                  className="object-cover"
                  fill
                  alt="banner"
                />
              )}
              {highlightPost.banner.type === "file" && (
                <Image
                  src={highlightPost.banner.file.url}
                  fill
                  sizes="210px"
                  className="object-cover"
                  alt="banner"
                />
              )}
            </div>
          </Link>

          <section className="w-full 2xl:w-1/2">
            <Link href={`/${highlightPost.slug}`}>
              <h1 className="text-2xl md:text-5xl font-bold mb-8">
                {highlightPost.title}
              </h1>
            </Link>
            <Tags tags={highlightPost.tags} />

            <p className="mt-4">{highlightPost.description}</p>
          </section>
        </section>
      )}

      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <PostCard posts={posts} tag="Noticias" />
      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <PostCard posts={posts} tag="Economia" />
      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <PostCard posts={posts} tag="Ciencia" />
      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <PostCard posts={posts} tag="Tecnologia" />
    </main>
  );
}
