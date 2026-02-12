import { profile } from "../data/mock";

export default function Contact() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-lg">
        <h1 className="mb-2 text-3xl font-bold">Get in Touch</h1>
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
  );
}
