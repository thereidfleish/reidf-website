import { typeLabels as expTypeLabels, typeColors as expTypeColors } from "../data/experience";
import { projectTypeLabels, projectTypeColors } from "../data/projects";

export const allTypeLabels: Record<string, string> = { ...expTypeLabels, ...projectTypeLabels };
export const allTypeColors: Record<string, string> = { ...expTypeColors, ...projectTypeColors };
