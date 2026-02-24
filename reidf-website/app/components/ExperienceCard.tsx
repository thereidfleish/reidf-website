import Image from "next/image";
import Link from "next/link";
import type { Experience } from "../data/experience";
import type { Project } from "../data/projects";
import { allTypeLabels, allTypeColors } from "../lib/typeUtils";
import TechStackPills from "./TechStackPills";
import LinkButtons from "./LinkButtons";

type CardItem = Experience | Project;

interface ExperienceCardProps {
  experience: CardItem;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const {
    image,
    title,
    titleUrl,
    position,
    dates,
    location,
    description,
    techStack,
    links,
    type,
  } = experience;

  return (
    <div className="flex gap-5 p-5">
      {/* Image */}
      <div className="shrink-0">
        <Image
          src={image}
          alt={`${title} logo`}
          width={64}
          height={64}
          className="rounded-lg object-contain"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          {/* Left: title + badge + position */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold leading-none">
                {titleUrl ? (
                  titleUrl.startsWith("/") ? (
                    <Link href={titleUrl} className="hover:underline">{title}</Link>
                  ) : (
                    <a href={titleUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{title}</a>
                  )
                ) : (
                  title
                )}
              </h3>
              <span
                className={`inline-flex items-center h-5 text-xs leading-none font-medium px-2 rounded-full relative -top-px ${allTypeColors[type]}`}
              >
                {allTypeLabels[type]}
              </span>
            </div>
            {position && (
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {position}
              </p>
            )}
          </div>

          {/* Right: dates + location */}
          <div className="flex flex-col items-end shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-semibold">{dates}</span>
            {location && <span className="mt-2">{location}</span>}
          </div>
        </div>

        {description && (
          <div
            className="rich-text text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}

        <TechStackPills techStack={techStack} />
        <LinkButtons links={links} />
      </div>
    </div>
  );
}
