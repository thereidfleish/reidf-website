import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About this Website" };

export default function AboutThisWebsitePage() {
  return (
    <div className="flex flex-col gap-10 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">About this Website</h1>
      </div>

      {/* Tools */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Tools Used</h2>
        <p className="text-zinc-700 leading-relaxed">
          This website is built with{" "}
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">Next.js</a> and{" "}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">React</a>,
          styled with{" "}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">Tailwind CSS</a>,
          and written in{" "}
          <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer">TypeScript</a>.
          Icons are from{" "}
          <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">Lucide</a>.
        </p>
      </section>

      {/* Hosting */}
      <section className="flex flex-col gap-3">
        <h2 className="text-xl font-bold">Hosting</h2>
        <Image
          src="/other/synology.jpg"
          alt="The FleishServer"
          width={400}
          height={300}
          className="rounded-xl object-cover"
        />
        <p className="text-zinc-700 leading-relaxed">
          Self-Hosted in Great Neck, NY on The FleishServer.{" "}
          <a href="https://server.reidf.net/" target="_blank" rel="noopener noreferrer">
            Specs and other info
          </a>
        </p>
        <p className="text-zinc-700">
          Visitor Tracker: StatCounter
        </p>
      </section>

      {/* Changelog link */}
      <p className="text-sm text-zinc-500">
        View the <Link href="/changelog" className="text-blue-500 hover:text-blue-700 hover:underline transition-colors">Changelog</Link> for version history.
      </p>
    </div>
  );
}

