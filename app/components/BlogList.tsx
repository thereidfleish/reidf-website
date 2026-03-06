"use client";

import { useState, useMemo } from "react";
import type { Blog } from "../data/blogs";
import BlogCard from "./BlogCard";
import { sortByDate } from "../lib/dateUtils";

function getYear(dates: string): string {
  const match = dates.match(/\d{4}/);
  return match ? match[0] : "Unknown";
}

export default function BlogList({ blogs }: { blogs: Blog[] }) {
  const [newestFirst, setNewestFirst] = useState(true);
  const sorted = useMemo(() => sortByDate(blogs, newestFirst), [blogs, newestFirst]);

  const grouped = useMemo(() => {
    const map = new Map<string, Blog[]>();
    for (const blog of sorted) {
      const year = getYear(blog.dates);
      if (!map.has(year)) map.set(year, []);
      map.get(year)!.push(blog);
    }
    return Array.from(map.entries());
  }, [sorted]);

  return (
    <div className="flex flex-col gap-6">
      <button
        onClick={() => setNewestFirst((p) => !p)}
        className="text-xs font-medium px-3 py-1 rounded-full transition-colors cursor-pointer bg-zinc-100 text-zinc-600 hover:bg-zinc-200 self-start"
      >
        {newestFirst ? "Newest First" : "Oldest First"}
      </button>
      <div className="flex flex-col gap-10">
        {grouped.map(([year, entries]) => (
          <div key={year} className="flex flex-col gap-2">
            <h2 className="text-xl font-bold text-zinc-800">{year}</h2>
            <div className="flex flex-col gap-10 sm:gap-4">
              {entries.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

