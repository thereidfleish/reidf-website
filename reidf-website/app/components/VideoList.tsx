"use client";

import { useState, useMemo } from "react";
import type { Video } from "../data/videos";
import VideoCard from "./VideoCard";
import { parseDateValue } from "../lib/dateUtils";

interface VideoListProps {
  videos: Video[];
  limit?: number;
}

export default function VideoList({ videos, limit }: VideoListProps) {
  const [newestFirst, setNewestFirst] = useState(true);

  const sorted = useMemo(
    () =>
      [...videos].sort((a, b) => {
        const diff = parseDateValue(a.dates) - parseDateValue(b.dates);
        return newestFirst ? -diff : diff;
      }),
    [videos, newestFirst]
  );

  const displayed = limit ? sorted.slice(0, limit) : sorted;

  if (videos.length === 0) {
    return <p className="text-sm text-zinc-500">No videos yet.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      {!limit && (
        <div>
          <button
            onClick={() => setNewestFirst((p) => !p)}
            className="text-xs font-medium px-3 py-1 rounded-full transition-colors cursor-pointer bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
          >
            {newestFirst ? "Newest First" : "Oldest First"}
          </button>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {displayed.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}
