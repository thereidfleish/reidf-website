import Image from "next/image";
import Link from "next/link";
import type { Blog } from "../data/blogs";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blog/${blog.id}`}
      className="inline-flex self-start flex-row rounded-xl overflow-hidden transition-colors"
    >
      {/* Cover image — left side always */}
      <div className="relative w-[100px] sm:w-48 aspect-video sm:aspect-auto shrink-0 self-stretch rounded-xl overflow-hidden border border-zinc-200">
        <Image
          src={blog.coverImage}
          alt={`${blog.title} cover`}
          fill
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center gap-1 px-3 py-1 sm:px-6 sm:py-5 min-w-0">
        <h3 className="text-lg font-bold leading-snug">{blog.title}</h3>
        <span className="text-sm font-semibold text-zinc-500">
          {blog.dates}
        </span>
      </div>
    </Link>
  );
}

