import Image from "next/image";
import type { BlogBlock } from "../data/blogposts";

function Caption({ text }: { text: string }) {
  return (
    <p className="text-sm italic text-zinc-500 text-center mt-2">
      {text}
    </p>
  );
}

export default function BlogPostContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "header":
            return (
              <h2 key={i} className="text-2xl font-bold mt-2">
                {block.text}
              </h2>
            );

          case "paragraph":
            return (
              <div
                key={i}
                className="rich-text leading-relaxed text-zinc-700"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );

          case "image":
            return (
              <figure key={i}>
                <Image
                  src={block.src}
                  alt={block.caption ?? ""}
                  width={900}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                  className="rounded-xl"
                />
                {block.caption && <Caption text={block.caption} />}
              </figure>
            );

          case "video":
            return (
              <figure key={i}>
                <video
                  src={block.src}
                  controls
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl"
                />
                {block.caption && <Caption text={block.caption} />}
              </figure>
            );

          case "youtube":
            return (
              <figure key={i}>
                <div className="aspect-video w-full rounded-xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${block.youtubeId}`}
                    title={block.caption ?? `YouTube video ${i + 1}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                {block.caption && <Caption text={block.caption} />}
              </figure>
            );
        }
      })}
    </div>
  );
}

