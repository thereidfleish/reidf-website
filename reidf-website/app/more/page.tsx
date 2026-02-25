import Link from "next/link";
import { videos } from "../data/videos";
import { friends } from "../data/friends";
import VideoList from "../components/VideoList";

export default function MorePage() {
  return (
    <div className="content-narrow flex flex-col gap-12">
      {/* My Videos */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">My Videos</h2>
        <VideoList videos={videos} limit={2} />
        <Link
          href="/videos"
          className="text-sm text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors self-start"
        >
          See all →
        </Link>
      </section>

      {/* Cool Friends' Websites */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Cool Friends&apos; Websites</h2>
        <div className="flex flex-col gap-3">
          {friends.map((friend) => (
            <a
              key={friend.id}
              href={friend.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-0.5 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <span className="font-semibold text-base">{friend.name}</span>
              {friend.description && (
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {friend.description}
                </span>
              )}
              <span className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">
                {friend.url}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
