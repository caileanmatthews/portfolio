import { profile } from "../data/mock";

export default function Contact() {
  return (
    <div className="min-h-screen px-6">
      <h1 className="pt-10 pl-2 text-5xl font-bold">Contact</h1>
      <div className="flex min-h-[calc(100vh-120px)] items-center justify-center">
      <div className="w-full max-w-lg">
        <h2 className="mb-2 text-3xl font-bold">Get in Touch</h2>
        <p className="mb-8 text-muted">
          Have a project in mind or just want to chat? Reach out.
        </p>

        {/* Links */}
        <div className="mb-10 flex flex-col gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/30"
          >
            <span className="text-accent">@</span>
            <span className="text-sm text-muted">{profile.email}</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/30"
          >
            <span className="text-accent">GH</span>
            <span className="text-sm text-muted">GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4 py-3 transition-colors hover:border-accent/30"
          >
            <span className="text-accent">in</span>
            <span className="text-sm text-muted">LinkedIn</span>
          </a>
        </div>
      </div>
      </div>
    </div>
  );
}
