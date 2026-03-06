import Link from "next/link";

export const metadata = { title: "sbpin" };

export default function SbpinPage() {
  return (
    <div className="flex flex-col gap-6 max-w-2xl">
      <p className="text-zinc-700 leading-relaxed">
        Now there is one way to know what my pin is…but you&apos;re running out
        of time{" "}
        <Link href="/sbpin/time/">⏰</Link>
      </p>
      <p className="text-white leading-relaxed">
        …And no there&apos;s nothing else secret on this page!
      </p>
    </div>
  );
}

