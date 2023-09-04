import { PostInterface } from "@/types";
import Image from "next/image";
import Link from "next/link";

export function PostCard({
  posts,
  tag,
  title = tag,
}: {
  posts: PostInterface[];
  tag?: "Tecnologia" | "Ciencia" | "Economia" | "Noticias";
  title?: string;
}) {
  return (
    <>
      <h3 id={tag}>
        <b>{title}</b>
      </h3>
      <div className="flex flex-wrap mt-10">
        {posts.map(
          (post) =>
            post.tags.find((t) => t === tag) && (
              <Link href={`/${post.slug}`} key={post.id}>
                <div className="m-5 w-[210px]">
                  <div className="relative w-[210px] h-[120px]">
                    {post.banner.type === "external" && (
                      <Image
                        src={post.banner.name}
                        fill
                        sizes="210px"
                        className="object-cover"
                        alt="banner"
                      />
                    )}
                    {post.banner.type === "file" && (
                      <Image
                        src={post.banner.file.url}
                        fill
                        sizes="210px"
                        className="object-cover"
                        alt="banner"
                      />
                    )}
                  </div>
                  <p>
                    <b>{post.title}</b>
                  </p>
                  <p>
                    <small>{post.date}</small>
                  </p>
                </div>
              </Link>
            )
        )}
      </div>
    </>
  );
}
