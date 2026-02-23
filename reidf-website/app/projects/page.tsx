import { projects } from "../data/projects";
import ExperienceList from "../components/ExperienceList";

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <ExperienceList
        experiences={projects}
        showTypeFilter={true}
        hint="Click on a project title to learn more"
      />
    </div>
  );
}
