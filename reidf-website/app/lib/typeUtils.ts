import { typeLabels as expTypeLabels, typeColors as expTypeColors } from "../data/experience";
import type { Experience } from "../data/experience";
import { projectTypeLabels, projectTypeColors } from "../data/projects";
import type { Project } from "../data/projects";

export type CardItem = Experience | Project;

export const allTypeLabels: Record<string, string> = { ...expTypeLabels, ...projectTypeLabels };
export const allTypeColors: Record<string, string> = { ...expTypeColors, ...projectTypeColors };
