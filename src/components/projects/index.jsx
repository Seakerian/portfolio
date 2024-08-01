import ProjectTile from "../project-tile";
import { projects } from "./data";

export default function Projects() {
  return (
    <div
      id="projects"
      className="py-12 px-6 md:px-12 flex flex-col items-center justify-center min-h-screen"
    >
      <h2 className="font-merriweather m-4 text-4xl md:text-5xl text-gray-900 text-center">
        Check out my recent work
      </h2>
      <div className="max-w-3xl w-full flex flex-wrap justify-center items-center space-y-8 text-center py-8">
        <div className="flex flex-wrap justify-center gap-10">
          {projects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
