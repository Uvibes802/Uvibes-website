import Article from "@/components/blog/article";

export default function Page({ params }) {
  // params.slug est soit un string, soit un tableau (rarement)
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  return <Article slug={slug} />;
}
