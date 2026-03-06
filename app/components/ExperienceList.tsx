"use client";

import { useState, useMemo } from "react";
import { allTypeLabels } from "../lib/typeUtils";
import type { CardItem } from "../lib/typeUtils";
import ExperienceCard from "./ExperienceCard";
import { sortByDate } from "../lib/dateUtils";

interface ExperienceListProps {
  experiences: CardItem[];
  showTypeFilter?: boolean;
}

export default function ExperienceList({
  experiences,
  showTypeFilter = true,
}: ExperienceListProps) {
  const availableTypes = useMemo(
    () => [...new Set(experiences.map((e) => e.type))],
    [experiences]
  );

  const [selectedTypes, setSelectedTypes] = useState<Set<string>>(new Set());
  const [newestFirst, setNewestFirst] = useState(true);

  function toggleType(type: string) {
    setSelectedTypes((prev) => {
      const next = new Set(prev);
      if (next.has(type)) {
        next.delete(type);
      } else {
        next.add(type);
      }
      return next;
    });
  }

  const filtered = useMemo(() => {
    const f =
      selectedTypes.size === 0
        ? experiences
        : experiences.filter((e) => selectedTypes.has(e.type));
    return sortByDate(f, newestFirst);
  }, [experiences, selectedTypes, newestFirst]);

  const showFilter = showTypeFilter && availableTypes.length > 1;

  const sortBtn = (
    <button
      onClick={() => setNewestFirst((p) => !p)}
      className="text-xs font-medium px-3 py-1 rounded-full transition-colors cursor-pointer bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
    >
      {newestFirst ? "Newest First" : "Oldest First"}
    </button>
  );

  return (
    <div className="flex flex-col gap-6">
      {/* Controls */}
      <div className="flex flex-col gap-2">
        {showFilter ? (
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
                        ? "bg-zinc-800 text-white dark:bg-white dark:text-black"
                        : "bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    }`}
                  >
                    {allTypeLabels[t]}
                  </button>
                );
              })}
              <div className="hidden sm:block w-px h-5 bg-zinc-200 dark:bg-zinc-700 mx-1 self-center" />
              {sortBtn}
            </div>
          </>
        ) : (
          sortBtn
        )}
      </div>

      {/* Cards */}
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
  );
}
