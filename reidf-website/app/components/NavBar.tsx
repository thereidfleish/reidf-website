"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "About Me", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`text-lg transition-colors ${
            pathname === tab.href
              ? "font-bold text-zinc-900 dark:text-zinc-50"
              : "font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </nav>
  );
}
