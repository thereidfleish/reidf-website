import { blogs } from "../data/blogs";
import BlogList from "../components/BlogList";

export default function BlogPage() {
  return (
    <div className="content-narrow">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <BlogList blogs={blogs} />
    </div>
  );
}

