"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "About Me", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "More", href: "/more", activeFor: ["/more", "/videos"] },
];

function isActive(tab: (typeof tabs)[number], pathname: string) {
  if ("activeFor" in tab && tab.activeFor) {
    return tab.activeFor.some((p) => pathname === p || pathname.startsWith(p + "/"));
  }
  return pathname === tab.href;
}

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 px-4">
      {tabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`text-base sm:text-lg transition-colors ${
            isActive(tab, pathname)
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
