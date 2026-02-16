import { projects } from "../data/mock";

export default function Projects() {
  return (
    <div className="px-6 pt-10">
      <h1 className="mb-2 pl-2 text-5xl font-bold">Projects</h1>
      <p className="mb-10 text-muted">A selection of things I've built.</p>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-border bg-surface p-6 hover:border-accent/30"
          >
            <h2 className="mb-2 text-lg font-semibold group-hover:text-accent">
              {project.title}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            <div className="mb-4 flex flex-wrap gap-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-accent/10 px-2 py-0.5 text-xs text-accent"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-text"
                >
                  GitHub &rarr;
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted hover:text-text"
                >
                  Live &rarr;
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
