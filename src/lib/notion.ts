import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { PostInterface } from "@/types";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

function getToday(datestring: Date) {
  let date = new Date();

  if (datestring) {
    date = new Date(datestring);
  }

  const day =
    date.getDate().toString().length > 1
      ? date.getDate()
      : `0${date.getDate()}`;
  const month =
    date.getMonth().toString().length > 1
      ? date.getMonth()
      : `0${date.getMonth()}`;
  const year = date.getFullYear();
  const today = `${day}/${month}/${year}`;

  return today;
}

const getPageMetaData = (post: any) => {
  const getTags = (tags: any) => {
    const allTags = tags.map((tag: any) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    tags: getTags(post.properties.Tags.multi_select),
    banner: post.properties.Banner.files[0],
    description: post.properties.Description.rich_text[0].plain_text,
    date: getToday(post.properties.Date.last_edited_time),
    slug: post.properties.Slug.rich_text[0].plain_text,
    title: post.properties.Post.title[0].plain_text,
  } as PostInterface;
};

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_ID!,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  });
};

export const getSinglePost = async (slug: string) => {
  const response = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_ID!,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug,
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString,
  };
};

export const getHighlightPublished = async () => {
  const posts = await notion.databases.query({
    database_id: process.env.NEXT_PUBLIC_DATABASE_ID!,
    filter: {
      property: "Tags",
      multi_select: {
        contains: "Destaque",
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  const allPosts = posts.results;

  return allPosts.map((post) => {
    return getPageMetaData(post);
  })[0];
};
