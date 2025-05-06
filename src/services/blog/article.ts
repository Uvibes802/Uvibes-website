export async function fetchPostsByTagSlug(slug: string) {
  // 1. Récupérer l'ID du tag
  const tagRes = await fetch(
    `https://uvibes.fr/wp-json/wp/v2/tags?slug=${slug}`
  );
  const tags = await tagRes.json();
  const tagId = tags[0]?.id;
  if (!tagId) return [];

  // 2. Récupérer les posts associés à ce tag
  const postsRes = await fetch(
    `https://uvibes.fr/wp-json/wp/v2/posts?tags=${tagId}`
  );
  const posts = await postsRes.json();
  return posts;
}

export async function fetchFeaturedImageByPostSlug(slug: string) {
  // 1. Récupère le post par son slug
  const res = await fetch(`https://uvibes.fr/wp-json/wp/v2/posts?slug=${slug}`);
  const posts = await res.json();
  if (!posts.length) return null;
  const post = posts[0];

  // 2. Récupère l’ID de l’image à la une
  const mediaId = post.featured_media;
  if (!mediaId) return null;

  // 3. Récupère l’URL de l’image à la une
  const mediaRes = await fetch(
    `https://uvibes.fr/wp-json/wp/v2/media/${mediaId}`
  );
  const media = await mediaRes.json();
  return media.source_url;
}
