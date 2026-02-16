import { profile } from "../data/mock";

export default function Home() {
  return (
    <div className="min-h-screen px-6">
      <h1 className="pt-10 pl-2 text-5xl font-bold">Home</h1>
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
          Hello, I'm
        </p>
        <h1 className="mb-2 text-5xl font-bold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <div className="gradient-border mb-6 h-1 w-24 rounded-full" />

        <p className="mb-2 text-xl text-muted sm:text-2xl">
          {profile.title} · Vice President of HAVK
        </p>
        <p className="mb-8 max-w-lg leading-relaxed text-muted">
          {profile.bio}
        </p>

        <div className="flex flex-wrap gap-2">
          {profile.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted hover:border-accent/50 hover:text-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
