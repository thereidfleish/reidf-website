import { ReactNode } from "react";

interface PrivacyPolicyLayoutProps {
  title: string;
  children: ReactNode;
}

export default function PrivacyPolicyLayout({
  title,
  children,
}: PrivacyPolicyLayoutProps) {
  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">{title}</h1>
      </div>
      <div className="flex flex-col gap-6 text-zinc-700 dark:text-zinc-300 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function PolicySection({
  heading,
  level = 2,
  children,
}: {
  heading: string;
  level?: 2 | 3 | 4;
  children: ReactNode;
}) {
  const Tag = `h${level}` as "h2" | "h3" | "h4";
  const sizeClass =
    level === 2 ? "text-xl font-bold" : level === 3 ? "text-lg font-semibold" : "font-semibold";

  return (
    <section className="flex flex-col gap-3">
      <Tag className={`text-zinc-900 dark:text-zinc-100 ${sizeClass}`}>
        {heading}
      </Tag>
      <div className="flex flex-col gap-3">{children}</div>
    </section>
  );
}

export function PolicyList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc list-inside flex flex-col gap-1 pl-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
