import { versions } from "../data/changelog";
import type { ChangeItem } from "../data/changelog";

export const metadata = { title: "Changelog" };

export default function ChangelogPage() {
  return (
    <div className="flex flex-col gap-8 max-w-2xl">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold">Changelog</h1>
      </div>

      <div className="flex flex-col gap-6">
        {versions.map((v) => (
          <div key={v.version} className="flex flex-col gap-1.5">
            <h2 className="text-base font-bold">
              Version {v.version}{" "}
              <span className="font-normal text-zinc-500 dark:text-zinc-400">
                - {v.date}
              </span>
            </h2>
            <ul className="flex flex-col gap-0.5 text-sm text-zinc-700 dark:text-zinc-300">
              {v.changes.map((c: ChangeItem, i: number) =>
                typeof c === "string" ? (
                  <li key={i} className="flex gap-2">
                    <span className="text-zinc-400 shrink-0">•</span>
                    <span>{c}</span>
                  </li>
                ) : (
                  <li key={i} className="flex flex-col gap-0.5">
                    <div className="flex gap-2">
                      <span className="text-zinc-400 shrink-0">•</span>
                      <span>{c.text}</span>
                    </div>
                    <ul className="flex flex-col gap-0.5 ml-4">
                      {c.sub.map((s, j) => (
                        <li key={j} className="flex gap-2">
                          <span className="text-zinc-400 shrink-0">◦</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
