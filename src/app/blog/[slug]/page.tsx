import Article from "@/components/blog/article";

export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return <Article slug={slug} />;
}
