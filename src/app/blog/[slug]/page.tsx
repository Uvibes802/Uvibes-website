import ArticleContent from "@/components/blog/article";
import { JSX } from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?slug=${params.slug}`
  );
  const data = await res.json();
  const post = data[0];
  const yoast = post?.yoast_head_json;

  return {
    title: yoast?.title,
    description: yoast?.description,
    alternates: {
      canonical: yoast?.canonical,
    },
    openGraph: {
      title: yoast?.og_title,
      description: yoast?.og_description,
      images: yoast?.og_image?.map((img: { url: string }) => img.url),
    },
    twitter: {
      title: yoast?.twitter_title,
      description: yoast?.twitter_description,
    },
  };
}

interface PageProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function Page({
  params,
}: PageProps): Promise<JSX.Element> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?slug=${params.slug}`
  );
  const posts = await res.json();
  const post = posts[0];

  let featuredImage = null;
  if (post?.featured_media) {
    const mediaRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/media/${post.featured_media}`
    );
    const media = await mediaRes.json();
    featuredImage = media.source_url;
  }

  const article = {
    ...post,
    featured_image: featuredImage,
  };

  return <ArticleContent article={article} />;
}
