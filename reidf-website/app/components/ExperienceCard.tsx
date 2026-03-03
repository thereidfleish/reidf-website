import Image from "next/image";
import Link from "next/link";
import type { CardItem } from "../lib/typeUtils";
import LinkButtons from "./LinkButtons";

interface ExperienceCardProps {
  experience: CardItem;
}

function SmartLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (href.startsWith("/")) return <Link href={href} className={className}>{children}</Link>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { image, title, titleUrl, position, dates, location, description, links } = experience;

  return (
    <div className="flex gap-5 py-5">
      {/* Image */}
      <div className="shrink-0">
        {titleUrl ? (
          <SmartLink href={titleUrl}>
            <Image src={image} alt={`${title} logo`} width={64} height={64} className="rounded-lg object-contain" />
          </SmartLink>
        ) : (
          <Image src={image} alt={`${title} logo`} width={64} height={64} className="rounded-lg object-contain" />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 min-w-0 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
          {/* Title + position */}
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold leading-none">
              {titleUrl ? (
                <SmartLink href={titleUrl} className="hover:underline">{title}</SmartLink>
              ) : title}
            </h3>
            {position && (
              <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {position}
              </p>
            )}
          </div>

          {/* Dates + location */}
          <div className="flex flex-col sm:items-end shrink-0 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="font-medium sm:font-semibold">{dates}</span>
            {location && <span className="font-medium mt-1 sm:mt-2">{location}</span>}
          </div>
        </div>

        {description && (
          <div
            className="rich-text text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
            dangerouslySetInnerHTML={{
              __html: titleUrl?.startsWith("/")
                ? description + ` <a href="${titleUrl}" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline transition-colors">Read more →</a>`
                : description,
            }}
          />
        )}

        <LinkButtons links={links} />
      </div>
    </div>
  );
}
