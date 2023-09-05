import { getAllPublished, getHighlightPublished } from "@/lib/notion";
import Image from "next/image";
import { PostCard } from "./components/cardPost";

import { Tags } from "@/components/tag";
import { Metadata } from "next";
import { getDictionary } from "@/utils/getDictionary";
import { CustomLink } from "@/components/CustomLink";

export const revalidate = 3600 

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home({
  params: { lang },
}: {
  params: { lang: "pt" | "en" };
}) {
  const posts = await getAllPublished();
  const highlightPost = await getHighlightPublished();
  const dict = getDictionary(lang);

  return (
    <main className="min-h-screen container">
      {highlightPost && (
        <section className="flex w-full flex-col 2xl:flex-row justify-between">
          <CustomLink href={`/${highlightPost.slug}`}>
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
          </CustomLink>

          <section className="w-full 2xl:w-1/2">
            <CustomLink href={`/${highlightPost.slug}`}>
              <h1 className="text-2xl md:text-5xl font-bold mb-8">
                {highlightPost.title}
              </h1>
            </CustomLink>
            <Tags tags={highlightPost.tags} lang={lang} />

            <p className="mt-4">{highlightPost.description}</p>
          </section>
        </section>
      )}

      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <PostCard title={dict.news} posts={posts} tag="Noticias" />
      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <PostCard title={dict.economy} posts={posts} tag="Economia" />
      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <PostCard title={dict.science} posts={posts} tag="Ciencia" />
      <div className="w-full h-[1px] bg-indigo-500 my-10" />

      <PostCard title={dict.technology} posts={posts} tag="Tecnologia" />
    </main>
  );
}
