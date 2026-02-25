import type { Video } from "../data/videos";

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const { title, dates, description, youtubeId } = video;
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;

  return (
    <div className="flex gap-5 py-5 items-start">
      {/* Text */}
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <h3 className="text-lg font-bold leading-snug">
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {title}
          </a>
        </h3>
        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{dates}</span>
        {description && (
          <div
            className="rich-text text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
      </div>

      {/* Embedded YouTube video */}
      <div className="shrink-0 w-80 aspect-video rounded-lg overflow-hidden">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
