import { profile } from "../data/mock";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="max-w-2xl">
        <p className="animate-rise mb-2 text-sm font-medium tracking-widest text-accent uppercase">
          Hello, I'm
        </p>
        <h1 className="animate-rise mb-2 text-5xl font-bold tracking-tight sm:text-6xl" style={{ animationDelay: "0.1s" }}>
          {profile.name}
        </h1>

        <div className="animate-rise gradient-border mb-6 h-1 w-24 rounded-full" style={{ animationDelay: "0.2s" }} />

        <p className="animate-rise mb-2 text-xl text-muted sm:text-2xl" style={{ animationDelay: "0.3s" }}>
          {profile.title} · Vice President of HAVK
        </p>
        <p className="animate-rise mb-8 max-w-lg leading-relaxed text-muted" style={{ animationDelay: "0.4s" }}>
          {profile.bio}
        </p>

        <div className="animate-rise flex flex-wrap gap-2" style={{ animationDelay: "0.5s" }}>
          {profile.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted transition-colors hover:border-accent/50 hover:text-text"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
