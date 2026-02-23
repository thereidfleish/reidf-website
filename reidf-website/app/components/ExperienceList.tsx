"use client";

import { useState, useMemo } from "react";
import type { Experience } from "../data/experience";
import type { Project } from "../data/projects";
import { allTypeLabels, allTypeColors } from "../lib/typeUtils";
import ExperienceCard from "./ExperienceCard";
import Button from "./Button";

type CardItem = Experience | Project;

const MONTHS: Record<string, number> = {
  Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
};

function parseDateValue(dates: string): number {
  const start = dates.split("-")[0].trim();
  if (start === "Present") return Date.now();
  const [mon, year] = start.split(" ");
  return parseInt(year) * 12 + (MONTHS[mon] ?? 0);
}

interface ExperienceListProps {
  experiences: CardItem[];
  showTypeFilter?: boolean;
  hint?: string;
}

export default function ExperienceList({
  experiences,
  showTypeFilter = true,
  hint,
}: ExperienceListProps) {
  const availableTypes = useMemo(
    () => [...new Set(experiences.map((e) => e.type))],
    [experiences]
  );

  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(
    () => new Set(availableTypes)
  );
  const [newestFirst, setNewestFirst] = useState(true);

  function toggleType(type: string) {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
        if (next.size === 0) return new Set(availableTypes);
      } else {
        next.add(type);
      }
      return next;
    });
  }

  const filtered = useMemo(() => {
    return [...experiences]
      .filter((e) => selectedTypes.has(e.type))
      .sort((a, b) => {
        const diff = parseDateValue(a.dates) - parseDateValue(b.dates);
        return newestFirst ? -diff : diff;
      });
  }, [experiences, selectedTypes, newestFirst]);

  const showFilter = showTypeFilter && availableTypes.length > 1;

  return (
    <div className="flex flex-col gap-6">
      {/* Controls */}
      <div className="flex flex-col gap-2">
        {showFilter && (
          <>
            <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">Filters</p>
            <div className="flex flex-wrap gap-2 items-center">
              {availableTypes.map((t) => {
                const isActive = selectedTypes.has(t);
                return (
                  <button
                    key={t}
                    onClick={() => toggleType(t)}
                    className={`text-xs font-medium px-3 py-1 rounded-full transition-colors cursor-pointer ${
                      isActive
                        ? allTypeColors[t]
                        : "bg-zinc-100 text-zinc-400 dark:bg-zinc-800 dark:text-zinc-500"
                    }`}
                  >
                    {allTypeLabels[t]}
                  </button>
                );
              })}
              <div className="w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-1 self-center" />
              <Button
                shape="pill"
                size="sm"
                colorset="secondary"
                variant="outline"
                onClick={() => setNewestFirst((p) => !p)}
              >
                {newestFirst ? "Newest First" : "Oldest First"}
              </Button>
            </div>
          </>
        )}
        {!showFilter && (
          <Button
            shape="pill"
            size="sm"
            colorset="secondary"
            variant="outline"
            onClick={() => setNewestFirst((p) => !p)}
          >
            {newestFirst ? "Newest First" : "Oldest First"}
          </Button>
        )}
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {hint && (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{hint}</p>
        )}
        {filtered.length === 0 ? (
          <p className="text-sm text-zinc-500">No results found.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {filtered.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
