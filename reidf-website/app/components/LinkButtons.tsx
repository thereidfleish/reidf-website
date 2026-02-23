import Button from "./Button";
import { iconMap } from "../lib/iconMap";
import type { ExperienceLink } from "../data/experience";

export default function LinkButtons({ links }: { links?: ExperienceLink[] }) {
  if (!links || links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Button
          key={link.url}
          href={link.url}
          external
          colorset="secondary"
          variant="outline"
          size="sm"
          leftIcon={link.icon ? iconMap[link.icon] : undefined}
        >
          {link.label}
        </Button>
      ))}
    </div>
  );
}
