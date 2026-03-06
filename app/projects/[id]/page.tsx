import { projects } from "../../data/projects";
import { projectDetails } from "../../data/projectdetails";
import Image from "next/image";
import { notFound } from "next/navigation";
import TechStackPills from "../../components/TechStackPills";
import LinkButtons from "../../components/LinkButtons";
import ProjectMedia from "../../components/ProjectMedia";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  const detail = projectDetails.find((d) => d.id === id);

  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex gap-5 items-start">
        <Image
          src={project.image}
          alt={`${project.title} logo`}
          width={80}
          height={80}
          className="rounded-xl object-contain shrink-0"
        />
        <div className="flex flex-col gap-1.5">
          <h1 className="text-2xl font-bold leading-none">{project.title}</h1>
          {project.position && (
            <p className="text-sm font-medium text-zinc-600">
              {project.position}
            </p>
          )}
          <div className="flex flex-col text-sm text-zinc-500">
            <span className="font-semibold">{project.dates}</span>
            {project.location && <span className="mt-1">{project.location}</span>}
          </div>
        </div>
      </div>

      {/* Two-column body */}
      <div className={`flex gap-10 items-start ${detail?.media?.length ? "flex-col md:flex-row" : ""}`}>
        {/* Left column: meta + descriptions */}
        <div className="flex flex-col gap-6 w-full md:w-2/5 shrink-0">
          <TechStackPills techStack={project.techStack} />
          <LinkButtons links={project.links} />

          {project.description && (
            <div
              className="rich-text text-sm leading-relaxed text-zinc-700"
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          )}

          {/* Media — visible only on small screens, between short and long description */}
          {detail?.media && detail.media.length > 0 && (
            <div className="md:hidden">
              <ProjectMedia media={detail.media} />
            </div>
          )}

          {detail?.longDescription && (
            <div
              className="rich-text leading-relaxed text-zinc-700"
              dangerouslySetInnerHTML={{ __html: detail.longDescription }}
            />
          )}
        </div>

        {/* Right column: media — visible only on md+ */}
        {detail?.media && detail.media.length > 0 && (
          <div className="hidden md:block flex-1 min-w-0">
            <ProjectMedia media={detail.media} />
          </div>
        )}
      </div>
    </div>
  );
}

