import { Tags } from "@/components/tag";
import { getAllPublished, getSinglePost } from "@/lib/notion";
import ReactMarkdown from "react-markdown";
import { PostCard } from "../components/cardPost";
import { Metadata } from "next";

export async function generateStaticParams() {
  const posts = await getAllPublished();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getSinglePost(params.slug);

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: "blog, Ygor Mendanha, next 13",
    authors: [
      { name: "Ygor Mendanha", url: "https://www.ygormendanha.com.br" },
    ],
    openGraph: {
      title: "Blog",
      description: post.metadata.description,
      url: "blogymdevelopment.vercel.app",
      siteName: "Blog",
      images: [
        {
          url: post.metadata.banner.file.url,
          width: 800,
          height: 800,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog",
      description: post.metadata.description,
      creator: "@YgorMendanha",
      images: [post.metadata.banner.file.url],
    },
  };
}

export default async function SinglePost({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await getAllPublished();
  const post = await getSinglePost(params.slug);

  return (
    <main className="min-h-screen container">
      <section>
        <h2 className="text-3xl">
          <b>{post.metadata.title}</b>
        </h2>
        <span className="mb-10">{post.metadata.date}</span>
        <Tags className="my-5" tags={post.metadata.tags} />
        <ReactMarkdown className="">{post.markdown.parent}</ReactMarkdown>
      </section>
      <section>
        <PostCard
          title={"Outros Posts"}
          posts={posts}
          tag={post.metadata.tags[0]}
        />
      </section>
    </main>
  );
}
