import { ProjectCard } from "../../components";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <>
      <section className="w-full px-6 py-24">
        <div className="mx-auto flex w-full max-w-4xl flex-col">
          <div className="mb-4 flex items-baseline gap-3">
            <span className="font-mono text-xs text-gray-400">/ 01</span>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Projects
            </h1>
          </div>
          <p className="mb-12 max-w-md text-gray-600">
            A collection of things I&apos;ve built, from low-level systems
            work to full web stacks.
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}