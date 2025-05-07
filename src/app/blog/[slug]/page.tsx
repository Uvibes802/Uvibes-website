import Article from "@/components/blog/article";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return <Article slug={slug} />;
}
