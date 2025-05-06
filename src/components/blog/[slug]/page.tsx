import Article from "../article";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  return (
    <div>
      <h1>Blog Post</h1>
      <p>{slug}</p>
      <Article slug={slug} />
    </div>
  );
}
