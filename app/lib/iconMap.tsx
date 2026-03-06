import { Github, Globe, ExternalLink, Video, FileText } from "lucide-react";
import type { LinkIcon } from "../data/experience";

export const iconMap: Record<NonNullable<LinkIcon>, React.ReactNode> = {
  github: <Github size={14} />,
  globe: <Globe size={14} />,
  external: <ExternalLink size={14} />,
  video: <Video size={14} />,
  paper: <FileText size={14} />,
};
