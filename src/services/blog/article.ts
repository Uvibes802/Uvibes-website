import { Article } from "@/types/article/article";

export async function fetchPostsByTagSlug(slug: string) {
  const tagRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/tags?slug=${slug}`
  );
  const tags = await tagRes.json();
  const tagId = tags[0]?.id;
  if (!tagId) return [];

  const postsRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?tags=${tagId}&_embed`
  );
  const posts = await postsRes.json();

  return posts.map((post: Article) => ({
    ...post,
    tags: {
      id: tagId,
      name: tags[0]?.name,
      slug: tags[0]?.slug,
    },
  }));
}

export async function fetchFeaturedImageByPostSlug(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/posts?slug=${slug}`
  );

  const posts = await res.json();
  if (!posts.length) return null;
  const post = posts[0];
  console.log(post.featured_media);
  const mediaId = post.featured_media;
  if (!mediaId) return null;

  const mediaRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/wp/v2/media/${mediaId}`
  );
  const media = await mediaRes.json();
  return media.source_url;
}
