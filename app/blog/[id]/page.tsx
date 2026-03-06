import { notFound } from "next/navigation";
import Image from "next/image";
import { blogs, hiddenBlogs } from "../../data/blogs";
import { blogPosts } from "../../data/blogposts";
import BlogPostContent from "../../components/BlogPostContent";

const allBlogs = [...blogs, ...hiddenBlogs];

export function generateStaticParams() {
  return allBlogs.map((b) => ({ id: b.id }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = allBlogs.find((b) => b.id === id);
  if (!blog) notFound();

  const post = blogPosts.find((p) => p.id === id);

  return (
    <div className="content-narrow flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-bold">{blog.title}</h1>
          <span className="text-sm font-semibold text-zinc-500">
            {blog.dates}
          </span>
        </div>
        <Image
          src={blog.coverImage}
          alt={`${blog.title} cover`}
          width={900}
          height={500}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
          className="rounded-xl"
          priority
        />
      </div>

      {/* Body */}
      {post ? (
        <BlogPostContent blocks={post.blocks} />
      ) : (
        <p className="text-sm text-zinc-500">Content coming soon.</p>
      )}

      {/* Closing word */}
      <div className="flex justify-center pt-4">
        <span className="inline-block px-6 py-3 text-lg font-semibold tracking-widest uppercase border-2 border-zinc-300 rounded-xl text-zinc-500 select-none">
          {blog.closingWord}
        </span>
      </div>
    </div>
  );
}

