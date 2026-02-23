import { experiences } from "../data/experience";
import ExperienceList from "../components/ExperienceList";

export default function ExperiencePage() {
  const nonProjectExperiences = experiences.filter(
    (e) => e.type !== "project"
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Experience</h1>
      <ExperienceList
        experiences={nonProjectExperiences}
        showTypeFilter={true}
      />
    </div>
  );
}
