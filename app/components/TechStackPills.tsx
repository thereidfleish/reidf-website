export default function TechStackPills({ techStack }: { techStack?: string[] }) {
  if (!techStack || techStack.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-1.5">
      {techStack.map((tech) => (
        <span
          key={tech}
          className="text-xs px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

